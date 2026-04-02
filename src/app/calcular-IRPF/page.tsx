import type { Metadata } from "next";
import { CalculadoraIRPF } from "@/components/calculadoras/CalculadoraIRPF";

export const metadata: Metadata = {
  title: "Calculadora de Retención IRPF 2025",
  description:
    "Calcula el porcentaje de retención del IRPF sobre tu salario bruto anual según tu situación personal y familiar. Tablas IRPF actualizadas para 2025.",
  alternates: {
    canonical: "https://micalculadora.es/calcular-IRPF",
  },
  openGraph: {
    title: "Calculadora de IRPF 2025 | MiCalculadora.es",
    description:
      "Descubre tu retención del IRPF según tu salario y situación personal. Tablas 2025 actualizadas.",
    url: "https://micalculadora.es/calcular-IRPF",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de IRPF 2025",
    description: "Calcula tu retención del IRPF gratis.",
  },
};

export default function IRPFPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Calculadora de IRPF
        </h1>
        <p className="text-gray-500 mb-8">
          Conoce el porcentaje de retención del IRPF aplicable a tu salario
          bruto según tu situación personal y familiar.
        </p>
        <CalculadoraIRPF />
      </div>
    </main>
  );
}