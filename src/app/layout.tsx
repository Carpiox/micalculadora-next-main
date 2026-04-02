// ✅ Server Component (NO 'use client' aquí — necesario para export metadata)
import type { Metadata } from "next";
import "./globals.css";
//import { Providers } from "@/components/providers";

// ─── Metadata global del sitio ────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://micalculadora.es"
  ),
  title: {
    default: "MiCalculadora.es | Calculadoras Laborales para España",
    template: "%s | MiCalculadora.es",
  },
  description:
    "Calculadoras laborales gratuitas y actualizadas para España: finiquito, paro, IRPF, nómina e indemnización por despido.",
  keywords: [
    "calculadora finiquito",
    "calculadora paro",
    "calculadora IRPF",
    "calculadora nómina",
    "calculadora indemnización",
    "calculadoras laborales España",
    "calcular finiquito 2025",
    "calcular paro 2025",
  ],
  authors: [{ name: "MiCalculadora.es" }],
  creator: "MiCalculadora.es",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "MiCalculadora.es",
    title: "MiCalculadora.es | Calculadoras Laborales para España",
    description:
      "Calculadoras laborales gratuitas: finiquito, paro, IRPF, nómina e indemnización.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MiCalculadora.es | Calculadoras Laborales para España",
    description:
      "Calculadoras laborales gratuitas: finiquito, paro, IRPF, nómina e indemnización.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ─── Root Layout ──────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Preconnect a Google Fonts para cargar DM Sans/DM Serif más rápido */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
      </body>
    </html>
  );
}