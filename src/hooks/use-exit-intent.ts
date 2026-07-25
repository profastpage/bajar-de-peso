"use client";

import { useState, useEffect } from "react";

/**
 * Detecta cuando el usuario intenta salir de la página.
 * - En desktop: detecta cuando el mouse sale por arriba del viewport.
 * - En mobile: detecta cuando el scroll sube muy rápido o pasa cierto umbral
 *   tras haber bajado, simulando el gesto de "volver arriba" que precede al cierre.
 *
 * El callback se dispara UNA sola vez por sesión (persistido en sessionStorage).
 */

const STORAGE_KEY = "nps_exit_intent_shown_v1";

interface Options {
  onExit: () => void;
  /** Segundos mínimos en la página antes de activar el trigger. Default: 8 */
  minTimeOnPage?: number;
  /** Scroll mínimo en px antes de activar (evita falsos positivos en tope). Default: 400 */
  minScroll?: number;
}

export function useExitIntent({ onExit, minTimeOnPage = 8, minScroll = 400 }: Options) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);

    // Ya se mostró esta sesión -> no hacer nada
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;

    let triggered = false;
    const start = Date.now();
    let maxScroll = 0;

    const trigger = () => {
      if (triggered) return;
      if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
      const elapsed = (Date.now() - start) / 1000;
      if (elapsed < minTimeOnPage) return;
      if (maxScroll < minScroll) return;

      triggered = true;
      sessionStorage.setItem(STORAGE_KEY, "1");
      onExit();
    };

    const handleMouseOut = (e: MouseEvent) => {
      // Solo dispara si el mouse sale por el top de la ventana
      if (e.clientY <= 0 && !e.relatedTarget) {
        trigger();
      }
    };

    const handleScroll = () => {
      maxScroll = Math.max(maxScroll, window.scrollY);
    };

    // Mobile: detección de swipe-down / scroll-up brusco
    let lastY = window.scrollY;
    let lastTime = Date.now();
    const handleTouchMove = () => {
      const now = Date.now();
      const y = window.scrollY;
      const dy = lastY - y; // positivo = subiendo
      const dt = now - lastTime;
      if (dy > 50 && dt < 200 && y < 200) {
        // Subió rápido y está cerca del top -> posible exit
        trigger();
      }
      lastY = y;
      lastTime = now;
    };

    // Trigger de respaldo: si lleva más de 60s en la página y ha scrolleado
    const fallbackTimer = setTimeout(() => {
      if (maxScroll >= minScroll) trigger();
    }, 60000);

    document.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleTouchMove);
      clearTimeout(fallbackTimer);
    };
  }, [onExit, minTimeOnPage, minScroll]);

  return { ready };
}
