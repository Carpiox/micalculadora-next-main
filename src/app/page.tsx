import type { Metadata } from "next";
import Link from "next/link";
import { Calculator, FileText, TrendingDown, Receipt, Banknote, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Calculadoras Laborales Gratuitas para España",
  description:
    "Calcula tu finiquito, prestación por desempleo, retención IRPF, nómina e indemnización por despido de forma rápida y precisa. Actualizadas con la normativa española vigente.",
  alternates: {
    canonical: "https://micalculadora.es",
  },
  openGraph: {
    title: "Calculadoras Laborales Gratuitas para España | MiCalculadora.es",
    description:
      "Calcula finiquito, paro, IRPF, nómina e indemnización. Gratis, rápido y actualizado.",
    url: "https://micalculadora.es",
  },
};

const calculadoras = [
  {
    titulo: "Calculadora de Finiquito",
    descripcion:
      "Calcula el importe exacto de tu finiquito según los días trabajados, vacaciones pendientes y convenio colectivo.",
    href: "/calcular-finiquito",
    icono: FileText,
    color: "bg-blue-50 text-blue-600",
  },
  {
    titulo: "Calculadora de Paro",
    descripcion:
      "Estima la cuantía de tu prestación por desempleo en función de tu salario y tiempo cotizado.",
    href: "/calcular-paro",
    icono: TrendingDown,
    color: "bg-orange-50 text-orange-600",
  },
  {
    titulo: "Calculadora de IRPF",
    descripcion:
      "Conoce el porcentaje de retención del IRPF sobre tu salario bruto anual según tu situación personal.",
    href: "/calcular-IRPF",
    icono: Receipt,
    color: "bg-green-50 text-green-600",
  },
  {
    titulo: "Calculadora de Nómina",
    descripcion:
      "Descubre tu salario neto a partir del bruto, con desglose completo de cotizaciones y retenciones.",
    href: "/calcular-nomina",
    icono: Banknote,
    color: "bg-purple-50 text-purple-600",
  },
  {
    titulo: "Calculadora de Indemnización",
    descripcion:
      "Calcula la indemnización por despido procedente, improcedente o por causas objetivas.",
    href: "/calcular-indemnizacion",
    icono: Scale,
    color: "bg-red-50 text-red-600",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <div className="flex justify-center mb-4">
            <Calculator className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Calculadoras Laborales para España
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Herramientas gratuitas y actualizadas para calcular finiquito, paro,
            IRPF, nómina e indemnización. Sin registros, sin complicaciones.
          </p>
        </div>
      </section>

      {/* Grid de calculadoras */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculadoras.map((calc) => {
            const Icono = calc.icono;
            return (
              <Link
                key={calc.href}
                href={calc.href}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-blue-200 transition-all group"
              >
                <div
                  className={`inline-flex p-3 rounded-lg ${calc.color} mb-4`}
                >
                  <Icono className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {calc.titulo}
                </h2>
                <p className="text-sm text-gray-500">{calc.descripcion}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Footer simple */}
      <footer className="border-t bg-white mt-12">
        <div className="max-w-5xl mx-auto px-4 py-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} MiCalculadora.es · Calculadoras laborales
          para España
        </div>
      </footer>
    </main>
  );
}