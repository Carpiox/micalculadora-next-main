import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import CalculadoraParo from "@/components/CalculadoraParo";
import EnlacesCalculadoras from "@/components/EnlacesCalculadoras";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { pregunta: "¿Cuánto tiempo tengo que haber trabajado para cobrar el paro?", respuesta: "Necesitas haber cotizado al menos 360 días (1 año) en los últimos 6 años. Si no llegas, podrías optar al subsidio por desempleo (RAI o subsidio extraordinario), que tiene requisitos diferentes." },
  { pregunta: "¿Cuánto se cobra de paro?", respuesta: "Los primeros 6 meses cobras el 70% de tu base reguladora, y a partir del séptimo mes, el 50%. Hay topes máximos y mínimos que dependen de si tienes hijos a cargo. Con el IPREM de 2026, el máximo sin hijos es de 1.092 €/mes aproximadamente." },
  { pregunta: "¿Puedo cobrar el paro si me voy voluntariamente?", respuesta: "En principio no. La baja voluntaria no da derecho a prestación por desempleo. Sin embargo, hay excepciones: si te vas por un traslado, por modificación sustancial de condiciones de trabajo, o por incumplimiento grave del empresario, sí podrías tener derecho." },
  { pregunta: "¿El paro se cobra neto o bruto?", respuesta: "La prestación por desempleo tributa como rendimiento del trabajo en el IRPF. El SEPE aplica una retención (normalmente baja, entre el 2% y el 10%), así que la cantidad neta es ligeramente inferior a la bruta." },
  { pregunta: "¿Puedo trabajar mientras cobro el paro?", respuesta: "Si trabajas por cuenta ajena a tiempo completo, se suspende la prestación. A tiempo parcial, se puede compatibilizar (cobras paro reducido + salario). Si te das de alta como autónomo, puedes capitalizar el paro o compatibilizarlo bajo ciertas condiciones." },
  { pregunta: "¿Qué pasa si me quedo sin paro y sigo desempleado?", respuesta: "Puedes solicitar el subsidio por desempleo (430 €/mes aprox.), la Renta Activa de Inserción (RAI) o, en última instancia, el Ingreso Mínimo Vital (IMV). Cada uno tiene requisitos diferentes." },
  { pregunta: "¿Cuándo puedo solicitar el paro?", respuesta: "Tienes 15 días hábiles desde el cese para solicitar la prestación. Si te pasas de plazo, no pierdes el derecho pero sí los días de retraso. No esperes al último momento." },
  { pregunta: "¿El paro cuenta para la jubilación?", respuesta: "Sí. Mientras cobras la prestación contributiva, el SEPE cotiza por ti a la Seguridad Social, así que ese tiempo cuenta para tu jubilación. En el subsidio, la cotización es menor." },
];

const paroPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://micalculadora.es/calculadora-paro#webapp",
      name: "Calculadora de Paro España 2026",
      url: "https://micalculadora.es/calculadora-paro",
      description: "Calcula gratis cuánto cobrarás de prestación por desempleo en España según tu base de cotización, días trabajados e hijos a cargo. Actualizada a 2026.",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      provider: { "@type": "Organization", "@id": "https://micalculadora.es/#organization", name: "miCalculadora.es" },
      inLanguage: "es",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://micalculadora.es/calculadora-paro#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://micalculadora.es" },
        { "@type": "ListItem", position: 2, name: "Calculadora de Paro", item: "https://micalculadora.es/calculadora-paro" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://micalculadora.es/calculadora-paro#faq",
      mainEntity: faqs.map((f) => ({
        "@type": "Question", name: f.pregunta,
        acceptedAnswer: { "@type": "Answer", text: f.respuesta },
      })),
    },
    {
      "@type": "HowTo",
      "@id": "https://micalculadora.es/calculadora-paro#howto",
      name: "Cómo calcular la prestación por desempleo en España",
      description: "Guía paso a paso para calcular cuánto cobrarás de paro según tu base de cotización, tiempo cotizado e hijos a cargo.",
      totalTime: "PT2M",
      step: [
        { "@type": "HowToStep", position: 1, name: "Calcula tu base reguladora", text: "Se toma la media de tus bases de cotización de los últimos 180 días (6 meses). Si tu base era de 1.800 €/mes, tu base reguladora diaria será 1.800 / 30 = 60 €." },
        { "@type": "HowToStep", position: 2, name: "Aplica los porcentajes", text: "Los primeros 6 meses cobras el 70% de tu base reguladora. A partir del séptimo mes, baja al 50%." },
        { "@type": "HowToStep", position: 3, name: "Comprueba los topes", text: "Tu prestación no puede superar ni quedarse por debajo de ciertos límites basados en el IPREM. Sin hijos, el máximo es el 175% del IPREM. Con hijos, sube al 200% o 225%." },
        { "@type": "HowToStep", position: 4, name: "Calcula la duración", text: "La duración depende de los días cotizados en los últimos 6 años. Mínimo 4 meses (360-539 días) y máximo 24 meses (2.160+ días). Por cada 180 días cotizados adicionales, sumas 2 meses." },
      ],
    },
  ],
};

export default function CalculadoraParoPage() {
  const { ref: refSeo, visible: visSeo } = useScrollReveal();
  const { ref: refFaq, visible: visFaq } = useScrollReveal();

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(paroPageSchema);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Calculadora de Paro España 2026 — Cuánto cobrarás de prestación por desempleo"
        description="Calcula gratis cuánto cobrarás de paro en España. Prestación por desempleo según tu base de cotización, días trabajados e hijos a cargo. Actualizada a 2026."
        path="/calculadora-paro"
      />
      <Navbar />

      <header className="section-warm py-8 md:py-20">
        <div className="container max-w-2xl animate-fade-up">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight md:leading-[1.1] text-center">
            ¿Cuánto cobrarás de paro? Calcúlalo ahora
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto text-center">
            Averigua la cuantía y duración de tu prestación por desempleo en menos de un minuto. Basado en la legislación española de 2026.
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

        <CalculadoraParo />

        {/* SEO Content */}
        <section ref={refSeo}>
          <div className={`transition-all duration-700 ${visSeo ? "animate-fade-up" : "opacity-0"}`}>
            <article>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4">
                Cómo funciona la prestación por desempleo en España
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La prestación por desempleo (lo que todo el mundo llama "el paro") es un derecho de los trabajadores que han cotizado lo suficiente. No es un regalo del Estado: es un seguro que has pagado con tus cotizaciones a lo largo de tu vida laboral.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                La cantidad que cobras depende de tres factores principales: <strong className="text-foreground">tu base de cotización</strong> (cuánto has cotizado a la Seguridad Social), <strong className="text-foreground">el tiempo que has cotizado</strong> en los últimos 6 años, y <strong className="text-foreground">si tienes hijos a cargo</strong>.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mt-10 mb-4">
                Cómo calcular el paro paso a paso
              </h2>

              <div className="space-y-6 mb-8">
                <div className="pl-4 border-l-2 border-primary/30">
                  <h3 className="font-bold text-foreground mb-1">1. Calcula tu base reguladora</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Se toma la media de tus bases de cotización de los últimos 180 días (6 meses). Si tu base de cotización era de 1.800 €/mes, tu base reguladora diaria será 1.800 / 30 = 60 €.
                  </p>
                </div>
                <div className="pl-4 border-l-2 border-primary/30">
                  <h3 className="font-bold text-foreground mb-1">2. Aplica los porcentajes</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Los primeros 6 meses cobras el <strong className="text-foreground">70%</strong> de tu base reguladora. A partir del séptimo mes, baja al <strong className="text-foreground">50%</strong>. En nuestro ejemplo: 1.800 × 70% = 1.260 € los primeros 6 meses, y 1.800 × 50% = 900 € a partir del séptimo.
                  </p>
                </div>
                <div className="pl-4 border-l-2 border-primary/30">
                  <h3 className="font-bold text-foreground mb-1">3. Comprueba los topes</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tu prestación no puede ser superior ni inferior a ciertos límites basados en el IPREM. Sin hijos, el máximo es el 175% del IPREM (~1.050 €). Con 1 hijo, el 200% (~1.200 €). Con 2 o más, el 225% (~1.350 €). El mínimo sin hijos es el 80% del IPREM (~480 €).
                  </p>
                </div>
                <div className="pl-4 border-l-2 border-primary/30">
                  <h3 className="font-bold text-foreground mb-1">4. Calcula la duración</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    La duración depende de los días cotizados en los últimos 6 años. El mínimo es 4 meses (con 360-539 días cotizados) y el máximo es 24 meses (con 2.160+ días). Por cada 180 días cotizados adicionales, sumas 2 meses de prestación.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mt-10 mb-4">
                Ejemplo práctico
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">María</strong>, 38 años, lleva 5 años como administrativa en Málaga con una base de cotización de 1.600 €/mes. Le despiden y no tiene hijos.
              </p>
              <div className="bg-card border border-border rounded-lg p-5 mb-6 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Días cotizados (5 años)</span><span className="font-medium">1.800 días</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Duración de la prestación</span><span className="font-medium">20 meses</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Cuantía meses 1-6 (70%)</span><span className="font-bold text-primary">1.050 € (tope)</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Cuantía meses 7-20 (50%)</span><span className="font-bold text-primary">800 €</span></div>
                <hr className="border-border" />
                <div className="flex justify-between"><span className="font-bold">Total estimado</span><span className="font-bold text-primary">17.500 €</span></div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mt-10 mb-4">
                Factores que influyen en tu prestación
              </h2>
              <ul className="space-y-3 text-muted-foreground mb-8">
                {[
                  ["Base de cotización", "No confundir con el salario bruto. A veces la base es diferente (tiene topes máximos y mínimos). Mira tu nómina."],
                  ["Tiempo cotizado", "Solo cuentan los últimos 6 años. Si hace 7 años trabajaste 3 años, solo contarán los que caigan dentro de esa ventana."],
                  ["Hijos a cargo", "Tener hijos a cargo sube los topes máximos y mínimos de la prestación. Hijos menores de 26 (o mayores con discapacidad) que convivan contigo."],
                  ["Tipo de cese", "La baja voluntaria no da derecho a paro (salvo excepciones). Los despidos (improcedente, objetivo, ERE) sí."],
                ].map(([titulo, desc]) => (
                  <li key={titulo} className="flex gap-3 items-start">
                    <span className="font-bold text-primary shrink-0 w-36">{titulo}</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mt-10 mb-4">
                Errores comunes al solicitar el paro
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  { titulo: "Pasarse del plazo de 15 días hábiles", desc: "Si no solicitas la prestación en los 15 días hábiles siguientes al cese, pierdes los días de retraso. No pierdes el derecho, pero sí dinero." },
                  { titulo: "No inscribirse como demandante de empleo", desc: "Antes de solicitar el paro, tienes que inscribirte en tu oficina de empleo. Sin este paso, no te admiten la solicitud." },
                  { titulo: "Confundir la base de cotización con el salario neto", desc: "Tu base de cotización es el importe sobre el que se calculan tus cuotas a la SS. Normalmente es similar al bruto, pero puede diferir." },
                  { titulo: "No tener en cuenta los topes", desc: "Aunque hayas cotizado mucho, la prestación tiene un máximo. Si tu base es alta, puedes pensar que cobrarás más de lo que realmente te corresponde." },
                  { titulo: "No saber que puedes compatibilizar paro y trabajo", desc: "Si te ofrecen un trabajo a tiempo parcial, puedes compatibilizarlo con parte de la prestación. No rechaces ofertas pensando que pierdes todo el paro." },
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

              <p className="text-sm text-muted-foreground mt-6">
                ¿Necesitas calcular también tu finiquito? Usa nuestra <Link to="/calculadora-finiquito" className="text-primary hover:underline">calculadora de finiquito</Link> para saber cuánto te deben además del paro.
              </p>
            </article>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20" ref={refFaq}>
          <div className={`transition-all duration-700 ${visFaq ? "animate-fade-up" : "opacity-0"}`}>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-2">
              Preguntas frecuentes sobre la prestación por desempleo
            </h2>
            <p className="text-muted-foreground mb-8">Las dudas más habituales resueltas en cristiano.</p>
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

        <EnlacesCalculadoras excluir="/calculadora-paro" />
      </main>

      <Footer />
    </div>
  );
}
