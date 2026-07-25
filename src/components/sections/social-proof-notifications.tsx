"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, X, ShoppingBag } from "lucide-react";
import { useSocialProof } from "@/hooks/use-social-proof";

/**
 * Notificación flotante de "compra social" en la esquina inferior izquierda.
 * Aparece periódicamente mostrando que otras personas están comprando la guía.
 */
export function SocialProofNotifications() {
  const { current, hide } = useSocialProof({
    intervalMs: 28000,
    visibleMs: 7000,
    initialDelayMs: 10000,
    minScroll: 400,
  });
  const [leaving, setLeaving] = useState(false);

  // Animación de salida
  useEffect(() => {
    if (!current) {
      setLeaving(false);
      return;
    }
    const timer = setTimeout(() => {
      setLeaving(true);
      setTimeout(hide, 300);
    }, 6500);
    return () => clearTimeout(timer);
  }, [current, hide]);

  if (!current) return null;

  return (
    <div
      className={`fixed bottom-20 md:bottom-6 left-3 md:left-6 z-40 max-w-[calc(100vw-1.5rem)] md:max-w-sm ${
        leaving ? "animate-out slide-out-to-left fade-out duration-300" : "animate-in slide-in-from-left fade-in duration-500"
      }`}
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-orange-100 overflow-hidden">
        <div className="flex items-stretch">
          {/* Avatar */}
          <div className="bg-gradient-to-br from-orange-100 to-red-100 px-4 flex items-center justify-center">
            <span className="text-3xl">{current.avatar}</span>
          </div>

          {/* Texto */}
          <div className="flex-1 py-3 pr-3 pl-2 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-600 flex-shrink-0" />
              <p className="text-xs font-bold text-gray-900 truncate">
                {current.name}
              </p>
              <span className="text-xs text-gray-400 flex-shrink-0">·</span>
              <p className="text-xs text-gray-500 flex-shrink-0">{current.city}</p>
            </div>
            <p className="text-xs text-gray-600 leading-tight">
              acaba de comprar la{" "}
              <span className="font-semibold text-orange-600">Guía</span>{" "}
              <span className="inline-flex items-center gap-0.5">
                <ShoppingBag className="h-3 w-3" /> S/30
              </span>
            </p>
            <p className="text-[10px] text-gray-400 mt-0.5 flex items-center gap-1">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              Verificado · hace {current.minutesAgo} min
            </p>
          </div>

          {/* Cerrar */}
          <button
            onClick={() => {
              setLeaving(true);
              setTimeout(hide, 300);
            }}
            className="px-2 text-gray-300 hover:text-gray-500 transition"
            aria-label="Cerrar notificación"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
