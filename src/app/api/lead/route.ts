import { NextRequest, NextResponse } from "next/server";

/**
 * Endpoint para capturar leads:
 *  - Exit-intent popup (descuento por email)
 *  - Quiz (resultado + email)
 *
 * En modo DEMO (sin DATABASE_URL externa ni integración con ESP),
 * simplemente loggea el lead y responde OK.
 * En producción, integrar con Brevo/Mailchimp/ConvertKit usando una
 * variable de entorno como BREVO_API_KEY.
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source, name, quizResult, quizScore } = body || {};

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Email inválido" },
        { status: 400 }
      );
    }

    // En el futuro: guardar en DB.
    // Por ahora: log + respuesta OK.
    console.log("[LEAD CAPTURE]", {
      email,
      source: source || "unknown",
      name: name || "",
      quizResult: quizResult || null,
      quizScore: quizScore ?? null,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent"),
      referrer: request.headers.get("referer"),
    });

    // Simular latencia de API real
    await new Promise((r) => setTimeout(r, 400));

    return NextResponse.json({
      ok: true,
      message: "Lead capturado correctamente",
      coupon: source === "exit_intent" ? "BIENVENIDO10" : null, // 10% off extra
    });
  } catch (error) {
    console.error("Error capturando lead:", error);
    return NextResponse.json(
      { ok: false, error: "Error interno" },
      { status: 500 }
    );
  }
}
