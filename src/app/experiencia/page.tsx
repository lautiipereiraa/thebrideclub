import type { Metadata } from "next";
import { WelcomeKits } from "@/components/home/WelcomeKits";
import { AddOns } from "@/components/home/AddOns";
import { TravelApp } from "@/components/home/TravelApp";
import { OtherTrips } from "@/components/home/OtherTrips";
import { QuoteSection } from "@/components/home/QuoteSection";

export const metadata: Metadata = {
  title: "La experiencia · The Bride Club",
  description:
    "Lo que suma The Bride Club además del viaje: el kit de bienvenida de cada destino, las experiencias adicionales, la app del viaje con la caja del grupo y otras celebraciones entre mujeres.",
};

export default function ExperiencePage() {
  return (
    <main className="flex-1">
      <section className="border-b border-tone-300 bg-tone-100">
        <div className="container-page py-20 sm:py-24">
          <p className="eyebrow">Además del viaje</p>
          <h1 className="title-xl mt-4 max-w-3xl text-wine-deep">La experiencia</h1>
          <p className="lead mt-6 max-w-2xl">
            Todo lo que acompaña al destino y al nivel de servicio que elijan: el kit
            que recibe cada grupo, los extras que se pueden sumar, la app donde vive el
            viaje y las otras celebraciones que organizamos.
          </p>
        </div>
      </section>

      <WelcomeKits />
      <AddOns />
      <TravelApp />
      <OtherTrips />
      <QuoteSection />
    </main>
  );
}
