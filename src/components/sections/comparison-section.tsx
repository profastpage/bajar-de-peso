"use client";

import { CheckCircle2, XCircle, TrendingDown, Sparkles } from "lucide-react";

const TRADITIONAL = [
  "Dietas genéricas de internet (sin contexto peruano)",
  "Prohiben el arroz, el pan, la papa, el ají",
  "Suplementos caros importados que no llegan al pueblo",
  "Menús con quinoa kale y aguacate (caros en Perú)",
  "Plan que abandonedas a los 5 días por hambre o aburrimiento",
  "Culpa cuando comes tu ceviche del domingo",
  "Recetas de 45 minutos que no haces en semana",
  "Sin guía para fiestas, cumpleaños o pollerías",
  "Costo mensual: S/150-300 en supplements + gym",
];

const OURS = [
  "Diseñada 100% para el paladar y mercado peruano",
  "Nada prohibido: aprender a controlar porciones",
  "Sin suplementos. Solo comida real del mercado",
  "Quinua, lentejas, pollo, huevo, verduras locales baratas",
  "Plan de 21 días escalonado: adaptación → consolidación",
  "Estrategia para disfrutar sin culpa y volver al plan lunes",
  "Recetas en 15 min para días de semana + 30 min para finde",
  "Capítulo 6 completo: cómo sobrevivir a fiestas y restaurantes",
  "Costo semanal: ~S/100 (S/14 al día) en comida real",
];

export function ComparisonSection() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold mb-3">
            <TrendingDown className="h-3 w-3" /> LA DIFERENCIA
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-3">
            Por qué esta guía{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              sí funciona
            </span>{" "}
            donde otras fallan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            La mayoría de dietas fallan porque ignoran tu cultura, tu bolsillo y tu vida real.
            Esta guía fue hecha para el peruano promedio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {/* Columna: Dietas tradicionales */}
          <div className="bg-red-50/50 border-2 border-red-100 rounded-3xl p-6 md:p-8">
            <div className="text-center mb-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mb-2">
                <XCircle className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Dietas tradicionales</h3>
              <p className="text-sm text-red-500 font-medium">Lo que probablemente ya intentaste</p>
            </div>
            <ul className="space-y-3">
              {TRADITIONAL.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <XCircle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="line-through decoration-red-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna: Nuestra guía */}
          <div className="bg-gradient-to-br from-orange-50 to-green-50 border-2 border-orange-300 rounded-3xl p-6 md:p-8 relative shadow-lg shadow-orange-200/40">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold flex items-center gap-1 shadow-md">
              <Sparkles className="h-3 w-3" /> RECOMENDADO
            </div>
            <div className="text-center mb-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-2">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Guía Saber Peruano</h3>
              <p className="text-sm text-orange-600 font-medium">Hecha para ti, en tu contexto</p>
            </div>
            <ul className="space-y-3">
              {OURS.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-800">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 max-w-2xl mx-auto bg-gradient-to-r from-orange-50 to-red-50 border-2 border-dashed border-orange-300 rounded-2xl p-5 text-center">
          <p className="text-sm text-gray-700">
            <strong className="text-orange-600">En resumen:</strong> No necesitas dieta extranjera,
            suplementos caros ni gimnasio. Necesitas un plan que respete tu cultura, tu bolsillo
            y tu tiempo. Eso es exactamente lo que entrega esta guía.
          </p>
        </div>
      </div>
    </section>
  );
}
