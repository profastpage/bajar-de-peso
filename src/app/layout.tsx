import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saber Peruano, Cuerpo Saludable | Guía de 21 días para bajar de peso comiendo peruano",
  description: "Guía completa para perder peso con comida peruana barata y saludable. Menús de 21 días, recetas hackeadas de lomo saltado, ceviche, ají de gallina. Oferta flash 90% OFF. Solo S/30 (antes S/300).",
  keywords: ["bajar de peso", "dieta peruana", "comida saludable", "recetas peruanas", "nutrición Perú", "plan 21 días", "oferta"],
  authors: [{ name: "Nutrición Peruana Saludable" }],
  openGraph: {
    title: "Saber Peruano, Cuerpo Saludable — 90% OFF por tiempo limitado",
    description: "La guía #1 en Perú para bajar de peso comiendo rico, barato y peruano. Solo S/30 antes S/300.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-PE" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
