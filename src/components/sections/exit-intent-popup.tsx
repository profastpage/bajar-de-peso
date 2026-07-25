"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Gift, Clock, CheckCircle2, Mail } from "lucide-react";
import { useExitIntent } from "@/hooks/use-exit-intent";
import { trackEvent } from "@/lib/tracking";

interface ExitIntentPopupProps {
  onClaimed?: (email: string, coupon: string) => void;
}

/**
 * Popup de salida que captura email ofreciendo un cupón de 10% extra.
 * Se dispara UNA vez por sesión cuando el usuario intenta salir.
 */
export function ExitIntentPopup({ onClaimed }: ExitIntentPopupProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [claimed, setClaimed] = useState(false);

  useExitIntent({
    onExit: () => setOpen(true),
    minTimeOnPage: 8,
    minScroll: 400,
  });

  // Cerrar con tecla Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    // Bloquear scroll de fondo
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

    setLoading(true);
    trackEvent("Lead", { email, content_name: "Exit Intent Popup" });

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "exit_intent" }),
      });
    } catch (err) {
      // Silencioso: aún así entregar el cupón al usuario
      void err;
    }

    setLoading(false);
    setClaimed(true);
    onClaimed?.(email, "BIENVENIDO10");

    // Auto-cerrar después de 6s
    setTimeout(() => {
      setOpen(false);
      // Reset para una próxima sesión
      setTimeout(() => setClaimed(false), 500);
    }, 6000);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Cerrar"
          className="absolute top-3 right-3 z-10 h-9 w-9 rounded-full bg-white/80 hover:bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-700 transition"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header con gradiente */}
        <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 p-6 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-yellow-300 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white blur-3xl" />
          </div>
          <div className="relative">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur mb-3">
              <Gift className="h-7 w-7" />
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-yellow-200 mb-1">
              Espera, no te vayas
            </p>
            <h2 className="text-2xl font-black leading-tight">
              Tienes un cupón de <span className="text-yellow-300">10% EXTRA</span> esperándote
            </h2>
          </div>
        </div>

        {/* Cuerpo */}
        {!claimed ? (
          <div className="p-6">
            <div className="bg-orange-50 border-2 border-dashed border-orange-300 rounded-2xl p-4 text-center mb-5">
              <p className="text-sm text-gray-600">Precio con descuento</p>
              <div className="flex items-center justify-center gap-2 mt-1">
                <span className="text-gray-400 line-through text-lg">S/30</span>
                <span className="text-4xl font-black text-orange-600">S/27</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Solo por dejar tu correo. La oferta caduca en 15 minutos.
              </p>
            </div>

            <ul className="space-y-2 mb-5 text-sm text-gray-700">
              {[
                "Cupón único de 10% aplicado en el checkout",
                "Recordatorio por email antes de que termine la oferta",
                "Tips de nutrición peruana gratis (sin spam)",
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu-correo@gmail.com"
                  className="pl-10 h-12 text-base"
                  autoFocus
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 text-base font-bold bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full shadow-lg shadow-orange-500/40"
              >
                {loading ? "Generando cupón..." : "🎁 RECLAMAR MI 10% EXTRA"}
              </Button>
            </form>

            <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1">
              <Clock className="h-3 w-3" /> Tu cupón se activa automáticamente al hacer clic en comprar
            </p>
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
              <CheckCircle2 className="h-9 w-9 text-green-600" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">¡Cupón activado! 🎉</h3>
            <p className="text-gray-600 mb-4">
              Te guardamos el código <strong className="text-orange-600 font-mono bg-orange-50 px-2 py-0.5 rounded">BIENVENIDO10</strong>.
              Ya puedes completar tu compra con 10% extra de descuento.
            </p>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-4 mb-4">
              <p className="text-xs text-gray-500">Tu precio final</p>
              <p className="text-3xl font-black text-orange-600">S/27</p>
              <p className="text-xs text-gray-500 mt-1">En vez de S/30 · Ahorro total S/273</p>
            </div>
            <p className="text-xs text-gray-400">Esta ventana se cerrará automáticamente...</p>
          </div>
        )}
      </div>
    </div>
  );
}
