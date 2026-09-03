import { Hero } from "@/components/home/Hero";
import { PainPoint } from "@/components/home/PainPoint";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TravelStyles } from "@/components/home/TravelStyles";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { ServiceTiers } from "@/components/home/ServiceTiers";
import { AddOns } from "@/components/home/AddOns";
import { TravelApp } from "@/components/home/TravelApp";
import { Audience } from "@/components/home/Audience";
import { QuoteSection } from "@/components/home/QuoteSection";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <PainPoint />
      <HowItWorks />
      <TravelStyles />
      <DestinationsSection />
      <ServiceTiers />
      <AddOns />
      <TravelApp />
      <Audience />
      <QuoteSection />
    </main>
  );
}
