export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-3xl py-12">
        <a href="/" className="text-sm text-primary hover:underline mb-8 inline-block">← Volver a la calculadora</a>
        <h1 className="text-3xl font-display font-bold text-foreground mb-6">Aviso Legal</h1>
        <p className="text-sm text-muted-foreground mb-8">Última actualización: marzo de 2026</p>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-bold font-display text-foreground mb-2">1. Datos identificativos</h2>
            <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que el presente sitio web <strong className="text-foreground">miCalculadora.es</strong> es titularidad de:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong className="text-foreground">Titular</strong>: miCalculadora.es</li>
              <li><strong className="text-foreground">Domicilio</strong>: Madrid, España</li>
              <li><strong className="text-foreground">Email de contacto</strong>: calculadoradefiniquito@gmail.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-foreground mb-2">2. Objeto del sitio web</h2>
            <p>miCalculadora.es es un sitio web de carácter <strong className="text-foreground">informativo y orientativo</strong> que pone a disposición de los usuarios calculadoras laborales y financieras y contenidos relacionados con la legislación laboral española.</p>
            <p className="mt-2">El sitio web tiene como finalidad ofrecer herramientas gratuitas de cálculo y contenido educativo sobre derechos laborales en España.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-foreground mb-2">3. Limitación de responsabilidad</h2>
            <p><strong className="text-foreground">Importante:</strong> los cálculos y la información proporcionada en este sitio web tienen carácter meramente <strong className="text-foreground">orientativo y no vinculante</strong>. En ningún caso sustituyen el asesoramiento profesional de un abogado, graduado social o asesor laboral.</p>
            <p className="mt-2">El titular de esta web no se hace responsable de:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Las decisiones tomadas por los usuarios basándose en los resultados de la calculadora.</li>
              <li>Posibles errores en los cálculos derivados de cambios legislativos no actualizados.</li>
              <li>La interpretación que el usuario haga de la información proporcionada.</li>
              <li>Los contenidos, productos o servicios de sitios web de terceros enlazados desde este sitio.</li>
            </ul>
            <p className="mt-2">Se recomienda siempre <strong className="text-foreground">consultar con un profesional cualificado</strong> para obtener asesoramiento adaptado a cada caso particular.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-foreground mb-2">4. Propiedad intelectual e industrial</h2>
            <p>Todos los contenidos de este sitio web, incluyendo textos, diseño gráfico, código fuente, logotipos y demás elementos, son propiedad del titular o cuenta con las licencias necesarias para su uso.</p>
            <p className="mt-2">Queda prohibida la reproducción total o parcial de los contenidos sin autorización expresa por escrito del titular, salvo el uso personal y privado del usuario.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-foreground mb-2">5. Enlaces a terceros</h2>
            <p>Este sitio web puede contener enlaces a páginas de terceros. El titular no se responsabiliza del contenido, políticas de privacidad ni prácticas de dichos sitios web. Te recomendamos revisar las condiciones de uso de cualquier sitio al que accedas desde nuestros enlaces.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-foreground mb-2">6. Legislación aplicable y jurisdicción</h2>
            <p>El presente aviso legal se rige por la legislación española. Para la resolución de cualquier controversia que pudiera surgir, las partes se someten a los Juzgados y Tribunales del domicilio del titular, salvo que la normativa aplicable establezca otro fuero.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-foreground mb-2">7. Modificaciones</h2>
            <p>El titular se reserva el derecho de modificar el presente aviso legal en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en el sitio web. Se recomienda al usuario revisar periódicamente este documento.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
