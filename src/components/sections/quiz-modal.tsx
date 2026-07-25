"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Brain,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  Mail,
  Sparkles,
  CheckCircle2,
  ShoppingBag,
} from "lucide-react";
import { QUIZ_QUESTIONS, useQuiz, type QuizResult } from "@/hooks/use-quiz";
import { trackEvent } from "@/lib/tracking";

interface QuizModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBuy: () => void;
}

export function QuizModal({ open, onOpenChange, onBuy }: QuizModalProps) {
  const {
    step,
    answers,
    email,
    setEmail,
    submitted,
    result,
    next,
    restart,
    submit,
  } = useQuiz();

  const [loading, setLoading] = useState(false);

  const totalSteps = QUIZ_QUESTIONS.length;
  const isIntro = step === 0;
  const isResult = step > totalSteps;
  const currentQuestion = !isIntro && !isResult ? QUIZ_QUESTIONS[step - 1] : null;
  const progress = isResult ? 100 : (step / (totalSteps + 1)) * 100;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setLoading(true);
    trackEvent("Lead", {
      email,
      content_name: "Quiz Metabolismo",
    });
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "quiz",
          quizResult: result?.type,
          quizScore: result ? undefined : undefined,
        }),
      });
    } catch (err) {
      void err;
    }
    await submit(email);
    setLoading(false);
  };

  const handleRestart = () => {
    restart();
  };

  const handleClose = (open: boolean) => {
    onOpenChange(open);
    if (!open) {
      // Reset después de cerrar
      setTimeout(handleRestart, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg max-h-[92vh] overflow-y-auto">
        <DialogHeader className="text-center">
          <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-red-100 mb-2">
            <Brain className="h-7 w-7 text-orange-600" />
          </div>
          <DialogTitle className="text-2xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Test de Metabolismo
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Descubre en 60 segundos por qué no estás bajando de peso
          </DialogDescription>
        </DialogHeader>

        {/* Barra de progreso */}
        {!isIntro && (
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* INTRO */}
        {isIntro && (
          <div className="space-y-4 py-2">
            <p className="text-center text-gray-700">
              Responde 5 preguntas rápidas y recibe:
            </p>
            <ul className="space-y-2.5 text-sm">
              {[
                "Tu tipo de metabolismo personalizado",
                "Diagnóstico de por qué te cuesta bajar de peso",
                "Recomendación exacta de cómo empezar hoy",
                "Bonus: reporte gratis por correo (sin spam)",
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-3 text-center">
              <p className="text-xs text-orange-700 font-medium">
                ⏱️ Toma menos de 60 segundos · 100% gratis
              </p>
            </div>
            <Button
              onClick={() => next(0)}
              className="w-full h-12 text-base font-bold bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full shadow-lg shadow-orange-500/40"
            >
              EMPEZAR TEST <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        )}

        {/* PREGUNTAS */}
        {currentQuestion && (
          <div className="space-y-3 py-2">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="font-medium">
                Pregunta {step} de {totalSteps}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 leading-snug">
              {currentQuestion.question}
            </h3>
            <div className="space-y-2">
              {currentQuestion.options.map((opt, idx) => {
                const isSelected = answers[step - 1] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => next(idx)}
                    className={`w-full text-left p-3.5 rounded-xl border-2 transition-all ${
                      isSelected
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 hover:border-orange-300 hover:bg-orange-50/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">{opt.label}</span>
                      <ArrowRight
                        className={`h-4 w-4 ${
                          isSelected ? "text-orange-500" : "text-gray-300"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
            {step > 1 && (
              <button
                onClick={() => {
                  // Botón "atrás" - volver a pregunta anterior
                  // (no implementado en hook por simplicidad, aquí solo reset)
                  restart();
                }}
                className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1 mt-2"
              >
                <ArrowLeft className="h-3 w-3" /> Volver a empezar
              </button>
            )}
          </div>
        )}

        {/* RESULTADO + CAPTURA DE EMAIL */}
        {isResult && result && (
          <ResultView
            result={result}
            email={email}
            setEmail={setEmail}
            submitted={submitted}
            loading={loading}
            onSubmit={handleSubmit}
            onBuy={() => {
              handleClose(false);
              onBuy();
            }}
            onRestart={handleRestart}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}

function ResultView({
  result,
  email,
  setEmail,
  submitted,
  loading,
  onSubmit,
  onBuy,
  onRestart,
}: {
  result: QuizResult;
  email: string;
  setEmail: (v: string) => void;
  submitted: boolean;
  loading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onBuy: () => void;
  onRestart: () => void;
}) {
  if (!submitted) {
    return (
      <div className="space-y-4 py-2">
        <div className="text-center">
          <div className="text-6xl mb-2">{result.emoji}</div>
          <h3 className="text-2xl font-black text-gray-900">{result.title}</h3>
          <div className="inline-block mt-1 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold">
            Tu resultado está listo
          </div>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          {result.description}
        </p>
        <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-dashed border-orange-300 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-4 w-4 text-orange-600" />
            <p className="text-xs font-bold text-orange-700 uppercase tracking-wide">
              Tu recomendación personalizada
            </p>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">{result.recommendation}</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-3">
          <p className="text-sm font-semibold text-gray-900">
            📧 Envíame mi resultado completo + guía gratuita:
          </p>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu-correo@gmail.com"
              className="pl-10 h-12"
              autoFocus
              required
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 text-base font-bold bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full shadow-lg shadow-orange-500/40"
          >
            {loading ? "Enviando..." : "VER MI RESULTADO COMPLETO"}
          </Button>
          <p className="text-center text-xs text-gray-400">
            Sin spam. Solo 1 email con tu resultado + tip útil.
          </p>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-4 py-2">
      <div className="text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-2">
          <CheckCircle2 className="h-9 w-9 text-green-600" />
        </div>
        <h3 className="text-2xl font-black text-gray-900">¡Listo! Revisa tu correo 🎉</h3>
        <p className="text-sm text-gray-600 mt-1">
          Te enviamos tu resultado completo a <strong>{email}</strong>
        </p>
      </div>

      <div className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 border-2 border-orange-200 rounded-2xl p-5 text-center">
        <p className="text-xs font-bold text-orange-700 uppercase tracking-wide mb-2">
          Basado en tu tipo de metabolismo "{result.title}"
        </p>
        <p className="text-sm text-gray-700 mb-4">
          Tu siguiente paso recomendado es seguir el plan de 21 días de la guía.
        </p>
        <div className="bg-white rounded-xl p-4 mb-3">
          <p className="text-xs text-gray-500">Tu oferta exclusiva</p>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className="text-gray-400 line-through text-lg">S/300</span>
            <span className="text-4xl font-black text-orange-600">S/30</span>
          </div>
          <p className="text-xs text-green-600 font-bold mt-1">90% OFF por tiempo limitado</p>
        </div>
        <Button
          onClick={onBuy}
          className="w-full h-12 text-base font-bold bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full shadow-lg shadow-orange-500/40"
        >
          <ShoppingBag className="h-5 w-5 mr-2" />
          COMPRAR AHORA S/30
        </Button>
      </div>

      <button
        onClick={onRestart}
        className="w-full text-xs text-gray-400 hover:text-gray-600 flex items-center justify-center gap-1"
      >
        <RefreshCw className="h-3 w-3" /> Repetir test
      </button>
    </div>
  );
}
