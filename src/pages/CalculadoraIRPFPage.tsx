import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import CalculadoraIRPF from "@/components/CalculadoraIRPF";
import EnlacesCalculadoras from "@/components/EnlacesCalculadoras";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

const faqs = [
  { pregunta: "¿Qué es el IRPF y cómo me afecta?", respuesta: "El IRPF (Impuesto sobre la Renta de las Personas Físicas) es el impuesto que pagas por tus ingresos. Se aplica de forma progresiva: cuanto más ganas, mayor es el porcentaje que pagas. Se retiene directamente de tu nómina cada mes." },
  { pregunta: "¿Qué diferencia hay entre tipo marginal y tipo efectivo?", respuesta: "El tipo marginal es el porcentaje que pagas por el último euro que ganas (determina en qué tramo estás). El tipo efectivo es el porcentaje real que pagas sobre el total de tus ingresos. El efectivo siempre es menor que el marginal." },
  { pregunta: "¿Cuáles son los tramos de IRPF en 2026?", respuesta: "Los tramos estatal + autonómico combinados son: hasta 12.450€ (19%), de 12.450€ a 20.200€ (24%), de 20.200€ a 35.200€ (30%), de 35.200€ a 60.000€ (37%), de 60.000€ a 300.000€ (45%), y más de 300.000€ (47%)." },
  { pregunta: "¿Puedo reducir mi IRPF legalmente?", respuesta: "Sí. Planes de pensiones (hasta 1.500€/año), aportaciones a sindicatos, cuotas de colegios profesionales obligatorios, deducción por vivienda habitual (si la compraste antes de 2013), donativos a ONG, y el mínimo por descendientes o ascendientes." },
  { pregunta: "¿Qué pasa si me retienen más de lo que debo?", respuesta: "Hacienda te devuelve la diferencia cuando hagas la declaración de la renta. Si te retienen de menos, tendrás que pagar. Por eso es importante que tu empresa aplique el tipo correcto." },
  { pregunta: "¿Están incluidas las cotizaciones a la Seguridad Social?", respuesta: "Sí. Nuestra calculadora resta automáticamente las cotizaciones a la Seguridad Social (aprox. 6,35% de tu bruto) antes de calcular la base imponible, tal como se hace en la realidad." },
];

const irpfPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://micalculadora.es/calculadora-irpf#webapp",
      name: "Calculadora de IRPF 2026 España",
      url: "https://micalculadora.es/calculadora-irpf",
      description: "Calcula tu IRPF gratis. Descubre tu tipo efectivo, retención mensual y desglose por tramos fiscales 2026. Herramienta actualizada para España.",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      provider: { "@type": "Organization", "@id": "https://micalculadora.es/#organization", name: "miCalculadora.es" },
      inLanguage: "es",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://micalculadora.es/calculadora-irpf#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://micalculadora.es" },
        { "@type": "ListItem", position: 2, name: "Calculadora de IRPF", item: "https://micalculadora.es/calculadora-irpf" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://micalculadora.es/calculadora-irpf#faq",
      mainEntity: faqs.map((f) => ({
        "@type": "Question", name: f.pregunta,
        acceptedAnswer: { "@type": "Answer", text: f.respuesta },
      })),
    },
    {
      "@type": "HowTo",
      "@id": "https://micalculadora.es/calculadora-irpf#howto",
      name: "Cómo calcular tu IRPF en España",
      description: "Guía paso a paso para calcular tu retención de IRPF, tipo efectivo y desglose por tramos fiscales.",
      totalTime: "PT2M",
      step: [
        { "@type": "HowToStep", position: 1, name: "Determina tu base imponible", text: "A tu salario bruto anual le restas las cotizaciones a la Seguridad Social (~6,35%) y los gastos deducibles del trabajador (2.000 €). Esa es tu base imponible." },
        { "@type": "HowToStep", position: 2, name: "Aplica los tramos fiscales", text: "Divide tu base imponible en los tramos del IRPF y aplica el porcentaje correspondiente a cada tramo. La suma de todas las cuotas parciales es tu cuota íntegra." },
        { "@type": "HowToStep", position: 3, name: "Resta el mínimo personal y familiar", text: "El mínimo personal (5.550 €) y las reducciones por hijos (2.400 € el primero, 2.700 € el segundo...) se restan de tu cuota." },
        { "@type": "HowToStep", position: 4, name: "Calcula tu retención mensual", text: "Divide la cuota anual entre 12 (o 14 si cobras pagas extras). Eso es lo que tu empresa te retiene cada mes de tu nómina." },
      ],
    },
  ],
};

export default function CalculadoraIRPFPage() {
  const { ref: refSeo, visible: visSeo } = useScrollReveal();
  const { ref: refFaq, visible: visFaq } = useScrollReveal();

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(irpfPageSchema);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Calculadora de IRPF 2026 España — Calcula tu retención y tipo efectivo"
        description="Calcula tu IRPF gratis. Descubre tu tipo efectivo, retención mensual y desglose por tramos fiscales 2026. Herramienta actualizada para España."
        path="/calculadora-irpf"
      />
      <Navbar />

      <header className="section-warm py-8 md:py-20">
        <div className="container max-w-2xl animate-fade-up">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight md:leading-[1.1] text-center">
            ¿Cuánto IRPF pagas realmente? Descúbrelo
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto text-center">
            Calcula tu retención de IRPF, tipo efectivo y desglose por tramos fiscales. Actualizado a los tramos de 2026.
          </p>
          <div className="flex justify-center mt-6">
            <a href="#calculadora" className="inline-flex items-center gap-1 text-primary font-medium hover:underline">
              Calcular ahora <ChevronDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <main className="container py-12 space-y-20 max-w-3xl">
        <div className="rounded-lg border border-dashed border-border bg-muted/50 p-3 text-center text-sm text-muted-foreground">Espacio reservado para publicidad</div>

        <CalculadoraIRPF />

        <section ref={refSeo}>
          <div className={`transition-all duration-700 ${visSeo ? "animate-fade-up" : "opacity-0"}`}>
            <article>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4">
                Cómo funciona el IRPF en España
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                El IRPF es un impuesto <strong className="text-foreground">progresivo</strong>: no pagas el mismo porcentaje por todo tu salario. Tu renta se divide en tramos, y cada tramo se grava a un tipo diferente. Los primeros 12.450 € tributan al 19%, los siguientes hasta 20.200 € al 24%, y así sucesivamente.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Esto significa que si ganas 30.000 €, NO pagas un 30% de todo. Solo la parte entre 20.200 € y 30.000 € se grava al 30%. Por eso tu <strong className="text-foreground">tipo efectivo</strong> (lo que pagas realmente sobre el total) siempre es menor que tu tipo marginal (el tramo más alto al que llegas).
              </p>

              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mt-10 mb-4">
                Cómo calcular tu IRPF paso a paso
              </h2>
              <div className="space-y-6 mb-8">
                <div className="pl-4 border-l-2 border-primary/30">
                  <h3 className="font-bold text-foreground mb-1">1. Determina tu base imponible</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A tu salario bruto anual le restas las cotizaciones a la Seguridad Social (~6,35%) y los gastos deducibles del trabajador (2.000 €). Esa es tu base imponible.
                  </p>
                </div>
                <div className="pl-4 border-l-2 border-primary/30">
                  <h3 className="font-bold text-foreground mb-1">2. Aplica los tramos fiscales</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Divide tu base imponible en los tramos del IRPF y aplica el porcentaje correspondiente a cada tramo. La suma de todas las cuotas parciales es tu cuota íntegra.
                  </p>
                </div>
                <div className="pl-4 border-l-2 border-primary/30">
                  <h3 className="font-bold text-foreground mb-1">3. Resta el mínimo personal y familiar</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    El mínimo personal (5.550 €) y las reducciones por hijos (2.400 € el primero, 2.700 € el segundo...) se restan de tu cuota. Esto reduce tu factura fiscal final.
                  </p>
                </div>
                <div className="pl-4 border-l-2 border-primary/30">
                  <h3 className="font-bold text-foreground mb-1">4. Calcula tu retención mensual</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Divide la cuota anual entre 12 (o 14 si cobras pagas extras). Eso es lo que tu empresa te retiene cada mes de tu nómina.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mt-10 mb-4">
                Ejemplo práctico: salario de 28.000 €
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Pedro</strong>, soltero y sin hijos, gana 28.000 € brutos al año trabajando en Barcelona.
              </p>
              <div className="bg-card border border-border rounded-lg p-5 mb-6 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Salario bruto anual</span><span className="font-medium">28.000 €</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Cotizaciones SS (~6,35%)</span><span className="font-medium">-1.778 €</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Gastos deducibles</span><span className="font-medium">-2.000 €</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Base imponible</span><span className="font-bold">24.222 €</span></div>
                <hr className="border-border" />
                <div className="flex justify-between"><span className="text-muted-foreground">Retención anual IRPF</span><span className="font-bold text-primary">~3.600 €</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Tipo efectivo</span><span className="font-bold text-primary">~12,8%</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Retención mensual (14 pagas)</span><span className="font-bold text-primary">~257 €</span></div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mt-10 mb-4">
                Tramos de IRPF 2026 en España
              </h2>
              <div className="overflow-x-auto rounded-lg border border-border mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 font-semibold">Desde</th>
                      <th className="text-left p-3 font-semibold">Hasta</th>
                      <th className="text-center p-3 font-semibold">Tipo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["0 €", "12.450 €", "19%"],
                      ["12.450 €", "20.200 €", "24%"],
                      ["20.200 €", "35.200 €", "30%"],
                      ["35.200 €", "60.000 €", "37%"],
                      ["60.000 €", "300.000 €", "45%"],
                      ["300.000 €", "En adelante", "47%"],
                    ].map(([desde, hasta, tipo]) => (
                      <tr key={desde} className="border-t border-border">
                        <td className="p-3 text-muted-foreground">{desde}</td>
                        <td className="p-3 text-muted-foreground">{hasta}</td>
                        <td className="p-3 text-center font-bold text-primary">{tipo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mt-10 mb-4">
                Errores comunes con el IRPF
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  { titulo: "Creer que 'subes de tramo' y pierdes dinero", desc: "Falso. Solo la parte que supera el límite del tramo se grava al tipo superior. Ganar más SIEMPRE significa cobrar más neto." },
                  { titulo: "No revisar el tipo de retención", desc: "Tu empresa calcula tu retención al principio del año. Si cambian tus circunstancias (hijos, hipoteca), puedes pedir que la ajusten con el modelo 145." },
                  { titulo: "Ignorar las deducciones autonómicas", desc: "Cada comunidad autónoma tiene sus propias deducciones. Investiga las de tu zona: por alquiler, nacimiento de hijos, inversión en empresa nueva, etc." },
                  { titulo: "No declarar ingresos extra", desc: "Trabajos freelance, ventas online, rendimientos de cuentas... Todo tributa. Si Hacienda lo detecta y no lo has declarado, hay recargo." },
                ].map((e, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-lg border border-border bg-card">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-bold text-sm shrink-0">{i + 1}</span>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{e.titulo}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground">
                ¿Quieres saber cuánto te queda limpio cada mes? Prueba nuestra <Link href="/calculadora-nomina" className="text-primary hover:underline">calculadora de nómina neta</Link>.
              </p>
            </article>
          </div>
        </section>

        <section id="faq" className="scroll-mt-20" ref={refFaq}>
          <div className={`transition-all duration-700 ${visFaq ? "animate-fade-up" : "opacity-0"}`}>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-2">Preguntas frecuentes sobre el IRPF</h2>
            <p className="text-muted-foreground mb-8">Lo que más nos preguntan sobre impuestos, explicado sin rodeos.</p>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-4 data-[state=open]:bg-card data-[state=open]:shadow-sm transition-all">
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">{faq.pregunta}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">{faq.respuesta}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <div className="rounded-lg border border-dashed border-border bg-muted/50 p-3 text-center text-sm text-muted-foreground">Espacio reservado para publicidad</div>

        <EnlacesCalculadoras excluir="/calculadora-irpf" />
      </main>

      <Footer />
    </div>
  );
}
