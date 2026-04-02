import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import CalculadoraFiniquito from "@/components/CalculadoraFiniquito";
import EjemplosReales from "@/components/EjemplosReales";
import ComparadorDespidos from "@/components/ComparadorDespidos";
import ErroresYConsejos from "@/components/ErroresYConsejos";
import ContenidoSEO from "@/components/ContenidoSEO";
import FAQ from "@/components/FAQ";
import Afiliados from "@/components/Afiliados";
import EnlacesCalculadoras from "@/components/EnlacesCalculadoras";
import Footer from "@/components/Footer";

const finiquitoFaqs = [
  { pregunta: "¿Qué es exactamente el finiquito?", respuesta: "Es el dinero que la empresa te debe cuando dejas de trabajar, por el motivo que sea. Incluye los días de salario pendientes, las vacaciones que no hayas disfrutado y la parte de las pagas extras que ya hayas generado." },
  { pregunta: "¿Finiquito e indemnización son lo mismo?", respuesta: "No. El finiquito es lo que te deben SIEMPRE (salario, vacaciones, pagas). La indemnización es una cantidad EXTRA que solo te pagan si el despido es objetivo o improcedente." },
  { pregunta: "Me voy voluntariamente, ¿tengo derecho a algo?", respuesta: "Sí. No tendrás indemnización ni derecho a paro, pero la empresa te tiene que pagar el finiquito: los días trabajados, las vacaciones no disfrutadas y la parte proporcional de las pagas extras." },
  { pregunta: "¿Cuánto me corresponde de finiquito con 10 años de antigüedad?", respuesta: "Depende de tu salario y del tipo de despido. Con un salario de 1.500 € brutos y despido improcedente, la indemnización sola serían unos 19.000 €, más el salario pendiente, vacaciones y pagas." },
  { pregunta: "¿Puedo negarme a firmar el finiquito?", respuesta: "Puedes, pero lo mejor es firmarlo escribiendo 'No conforme'. Así cobras lo que te dan y mantienes el derecho a reclamar la diferencia. Tienes 1 año para hacerlo." },
  { pregunta: "Mi empresa dice que mi despido es disciplinario, ¿qué hago?", respuesta: "Muchas empresas usan el despido disciplinario para no pagar indemnización, aunque la causa real no lo justifique. Si impugnas ante el juzgado y el juez lo declara improcedente, te corresponden 33 días por año. Tienes 20 días hábiles para presentar la demanda." },
  { pregunta: "¿La indemnización por despido paga IRPF?", respuesta: "La indemnización legal por despido está exenta de IRPF. Solo pagarías impuestos si la empresa te paga una cantidad superior al mínimo legal." },
];

const finiquitoPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://micalculadora.es/calculadora-finiquito#webapp",
      name: "Calculadora de Finiquito España 2026",
      url: "https://micalculadora.es/calculadora-finiquito",
      description:
        "Herramienta gratuita para calcular tu finiquito en España. Incluye indemnización por despido, salario pendiente, vacaciones no disfrutadas y pagas extras proporcionales. Actualizada a la legislación 2026.",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
      },
      provider: {
        "@type": "Organization",
        "@id": "https://micalculadora.es/#organization",
        name: "miCalculadora.es",
        url: "https://micalculadora.es",
      },
      inLanguage: "es",
      featureList:
        "Cálculo de indemnización por despido improcedente, objetivo y disciplinario, salario pendiente, vacaciones no disfrutadas, pagas extras proporcionales, desglose completo",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://micalculadora.es/calculadora-finiquito#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: "https://micalculadora.es",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Calculadora de Finiquito",
          item: "https://micalculadora.es/calculadora-finiquito",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://micalculadora.es/calculadora-finiquito#faq",
      mainEntity: finiquitoFaqs.map((f) => ({
        "@type": "Question",
        name: f.pregunta,
        acceptedAnswer: { "@type": "Answer", text: f.respuesta },
      })),
    },
    {
      "@type": "HowTo",
      "@id": "https://micalculadora.es/calculadora-finiquito#howto",
      name: "Cómo se calcula el finiquito en España",
      description:
        "Guía paso a paso para calcular tu finiquito en España, incluyendo salario pendiente, vacaciones, pagas extras e indemnización por despido.",
      totalTime: "PT2M",
      tool: [
        {
          "@type": "HowToTool",
          name: "Calculadora de finiquito de miCalculadora.es",
        },
      ],
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Calcula tu salario diario",
          text: "Salario diario = (Salario mensual × 12 + Pagas extras × Salario mensual) / 365. Por ejemplo, con 1.800 €/mes y 2 pagas extras: (1.800 × 12 + 2 × 1.800) / 365 = 68,49 €/día.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Calcula la indemnización según el tipo de despido",
          text: "Indemnización = Salario diario × Días por año × Años trabajados. Despido improcedente: 33 días/año (tope 24 mensualidades). Despido objetivo: 20 días/año (tope 12 mensualidades). Despido disciplinario procedente o baja voluntaria: 0 €.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Calcula el salario pendiente del último mes",
          text: "Son los días trabajados en el mes en curso que aún no te han pagado. Salario pendiente = Salario mensual / 30 × Días trabajados.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Calcula las vacaciones no disfrutadas",
          text: "Cada mes trabajado generas 2,5 días de vacaciones (si tienes 30 días/año). Multiplica los días no disfrutados por tu salario diario.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Calcula la parte proporcional de las pagas extras",
          text: "Si cobras las pagas en junio y diciembre, calcula los meses transcurridos desde la última paga y multiplica por la parte proporcional mensual de cada paga extra.",
        },
        {
          "@type": "HowToStep",
          position: 6,
          name: "Suma todos los conceptos",
          text: "Finiquito total = Indemnización (si aplica) + Salario pendiente + Vacaciones no disfrutadas + Pagas extras proporcionales. Este es el importe bruto que la empresa te debe.",
        },
      ],
    },
  ],
};

export default function CalculadoraFiniquitoPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(finiquitoPageSchema);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Calculadora de Finiquito España 2026 — Calcula gratis cuánto te corresponde"
        description="Calcula tu finiquito en España gratis. Averigua cuánto te corresponde de indemnización por despido improcedente, objetivo o disciplinario. Con ejemplos reales y desglose completo."
        path="/calculadora-finiquito"
      />
      <Navbar />

      <header className="section-warm py-8 md:py-20">
        <div className="container max-w-2xl animate-fade-up">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight md:leading-[1.1] text-center">
            ¿Te han despedido? Averigua cuánto te deben
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto text-center">
            Calcula tu finiquito en menos de un minuto. Sin registro, gratis y con un desglose que puedas entender. Porque es tu dinero y tienes derecho a saber cuánto te corresponde.
          </p>
          <div className="flex justify-center mt-6">
            <a href="#calculadora" className="inline-flex items-center gap-1 text-primary font-medium hover:underline">
              Calcular ahora <ChevronDown className="h-4 w-4" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 mt-6 text-xs text-muted-foreground">
            <span>✓ Actualizado a la legislación 2026</span>
            <span>✓ Más de 50.000 cálculos realizados</span>
            <span>✓ 100% gratuito</span>
          </div>
        </div>
      </header>

      <main className="container py-12 space-y-20 max-w-3xl">
        <div className="rounded-lg border border-dashed border-border bg-muted/50 p-3 text-center text-sm text-muted-foreground">
          Espacio reservado para publicidad
        </div>

        <CalculadoraFiniquito />
        <EjemplosReales />
        <ComparadorDespidos />
        <ErroresYConsejos />

        <div className="rounded-lg border border-dashed border-border bg-muted/50 p-3 text-center text-sm text-muted-foreground">
          Espacio reservado para publicidad
        </div>

        <ContenidoSEO />
        <FAQ />
        <Afiliados />
        <EnlacesCalculadoras excluir="/calculadora-finiquito" />
      </main>

      <Footer />
    </div>
  );
}
