import type { Metadata } from "next";
import { CalculadoraNomina } from "@/components/calculadoras/CalculadoraNomina";

export const metadata: Metadata = {
  title: "Calculadora de Nómina: Bruto a Neto 2025",
  description:
    "Calcula tu salario neto a partir del bruto con desglose completo: cotizaciones a la Seguridad Social, retención IRPF y deducciones. Actualizado con las tablas 2025.",
  alternates: {
    canonical: "https://micalculadora.es/calcular-nomina",
  },
  openGraph: {
    title: "Calculadora de Nómina 2025 | MiCalculadora.es",
    description:
      "De bruto a neto en segundos. Desglose completo de cotizaciones e IRPF. Actualizado 2025.",
    url: "https://micalculadora.es/calcular-nomina",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Nómina Bruto/Neto 2025",
    description: "Calcula tu salario neto gratis.",
  },
};

export default function NominaPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Calculadora de Nómina
        </h1>
        <p className="text-gray-500 mb-8">
          Introduce tu salario bruto y obtén el neto con el desglose completo de
          cotizaciones a la Seguridad Social y retención del IRPF.
        </p>
        <CalculadoraNomina />
      </div>
    </main>
  );
}