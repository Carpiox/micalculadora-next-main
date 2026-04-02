import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import CalculadoraNomina from "@/components/CalculadoraNomina";
import EnlacesCalculadoras from "@/components/EnlacesCalculadoras";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { pregunta: "¿Qué diferencia hay entre salario bruto y neto?", respuesta: "El bruto es lo que tu empresa paga por ti. El neto es lo que recibes en tu cuenta. La diferencia son las cotizaciones a la Seguridad Social (~6,35%) y la retención de IRPF (variable según tu salario y situación personal)." },
  { pregunta: "¿Por qué mi compañero cobra distinto neto con el mismo bruto?", respuesta: "Porque la retención de IRPF depende de la situación personal: estado civil, hijos a cargo, discapacidad, tipo de contrato, etc. Dos personas con el mismo bruto pueden tener retenciones muy diferentes." },
  { pregunta: "¿Qué es el MEI que aparece en mi nómina?", respuesta: "El Mecanismo de Equidad Intergeneracional es una cotización adicional del 0,8% (en 2026) que se descuenta de tu nómina para garantizar la sostenibilidad de las pensiones. Se sumó a las cotizaciones habituales desde 2023." },
  { pregunta: "¿Cómo afectan las pagas extras a mi nómina?", respuesta: "Con 14 pagas, tu mensual bruto es menor (bruto anual / 14), pero en junio y diciembre cobras una paga extra. Con 12 pagas (prorrateadas), cobras más cada mes pero sin pagas extra. El neto anual es el mismo." },
  { pregunta: "¿Puedo pedir que me retengan más IRPF?", respuesta: "Sí. Puedes pedir a tu empresa que te aplique un tipo de retención más alto presentando el modelo 145. Así evitas tener que pagar en la declaración de la renta. No puedes pedir que te retengan menos del mínimo legal." },
  { pregunta: "¿Las horas extra tributan igual?", respuesta: "Las horas extra tributan como rendimiento del trabajo (IRPF normal), pero cotizan de forma diferente a la Seguridad Social. Las horas extra de fuerza mayor cotizan al 2% y las ordinarias al tipo general." },
];

const nominaPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://micalculadora.es/calculadora-nomina#webapp",
      name: "Calculadora de Nómina Neta 2026 España",
      url: "https://micalculadora.es/calculadora-nomina",
      description: "Convierte tu salario bruto a neto gratis. Calculadora de nómina actualizada a 2026 con desglose de cotizaciones SS, IRPF y todas las deducciones.",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      provider: { "@type": "Organization", "@id": "https://micalculadora.es/#organization", name: "miCalculadora.es" },
      inLanguage: "es",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://micalculadora.es/calculadora-nomina#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://micalculadora.es" },
        { "@type": "ListItem", position: 2, name: "Calculadora de Nómina Neta", item: "https://micalculadora.es/calculadora-nomina" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://micalculadora.es/calculadora-nomina#faq",
      mainEntity: faqs.map((f) => ({
        "@type": "Question", name: f.pregunta,
        acceptedAnswer: { "@type": "Answer", text: f.respuesta },
      })),
    },
    {
      "@type": "HowTo",
      "@id": "https://micalculadora.es/calculadora-nomina#howto",
      name: "Cómo calcular tu nómina neta en España",
      description: "Guía paso a paso para convertir tu salario bruto a neto con el desglose de todas las deducciones.",
      totalTime: "PT2M",
      step: [
        { "@type": "HowToStep", position: 1, name: "Parte de tu salario bruto", text: "Es la cifra que aparece en tu contrato. Si cobras 14 pagas de 2.000 €, tu bruto anual es 28.000 €." },
        { "@type": "HowToStep", position: 2, name: "Resta las cotizaciones a la Seguridad Social", text: "Contingencias comunes (4,70%), desempleo (1,55%), formación profesional (0,10%) y MEI (0,80%). Total: aproximadamente el 7,15% de tu base de cotización." },
        { "@type": "HowToStep", position: 3, name: "Resta la retención de IRPF", text: "Tu empresa calcula el tipo de retención en función de tu salario anual, situación familiar e hijos." },
        { "@type": "HowToStep", position: 4, name: "El resultado es tu neto", text: "Bruto - Cotizaciones SS - IRPF = Neto. Eso es lo que llega a tu cuenta bancaria cada mes." },
      ],
    },
  ],
};

export default function CalculadoraNominaPage() {
  const { ref: refSeo, visible: visSeo } = useScrollReveal();
  const { ref: refFaq, visible: visFaq } = useScrollReveal();

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(nominaPageSchema);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Calculadora de Nómina Neta 2026 — De bruto a neto en un clic"
        description="Convierte tu salario bruto a neto gratis. Calculadora de nómina actualizada a 2026 con desglose de cotizaciones SS, IRPF y todas las deducciones."
        path="/calculadora-nomina"
      />
      <Navbar />

      <header className="section-warm py-8 md:py-20">
        <div className="container max-w-2xl animate-fade-up">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight md:leading-[1.1] text-center">
            ¿Cuánto cobrarás realmente? De bruto a neto
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto text-center">
            Introduce tu salario bruto y descubre cuánto te llegará a la cuenta cada mes. Con el desglose completo de todas las deducciones.
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

        <CalculadoraNomina />

        <section ref={refSeo}>
          <div className={`transition-all duration-700 ${visSeo ? "animate-fade-up" : "opacity-0"}`}>
            <article>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4">
                Cómo funciona tu nómina en España
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tu nómina es el documento que detalla cuánto ganas y cuánto te descuentan cada mes. Entenderla es fundamental para saber si te pagan correctamente y para negociar tu salario con conocimiento de causa.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                De tu salario bruto mensual se restan dos grandes bloques: las <strong className="text-foreground">cotizaciones a la Seguridad Social</strong> (fijas, alrededor del 6,35%) y la <strong className="text-foreground">retención de IRPF</strong> (variable, depende de tu salario y circunstancias personales). Lo que queda es tu salario neto.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mt-10 mb-4">
                Cómo calcular tu nómina neta paso a paso
              </h2>
              <div className="space-y-6 mb-8">
                <div className="pl-4 border-l-2 border-primary/30">
                  <h3 className="font-bold text-foreground mb-1">1. Parte de tu salario bruto</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Es la cifra que aparece en tu contrato o en la parte superior de tu nómina. Si cobras 14 pagas de 2.000 €, tu bruto anual es 28.000 €. Si cobras 12 pagas de 2.333 €, también son 28.000 € anuales.
                  </p>
                </div>
                <div className="pl-4 border-l-2 border-primary/30">
                  <h3 className="font-bold text-foreground mb-1">2. Resta las cotizaciones a la Seguridad Social</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Contingencias comunes:</strong> 4,70%. <strong className="text-foreground">Desempleo:</strong> 1,55%. <strong className="text-foreground">Formación profesional:</strong> 0,10%. <strong className="text-foreground">MEI:</strong> 0,80% (2026). Total: aproximadamente el 7,15% de tu base de cotización.
                  </p>
                </div>
                <div className="pl-4 border-l-2 border-primary/30">
                  <h3 className="font-bold text-foreground mb-1">3. Resta la retención de IRPF</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tu empresa calcula el tipo de retención en función de tu salario anual, situación familiar e hijos. Un trabajador soltero sin hijos con 25.000 € brutos tendrá una retención de aproximadamente el 14-15%.
                  </p>
                </div>
                <div className="pl-4 border-l-2 border-primary/30">
                  <h3 className="font-bold text-foreground mb-1">4. El resultado es tu neto</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Bruto - Cotizaciones SS - IRPF = Neto. Eso es lo que llega a tu cuenta bancaria cada mes.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mt-10 mb-4">
                Ejemplo práctico: salario bruto de 25.000 €
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Elena</strong>, 30 años, soltera, sin hijos, con 14 pagas.
              </p>
              <div className="bg-card border border-border rounded-lg p-5 mb-6 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Salario bruto mensual (14 pagas)</span><span className="font-medium">1.785,71 €</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Contingencias comunes (4,7%)</span><span className="text-destructive">-97,83 €</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Desempleo (1,55%)</span><span className="text-destructive">-32,29 €</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Formación + MEI (0,8%)</span><span className="text-destructive">-16,67 €</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">IRPF (~14%)</span><span className="text-destructive">-250,00 €</span></div>
                <hr className="border-border" />
                <div className="flex justify-between"><span className="font-bold">Neto mensual</span><span className="font-bold text-primary">~1.388 €</span></div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mt-10 mb-4">
                Factores que influyen en tu nómina neta
              </h2>
              <ul className="space-y-3 text-muted-foreground mb-8">
                {[
                  ["Número de pagas", "Con 12 pagas cobras más cada mes pero sin extras. Con 14, menos mensual pero con paga en junio y diciembre. El neto anual es idéntico."],
                  ["Situación familiar", "Estar casado/a con cónyuge sin ingresos o tener hijos reduce tu retención de IRPF, así que cobras más neto cada mes."],
                  ["Tipo de contrato", "Los contratos temporales tienen una retención mínima del 2% si son inferiores a un año. Los indefinidos se calculan según la tabla general."],
                  ["Comunidad autónoma", "Los tipos de IRPF autonómicos varían ligeramente entre comunidades. Madrid suele tener tipos más bajos; Cataluña y Valencia, más altos."],
                ].map(([titulo, desc]) => (
                  <li key={titulo} className="flex gap-3 items-start">
                    <span className="font-bold text-primary shrink-0 w-36">{titulo}</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mt-10 mb-4">
                Errores comunes al interpretar tu nómina
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  { titulo: "Confundir bruto con neto en una oferta de trabajo", desc: "El 99% de las ofertas de empleo hablan de salario bruto. Si te ofrecen 30.000 € y piensas que son netos, te llevarás un disgusto importante." },
                  { titulo: "No revisar la base de cotización", desc: "Algunas empresas cotizan por debajo de tu salario real usando complementos 'no cotizables'. Esto te perjudica en prestaciones futuras (paro, jubilación)." },
                  { titulo: "Ignorar los complementos salariales", desc: "Pluses de transporte, comida, antigüedad... todos cuentan para tu bruto. Comprueba que están bien reflejados en tu nómina." },
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
                ¿Quieres saber cuánto IRPF pagas exactamente? Usa nuestra <Link to="/calculadora-irpf" className="text-primary hover:underline">calculadora de IRPF</Link> para un desglose por tramos.
              </p>
            </article>
          </div>
        </section>

        <section id="faq" className="scroll-mt-20" ref={refFaq}>
          <div className={`transition-all duration-700 ${visFaq ? "animate-fade-up" : "opacity-0"}`}>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-2">Preguntas frecuentes sobre la nómina</h2>
            <p className="text-muted-foreground mb-8">Las dudas más comunes sobre tu nómina, resueltas sin jerga.</p>
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

        <EnlacesCalculadoras excluir="/calculadora-nomina" />
      </main>

      <Footer />
    </div>
  );
}
