import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.jsx";

const CalculadoraFiniquitoPage = lazy(() => import("./pages/CalculadoraFiniquitoPage.jsx"));
const CalculadoraParoPage = lazy(() => import("./pages/CalculadoraParoPage.jsx"));
const CalculadoraIRPFPage = lazy(() => import("./pages/CalculadoraIRPFPage.jsx"));
const CalculadoraNominaPage = lazy(() => import("./pages/CalculadoraNominaPage.jsx"));
const CalculadoraIndemnizacionPage = lazy(() => import("./pages/CalculadoraIndemnizacionPage.jsx"));
const PoliticaPrivacidad = lazy(() => import("./pages/PoliticaPrivacidad.jsx"));
const AvisoLegal = lazy(() => import("./pages/AvisoLegal.jsx"));
const Cookies = lazy(() => import("./pages/Cookies.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

const queryClient = new QueryClient();

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
    </div>
  );
}

const App = () => (
  
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
      </TooltipProvider>
    </QueryClientProvider>
  
);

export default App;