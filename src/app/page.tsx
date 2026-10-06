import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Experiences } from "@/components/home/Experiences";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PainPoint } from "@/components/home/PainPoint";
import { ServiceTiers } from "@/components/home/ServiceTiers";
import { AddOns } from "@/components/home/AddOns";
import { WelcomeKits } from "@/components/home/WelcomeKits";
import { TravelApp } from "@/components/home/TravelApp";
import { OtherTrips } from "@/components/home/OtherTrips";
import { Testimonials } from "@/components/home/Testimonials";
import { QuoteSection } from "@/components/home/QuoteSection";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Experiences />
      <DestinationsSection />
      <HowItWorks />
      <PainPoint />
      <ServiceTiers />
      <WelcomeKits />
      <AddOns />
      <TravelApp />
      <OtherTrips />
      <Testimonials />
      <QuoteSection />
    </main>
  );
}
