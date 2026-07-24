import { NextRequest, NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { customerName, customerEmail } = body || {};

    const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN;

    // MODO DEMO: cuando no hay token real configurado, devolvemos
    // una respuesta simulada para que la landing funcione 100%.
    // En producción, setear MERCADO_PAGO_ACCESS_TOKEN en .env
    if (!accessToken || accessToken.includes("DEMO") || accessToken.includes("TEST-DEMO")) {
      return NextResponse.json({
        ok: true,
        demo: true,
        init_point: "DEMO_MODE",
        preference_id: "demo_" + Date.now(),
        message:
          "Modo demo activo. Configura MERCADO_PAGO_ACCESS_TOKEN en .env para activar Checkout Pro real.",
        customer: { name: customerName, email: customerEmail },
      });
    }

    const client = new MercadoPagoConfig({
      accessToken,
      options: { timeout: 5000, idempotencyKey: crypto.randomUUID() },
    });

    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: [
          {
            id: "guia-saber-peruano-cuerpo-saludable",
            title: "Guía Saber Peruano, Cuerpo Saludable (PDF + DOCX)",
            description:
              "Guía completa de 21 días para bajar de peso con comida peruana. Incluye 11 capítulos, recetas hackeadas, plan de menús, bonus de tracking y calculadora de IMC.",
            category_id: "digital_goods",
            quantity: 1,
            currency_id: "PEN",
            unit_price: 30,
          },
        ],
        payer: customerEmail
          ? {
              name: customerName || "Cliente",
              email: customerEmail,
            }
          : undefined,
        back_urls: {
          success: `${process.env.NEXT_PUBLIC_SITE_URL || ""}/?status=success`,
          pending: `${process.env.NEXT_PUBLIC_SITE_URL || ""}/?status=pending`,
          failure: `${process.env.NEXT_PUBLIC_SITE_URL || ""}/?status=failure`,
        },
        auto_return: "approved",
        statement_descriptor: "NUTRICION PERUANA",
        metadata: {
          product: "guia-bajar-peso",
          customer_email: customerEmail || "",
        },
      },
    });

    return NextResponse.json({
      ok: true,
      init_point: result.init_point,
      preference_id: result.id,
      sandbox_init_point: result.sandbox_init_point,
    });
  } catch (error) {
    console.error("Error creando preferencia MercadoPago:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "No se pudo crear la preferencia de pago. Intenta nuevamente.",
        detail: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
