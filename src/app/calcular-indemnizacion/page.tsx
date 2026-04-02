'use client';
import type { Metadata } from "next";
import { CalculadoraIndemnizacion } from "@/components/calculadoras/CalculadoraIndemnizacion";

export const metadata: Metadata = {
  title: "Calculadora de Indemnización por Despido 2025",
  description:
    "Calcula la indemnización por despido improcedente (33 días/año), procedente (12 días/año) o por causas objetivas (20 días/año). Conforme al Estatuto de los Trabajadores 2025.",
  alternates: {
    canonical: "https://micalculadora.es/calcular-indemnizacion",
  },
  openGraph: {
    title: "Calculadora de Indemnización por Despido 2025 | MiCalculadora.es",
    description:
      "¿Cuánto te corresponde por despido? Calcula la indemnización según el tipo de despido y tu antigüedad.",
    url: "https://micalculadora.es/calcular-indemnizacion",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Indemnización por Despido 2025",
    description: "Calcula tu indemnización por despido gratis.",
  },
};

export default function IndemnizacionPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Calculadora de Indemnización por Despido
        </h1>
        <p className="text-gray-500 mb-8">
          Calcula la indemnización que te corresponde según el tipo de despido
          (improcedente, procedente u objetivo) y tu antigüedad en la empresa.
        </p>
        <CalculadoraIndemnizacion />
      </div>
    </main>
  );
}