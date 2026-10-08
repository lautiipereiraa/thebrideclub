import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PainPoint } from "@/components/home/PainPoint";
import { ServiceTiers } from "@/components/home/ServiceTiers";
import { ExperienceTeaser } from "@/components/home/ExperienceTeaser";
import { Testimonials } from "@/components/home/Testimonials";
import { QuoteSection } from "@/components/home/QuoteSection";

// El detalle de cada destino vive en /destinos/[id] y los kits, extras, la app y
// los otros viajes en /experiencia: la home queda para presentar y convertir.
export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <PainPoint />
      <DestinationsSection />
      <HowItWorks />
      <ServiceTiers />
      <ExperienceTeaser />
      <Testimonials />
      <QuoteSection />
    </main>
  );
}
