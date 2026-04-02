import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";

const CalculadoraFiniquitoPage = lazy(() => import("./pages/CalculadoraFiniquitoPage"));
const CalculadoraParoPage = lazy(() => import("./pages/CalculadoraParoPage"));
const CalculadoraIRPFPage = lazy(() => import("./pages/CalculadoraIRPFPage"));
const CalculadoraNominaPage = lazy(() => import("./pages/CalculadoraNominaPage"));
const CalculadoraIndemnizacionPage = lazy(() => import("./pages/CalculadoraIndemnizacionPage"));
const PoliticaPrivacidad = lazy(() => import("./pages/PoliticaPrivacidad"));
const AvisoLegal = lazy(() => import("./pages/AvisoLegal"));
const Cookies = lazy(() => import("./pages/Cookies"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
    </div>
  );
}

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;