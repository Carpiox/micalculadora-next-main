// src/components/calculator-page-shell.tsx
// ✅ Server Component — solo estructura HTML, sin interactividad
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface Props {
  titulo: string;
  descripcion: string;
  children: React.ReactNode;
}

export function CalculatorPageShell({ titulo, descripcion, children }: Props) {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header de página */}
      <div className="bg-white border-b border-border">
        <div className="container max-w-3xl py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Volver a calculadoras
          </Link>
          <h1 className="text-3xl font-bold text-foreground">{titulo}</h1>
          <p className="text-muted-foreground mt-1">{descripcion}</p>
        </div>
      </div>

      {/* Contenido (calculadora) */}
      <div className="container max-w-3xl py-8">{children}</div>

      {/* Footer */}
      <footer className="border-t border-border bg-white mt-12">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MiCalculadora.es · Resultados
          orientativos, no constituyen asesoramiento legal.
        </div>
      </footer>
    </main>
  );
}