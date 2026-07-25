import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["700", "800", "900"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bajar-de-peso-brown.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Saber Peruano, Cuerpo Saludable | Guía de 21 días para bajar de peso comiendo peruano",
    template: "%s | Saber Peruano",
  },
  description:
    "Guía completa para perder peso con comida peruana barata y saludable. Menús de 21 días, recetas hackeadas de lomo saltado, ceviche, ají de gallina. Oferta flash 90% OFF. Solo S/30 (antes S/300).",
  keywords: [
    "bajar de peso",
    "dieta peruana",
    "comida saludable",
    "recetas peruanas",
    "nutrición Perú",
    "plan 21 días",
    "oferta",
    "lomo saltado saludable",
    "ceviche saludable",
    "ají de gallina light",
    "bajar de peso sin pasar hambre",
    "dieta económica Perú",
  ],
  authors: [{ name: "Nutrición Peruana Saludable" }],
  creator: "Nutrición Peruana Saludable",
  publisher: "Nutrición Peruana Saludable",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Saber Peruano, Cuerpo Saludable — 90% OFF por tiempo limitado",
    description:
      "La guía #1 en Perú para bajar de peso comiendo rico, barato y peruano. 21 días de menús + 40 recetas hackeadas. Solo S/30 antes S/300.",
    type: "website",
    locale: "es_PE",
    url: SITE_URL,
    siteName: "Saber Peruano, Cuerpo Saludable",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Guía Saber Peruano, Cuerpo Saludable — 90% OFF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saber Peruano, Cuerpo Saludable — 90% OFF",
    description:
      "La guía #1 en Perú para bajar de peso comiendo rico, barato y peruano. Solo S/30 antes S/300.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || undefined,
  },
  category: "Health & Fitness",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFF4E6" },
    { media: "(prefers-color-scheme: dark)", color: "#7A2E1F" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ============================================================
// JSON-LD Schema.org: Product + Offer + Reviews + FAQ
// ============================================================
const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Guía Saber Peruano, Cuerpo Saludable",
  description:
    "Guía completa de 21 días para bajar de peso con comida peruana barata y saludable. Incluye 11 capítulos, plan de menús diarios, 40+ recetas hackeadas, bonus de tracking y calculadora de IMC.",
  brand: {
    "@type": "Brand",
    name: "Saber Peruano",
  },
  category: "Health & Fitness",
  image: `${SITE_URL}/og-image.jpg`,
  offers: {
    "@type": "Offer",
    url: SITE_URL,
    price: "30.00",
    priceCurrency: "PEN",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: {
      "@type": "Organization",
      name: "Nutrición Peruana Saludable",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1247",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "María Luz Quispe" },
      reviewBody:
        "Probé de todo: pastillas, dietas de internet, gym. Nada funcionaba. Con esta guía bajé 7 kilos en 2 meses sin dejar de comer mi ceviche los domingos.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Carlos Mendoza" },
      reviewBody:
        "12 kilos menos y mi colesterol volvió a la normalidad. Las recetas son fáciles y los ingredientes baratos.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Rosa María Vásquez" },
      reviewBody:
        "Tenía pre-diabetes. En 3 meses bajé 9 kilos siguiendo el plan. Mi médico quedó sorprendido.",
    },
  ],
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Es una dieta extrema? ¿Voy a pasar hambre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para nada. La guía está diseñada para que comas rico, abundante y nutritivo. Las porciones son reales y los menús tienen snacks entre comidas. La idea NO es pasar hambre, sino elegir mejor.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito comprar alimentos caros o difíciles de encontrar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Toda la guía está basada en ingredientes que encuentras en cualquier mercado del Perú. La lista de compras semanal cuesta aprox. S/100 (unos S/14-17 al día por persona).",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto voy a bajar de peso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La pérdida de peso saludable es de 0.5 a 1 kg por semana. Si sigues el plan con constancia, en 21 días puedes esperar perder entre 1.5 y 3 kilos, y sentirte con mucha más energía.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo funciona el pago con MercadoPago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Al hacer clic en 'Comprar ahora', serás redirigida(o) a MercadoPago (Checkout Pro), donde puedes pagar con Yape, Plin, tarjeta de crédito/débito, transferencia o efectivo en agencias. Es 100% seguro y encriptado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hay garantía de devolución?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Tienes 7 días de garantía total. Si compras la guía, la revisas y sientes que no es para ti, escríbenos y te devolvemos el 100% de tu dinero, sin preguntas ni condiciones.",
      },
    },
  ],
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nutrición Peruana Saludable",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description:
    "Editorial de guías de salud y nutrición basadas en comida peruana tradicional.",
  sameAs: [
    "https://www.instagram.com/saberperuano",
    "https://www.facebook.com/saberperuano",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-PE" suppressHydrationWarning>
      <head>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />

        {/* Preconnect a dominios externos para performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Píxeles de tracking (cargan sin bloquear render) */}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <script
            // Meta Pixel noscript fallback
            dangerouslySetInnerHTML={{
              __html: `<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1"/></noscript>`,
            }}
          />
        )}
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
