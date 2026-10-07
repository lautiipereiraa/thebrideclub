import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { DestinationCard } from "@/components/home/DestinationCard";
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

        <div className="mt-16 space-y-8">
          {destinations.map((destination) => (
            <Reveal key={destination.id}>
              <DestinationCard destination={destination} />
            </Reveal>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-dashed border-wine/25 bg-tone-100 px-8 py-10 text-center">
          <h3 className="font-display text-2xl text-wine-deep">
            ¿El destino que quieren no está acá?
          </h3>
          <p className="lead mx-auto mt-3 max-w-xl text-base">
            Estos son los que ya tenemos precotizados, pero el viaje se diseña igual
            para cualquier destino que tengan en mente: mismo formato, itinerario a
            medida y precio final por persona.
          </p>
          <Link href="#cotizar" className="btn-primary mt-7">
            Cotizar otro destino
          </Link>
        </div>
      </div>
    </section>
  );
}
