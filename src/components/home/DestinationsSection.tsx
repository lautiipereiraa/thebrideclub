import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { DestinationTeaser } from "@/components/home/DestinationTeaser";
import { destinations } from "@/data/destinations";
import { capitalize, spellOut } from "@/lib/format";

export function DestinationsSection() {
  const count = spellOut(destinations.length);

  return (
    <section id="destinos" className="section bg-tone-300">
      <div className="container-page">
        <SectionHeading
          eyebrow="Nuestros productos"
          title={`${capitalize(count)} destinos, ${count} formas de despedirse`}
          description="Cada uno armado por completo: alojamiento, traslados, gastronomía y experiencias."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, i) => (
            <Reveal key={destination.id} delay={(i % 3) * 0.1} className="h-full">
              <DestinationTeaser destination={destination} />
            </Reveal>
          ))}

          <Reveal delay={0.2} className="h-full">
            <div className="flex h-full flex-col justify-center rounded-3xl border border-dashed border-wine/25 bg-tone-100 px-8 py-10 text-center">
              <h3 className="font-display text-2xl text-wine-deep">
                ¿El destino que quieren no está acá?
              </h3>
              <p className="lead mx-auto mt-3 max-w-xl text-base">
                Estos son los que ya tenemos precotizados, pero el viaje se diseña igual
                para cualquier destino que tengan en mente: mismo formato, itinerario a
                medida y precio final por persona.
              </p>
              <Link href="#cotizar" className="btn-primary mt-7 self-center">
                Cotizar otro destino
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
