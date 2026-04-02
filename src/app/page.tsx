// ✅ Server Component (sin 'use client' — no tiene estado ni eventos)
import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  TrendingDown,
  Receipt,
  Banknote,
  Scale,
  Calculator,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Calculadoras Laborales Gratuitas para España 2025",
  description:
    "Herramientas gratuitas y actualizadas para calcular finiquito, prestación por paro, retención IRPF, salario neto e indemnización por despido. Sin registros.",
  alternates: {
    canonical: "https://micalculadora.es",
  },
  openGraph: {
    title: "Calculadoras Laborales Gratuitas para España 2025 | MiCalculadora.es",
    description:
      "Calcula finiquito, paro, IRPF, nómina e indemnización. Gratis, rápido y actualizado.",
    url: "https://micalculadora.es",
  },
};

const calculadoras = [
  {
    titulo: "Calculadora de Finiquito",
    descripcion:
      "Calcula el importe exacto de tu finiquito: días trabajados, vacaciones pendientes y pagas extra.",
    href: "/calcular-finiquito",
    icono: FileText,
    colorBg: "bg-blue-50",
    colorText: "text-blue-600",
    colorBorder: "hover:border-blue-200",
  },
  {
    titulo: "Calculadora de Paro",
    descripcion:
      "Estima la cuantía y duración de tu prestación por desempleo según tu salario y cotizaciones.",
    href: "/calcular-paro",
    icono: TrendingDown,
    colorBg: "bg-orange-50",
    colorText: "text-orange-600",
    colorBorder: "hover:border-orange-200",
  },
  {
    titulo: "Calculadora de IRPF",
    descripcion:
      "Conoce el porcentaje de retención del IRPF sobre tu salario bruto según tu situación personal.",
    href: "/calcular-IRPF",
    icono: Receipt,
    colorBg: "bg-green-50",
    colorText: "text-green-600",
    colorBorder: "hover:border-green-200",
  },
  {
    titulo: "Calculadora de Nómina",
    descripcion:
      "Descubre tu salario neto a partir del bruto con desglose de cotizaciones y retenciones.",
    href: "/calcular-nomina",
    icono: Banknote,
    colorBg: "bg-purple-50",
    colorText: "text-purple-600",
    colorBorder: "hover:border-purple-200",
  },
  {
    titulo: "Calculadora de Indemnización",
    descripcion:
      "Calcula la indemnización por despido procedente, improcedente o por causas objetivas.",
    href: "/calcular-indemnizacion",
    icono: Scale,
    colorBg: "bg-red-50",
    colorText: "text-red-600",
    colorBorder: "hover:border-red-200",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white border-b border-border">
        <div className="container max-w-4xl py-16 text-center">
          <div className="flex justify-center mb-4">
            <Calculator className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Calculadoras Laborales para España
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Herramientas gratuitas y actualizadas para calcular finiquito, paro,
            IRPF, nómina e indemnización. Sin registros, sin complicaciones.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="container max-w-5xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculadoras.map((calc) => {
            const Icono = calc.icono;
            return (
              <Link
                key={calc.href}
                href={calc.href}
                className={`bg-card rounded-xl border border-border p-6 hover:shadow-md transition-all group ${calc.colorBorder}`}
              >
                <div
                  className={`inline-flex p-3 rounded-lg ${calc.colorBg} ${calc.colorText} mb-4`}
                >
                  <Icono className="h-6 w-6" />
                </div>
                <h2
                  className={`text-lg font-semibold text-card-foreground mb-2 group-hover:${calc.colorText} transition-colors`}
                >
                  {calc.titulo}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {calc.descripcion}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-white mt-12">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MiCalculadora.es · Las calculadoras son
          orientativas. Consulta siempre con un asesor laboral para decisiones
          importantes.
        </div>
      </footer>
    </main>
  );
}