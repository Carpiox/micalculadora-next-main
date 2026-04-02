import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "miCalculadora.es — Calculadoras Laborales Gratis España 2026",
  description: "Calculadoras de finiquito, paro, IRPF, nómina e indemnización gratis y actualizadas a 2026.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}