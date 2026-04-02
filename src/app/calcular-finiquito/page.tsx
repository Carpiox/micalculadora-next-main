'use client';
import type { Metadata } from "next";
// El componente de la calculadora viene de components/calculadoras/
// donde tiene 'use client' porque usa useState/useForm
import { CalculadoraFinquito } from "@/components/calculadoras/CalculadoraFinquito";
export const metadata: Metadata = {
  title: "Calculadora de Finiquito 2025",
  description:
    "Calcula el finiquito que te corresponde al terminar tu contrato laboral: días trabajados, vacaciones no disfrutadas, pagas extra y más. Gratis y actualizado 2025.",
  alternates: {
    canonical: "https://micalculadora.es/calcular-finiquito",
  },
  openGraph: {
    title: "Calculadora de Finiquito 2025 | MiCalculadora.es",
    description:
      "Calcula tu finiquito de forma precisa: vacaciones, pagas extra, salario pendiente. Gratuita y actualizada.",
    url: "https://micalculadora.es/calcular-finiquito",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Finiquito 2025",
    description: "Calcula tu finiquito gratis y actualizado.",
  },
};

export default function FinquitoPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Calculadora de Finiquito
        </h1>
        <p className="text-gray-500 mb-8">
          Introduce los datos de tu contrato y obtendrás el importe exacto de tu
          finiquito.
        </p>
        <CalculadoraFinquito />
      </div>
    </main>
  );
}