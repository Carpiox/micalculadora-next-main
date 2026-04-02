'use client';
import type { Metadata } from "next";
import  CalculadoraParo  from "@/components/CalculadoraParo";

export const metadata: Metadata = {
  title: "Calculadora de Paro (Prestación por Desempleo) 2025",
  description:
    "Calcula tu prestación por desempleo (paro) según tu salario base de cotización y los meses cotizados. Incluye cálculo de la duración y cuantía mensual. Actualizado 2025.",
  alternates: {
    canonical: "https://micalculadora.es/calcular-paro",
  },
  openGraph: {
    title: "Calculadora de Paro 2025 | MiCalculadora.es",
    description:
      "¿Cuánto paro te corresponde? Calcula la cuantía y duración de tu prestación por desempleo.",
    url: "https://micalculadora.es/calcular-paro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Paro 2025",
    description: "Calcula tu prestación por desempleo gratis.",
  },
};

export default function ParoPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Calculadora de Paro
        </h1>
        <p className="text-gray-500 mb-8">
          Estima la cuantía y duración de tu prestación por desempleo en función
          de tu salario y tiempo cotizado.
        </p>
        <CalculadoraParo />
      </div>
    </main>
  );
}