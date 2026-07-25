"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * Simula notificaciones sociales de compra en tiempo real.
 * Muestra un toast en la esquina inferior izquierda con:
 *  "{nombre} de {ciudad} acaba de comprar la guía · hace {X} min"
 *
 * Datos realistas basados en demografía peruana.
 */

export interface PurchaseNotification {
  id: number;
  name: string;
  city: string;
  minutesAgo: number;
  avatar: string;
}

const NAMES = [
  "María Quispe", "Carlos Mendoza", "Rosa Vásquez", "José Ríos", "Patricia Salazar",
  "Eduardo Flores", "Ana Lucero", "Luis Fernández", "Carmen Rojas", "Miguel Ángel",
  "Sofía Castro", "Diego Huamán", "Valeria Paredes", "Raúl Martínez", "Lucía Ramírez",
  "Andrés Torres", "Gabriela Silva", "Fernando Díaz", "Daniela Castillo", "Manuel Aguilar",
  "Paola Moreno", "Jorge Vargas", "Francesca León", "Bruno Cárdenas", "Alejandra Ruiz",
];

const CITIES = [
  "Lima", "Arequipa", "Trujillo", "Chiclayo", "Piura", "Cusco", "Huancayo",
  "Iquitos", "Tacna", "Chimbote", "Sullana", "Juliaca", "Cajamarca", "Pucallpa",
  "Ayacucho", "Ica", "Tarapoto", "Huaraz", "Tumbes", "Moquegua",
];

const AVATARS = ["👩", "👨", "👵", "🧑", "👩‍🦰", "👨‍🦱", "👱‍♀️", "👱", "🧓", "👩‍🦱"];

let counter = 0;

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function makeNotification(): PurchaseNotification {
  counter += 1;
  return {
    id: counter,
    name: randomItem(NAMES),
    city: randomItem(CITIES),
    minutesAgo: Math.floor(Math.random() * 8) + 1, // 1-8 min
    avatar: randomItem(AVATARS),
  };
}

interface Options {
  /** Milisegundos entre cada notificación. Default: 25000 (25s) */
  intervalMs?: number;
  /** Milisegundos que la notificación permanece visible. Default: 6000 */
  visibleMs?: number;
  /** Delay inicial antes de la primera notificación. Default: 8000 */
  initialDelayMs?: number;
  /** Activo solo si ha scrolleado al menos X px. Default: 300 */
  minScroll?: number;
}

export function useSocialProof({
  intervalMs = 25000,
  visibleMs = 6000,
  initialDelayMs = 8000,
  minScroll = 300,
}: Options = {}) {
  const [current, setCurrent] = useState<PurchaseNotification | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > minScroll) setEnabled(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [minScroll]);

  const hide = useCallback(() => setCurrent(null), []);

  useEffect(() => {
    if (!enabled) return;

    // No mostrar si ya se cerró el popup de exit-intent o si la sesión ya compró
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("nps_purchased_v1") === "1") return;
    }

    const showFirst = setTimeout(() => {
      setCurrent(makeNotification());

      const hideFirst = setTimeout(() => setCurrent(null), visibleMs);
      return () => clearTimeout(hideFirst);
    }, initialDelayMs);

    const interval = setInterval(() => {
      setCurrent(makeNotification());
      const hideTimer = setTimeout(() => setCurrent(null), visibleMs);
      // Limpiar hideTimer en la próxima iteración
      // (no podemos limpiarlo aquí porque perdería la referencia)
      void hideTimer;
    }, intervalMs);

    return () => {
      clearTimeout(showFirst);
      clearInterval(interval);
    };
  }, [enabled, intervalMs, visibleMs, initialDelayMs]);

  return { current, hide };
}
