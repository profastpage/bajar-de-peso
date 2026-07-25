"use client";

import { Shield, RefreshCw, Lock, Award, Heart, CheckCircle2 } from "lucide-react";

export function GuaranteeBadgeSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-orange-50/50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Sello grande */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="relative inline-flex items-center justify-center mb-4">
            {/* Círculo decorativo exterior */}
            <div className="absolute inset-0 rounded-full bg-green-200 blur-xl opacity-60 scale-150" />
            <div className="relative h-28 w-28 md:h-32 md:w-32 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl shadow-green-500/30 border-4 border-white">
              <div className="text-center text-white">
                <Shield className="h-8 w-8 mx-auto mb-1" />
                <p className="text-xs font-black leading-none">GARANTÍA</p>
                <p className="text-2xl font-black leading-none mt-0.5">7 DÍAS</p>
              </div>
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
            Garantía de devolución 100%
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Estamos tan seguros del valor que entregamos que asumimos todo el riesgo por ti.
            Si en 7 días sientes que la guía no es para ti, te devolvemos cada sol, sin
            preguntas ni condiciones.
          </p>
        </div>

        {/* Grid de garantías específicas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: RefreshCw,
              title: "Reembolso total",
              desc: "100% de tu dinero de vuelta, sin letra chica.",
              color: "text-green-600 bg-green-100",
            },
            {
              icon: Lock,
              title: "Pago seguro",
              desc: "MercadoPago encripta tu transacción de extremo a extremo.",
              color: "text-blue-600 bg-blue-100",
            },
            {
              icon: Heart,
              title: "Sin preguntas",
              desc: "Si no te sirve, escríbenos y te devolvemos. Así de simple.",
              color: "text-pink-600 bg-pink-100",
            },
            {
              icon: Award,
              title: "Calidad verificada",
              desc: "11 capítulos, 40+ recetas, plan 21 días. No es un PDF genérico.",
              color: "text-orange-600 bg-orange-100",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${item.color} mb-3`}>
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Caja de compromiso */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="flex-shrink-0">
              <div className="h-16 w-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                <CheckCircle2 className="h-9 w-9 text-green-600" />
              </div>
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-lg font-black text-gray-900 mb-1">
                Nuestro compromiso contigo
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Si después de aplicar el plan durante 7 días no sientes que vale cada sol
                que pagaste, te devolvemos el 100%. Sin pedir explicaciones, sin hacerte
                sentir mal. Solo escríbenos a{" "}
                <a
                  href="mailto:soporte@saberperuano.com"
                  className="text-green-700 font-semibold underline"
                >
                  soporte@saberperuano.com
                </a>{" "}
                y procesamos tu reembolso en menos de 48 horas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
