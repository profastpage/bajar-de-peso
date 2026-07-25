"use client";

import { useState, useCallback } from "react";

/**
 * Quiz "Descubre tu tipo de metabolismo en 60 segundos"
 * 5 preguntas cortas -> resultado personalizado + captura de email.
 *
 * El resultado siempre recomienda la guía (es un lead magnet).
 */

export interface QuizQuestion {
  id: number;
  question: string;
  options: { label: string; score: number }[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "¿Cuántas veces por semana comes comida peruana tradicional?",
    options: [
      { label: "Casi todos los días", score: 3 },
      { label: "2-3 veces por semana", score: 2 },
      { label: "Solo los domingos / ocasiones especiales", score: 1 },
      { label: "Casi nunca", score: 0 },
    ],
  },
  {
    id: 2,
    question: "¿Cómo describirías tu nivel de energía al despertar?",
    options: [
      { label: "Cansado(a) siempre, cuesta arrancar", score: 0 },
      { label: "A veces bien, a veces agotado(a)", score: 1 },
      { label: "Bastante bien la mayoría de días", score: 2 },
      { label: "Energía plena, listo(a) para el día", score: 3 },
    ],
  },
  {
    id: 3,
    question: "¿Cuánta agua tomas al día?",
    options: [
      { label: "Menos de 4 vasos", score: 0 },
      { label: "4-6 vasos", score: 1 },
      { label: "7-8 vasos", score: 2 },
      { label: "Más de 8 vasos", score: 3 },
    ],
  },
  {
    id: 4,
    question: "¿Cuánto tiempo libre tienes para cocinar?",
    options: [
      { label: "Casi nada, como lo que haya", score: 0 },
      { label: "10-20 min por comida", score: 1 },
      { label: "30-45 min por comida", score: 2 },
      { label: "Más de 1 hora, me gusta cocinar", score: 3 },
    ],
  },
  {
    id: 5,
    question: "¿Cuál es tu mayor reto para bajar de peso?",
    options: [
      { label: "Los antojos y la ansiedad", score: 0 },
      { label: "No sé qué comer ni organizar menús", score: 1 },
      { label: "Como sano pero no bajo de peso", score: 2 },
      { label: "Falta de constancia y motivación", score: 3 },
    ],
  },
];

export type MetabolicType = "lento" | "moderado" | "acelerado";

export interface QuizResult {
  type: MetabolicType;
  title: string;
  emoji: string;
  description: string;
  recommendation: string;
}

export function getQuizResult(totalScore: number): QuizResult {
  // max score = 15, min = 0
  if (totalScore <= 5) {
    return {
      type: "lento",
      title: "Metabolismo Lento",
      emoji: "🐢",
      description:
        "Tu cuerpo tiende a guardar energía en lugar de quemarla. Esto suele pasar por dietas previas restrictivas, poca agua, sueño irregular y comidas copiosas poco frecuentes. La buena noticia: se puede reactivar.",
      recommendation:
        "Necesitas un plan estructurado de 21 días con menús frecuentes y ligeros. La guía 'Saber Peruano, Cuerpo Saludable' está diseñada precisamente para reactivar tu metabolismo con comida peruana que te guste, sin pasar hambre.",
    };
  }
  if (totalScore <= 10) {
    return {
      type: "moderado",
      title: "Metabolismo Moderado",
      emoji: "⚖️",
      description:
        "Tu metabolismo funciona razonablemente bien, pero hay margen para optimizarlo. Pequeños cambios en la frecuencia de comidas, hidratación y calidad de los ingredientes pueden marcar una gran diferencia en pocas semanas.",
      recommendation:
        "Con el plan de 21 días de la guía 'Saber Peruano, Cuerpo Saludable', vas a afinar tu metabolismo y ver resultados visibles sin esfuerzo extremo. Es el momento perfecto para empezar.",
    };
  }
  return {
    type: "acelerado",
    title: "Metabolismo Acelerado",
    emoji: "🔥",
    description:
      "Tu metabolismo es eficiente, pero probablemente estás perdiendo oportunidades por no tener un plan claro. La mayoría de personas con tu perfil pueden bajar 3-5 kg en 21 días simplemente organizándose mejor.",
    recommendation:
      "Aprovecha tu buen metabolismo con el plan estructurado de la guía 'Saber Peruano, Cuerpo Saludable'. En 3 semanas puedes consolidar hábitos y bajar esos kilos que te estorban.",
  };
}

export function useQuiz() {
  const [step, setStep] = useState(0); // 0 = intro, 1..N = preguntas, N+1 = resultado
  const [answers, setAnswers] = useState<number[]>([]);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const total = QUIZ_QUESTIONS.reduce((sum, q) => {
    const ans = answers[q.id - 1];
    if (ans === undefined) return sum;
    return sum + q.options[ans].score;
  }, 0);

  const next = useCallback((optionIndex: number) => {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[step] = optionIndex;
      return copy;
    });
    setStep((s) => s + 1);
  }, [step]);

  const restart = useCallback(() => {
    setStep(0);
    setAnswers([]);
    setEmail("");
    setSubmitted(false);
  }, []);

  const submit = useCallback(async (emailValue: string) => {
    setEmail(emailValue);
    setSubmitted(true);
    // El guardado del lead se hace desde el componente que llama a useQuiz,
    // para no acoplar el hook a la API.
    return total;
  }, [total]);

  return {
    step,
    answers,
    email,
    submitted,
    total,
    result: step > QUIZ_QUESTIONS.length ? getQuizResult(total) : null,
    next,
    restart,
    submit,
    setEmail,
  };
}
