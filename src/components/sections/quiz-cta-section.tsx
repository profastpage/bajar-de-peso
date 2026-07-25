"use client";

import { Button } from "@/components/ui/button";
import { Brain, Clock, Sparkles, ArrowRight } from "lucide-react";

interface QuizCTASectionProps {
  onOpenQuiz: () => void;
}

/**
 * Sección que invita al usuario a tomar el test gratuito de metabolismo.
 * Funciona como lead magnet: captura email + personaliza el pitch.
 */
export function QuizCTASection({ onOpenQuiz }: QuizCTASectionProps) {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-orange-200 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-red-200 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative">
        <div className="bg-white rounded-3xl shadow-2xl border border-orange-100 overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            {/* Lado izquierdo: contenido */}
            <div className="p-7 md:p-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold mb-4">
                <Sparkles className="h-3 w-3" /> TEST GRATUITO
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-3">
                Descubre tu tipo de{" "}
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  metabolismo
                </span>{" "}
                en 60 segundos
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Responde 5 preguntas rápidas y recibe un diagnóstico personalizado sobre
                por qué te cuesta bajar de peso y qué hacer al respecto desde hoy.
              </p>

              <ul className="space-y-2 mb-6">
                {[
                  "Diagnóstico de tu metabolismo",
                  "Recomendación exacta de por dónde empezar",
                  "Bonus: reporte gratis por correo",
                ].map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 text-xs font-bold">
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <Button
                onClick={onOpenQuiz}
                className="w-full md:w-auto h-12 px-8 text-base font-bold bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full shadow-lg shadow-orange-500/40 group"
              >
                <Brain className="h-5 w-5 mr-2" />
                HACER TEST GRATIS
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                <Clock className="h-3 w-3" /> Sin costo · Sin tarjeta · Sin spam
              </p>
            </div>

            {/* Lado derecho: mockup visual */}
            <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 p-7 md:p-10 text-white relative min-h-[280px] flex items-center">
              <div className="w-full">
                <div className="bg-white/15 backdrop-blur rounded-2xl p-4 mb-3 border border-white/20">
                  <p className="text-xs text-white/80 mb-2">Pregunta 2 de 5</p>
                  <p className="text-sm font-bold mb-3">¿Cómo describirías tu energía al despertar?</p>
                  <div className="space-y-1.5">
                    <div className="bg-white/10 rounded-lg px-3 py-2 text-xs">
                      Cansado(a) siempre, cuesta arrancar
                    </div>
                    <div className="bg-white rounded-lg px-3 py-2 text-xs text-orange-600 font-bold">
                      ✓ Bastante bien la mayoría de días
                    </div>
                    <div className="bg-white/10 rounded-lg px-3 py-2 text-xs">
                      Energía plena, listo(a) para el día
                    </div>
                  </div>
                </div>
                <div className="bg-white/15 backdrop-blur rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">🔥</span>
                    <p className="text-sm font-bold">Tu resultado</p>
                  </div>
                  <p className="text-xs text-white/90">
                    Metabolismo <strong>Acelerado</strong> — puedes bajar 3-5 kg en 21 días
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
