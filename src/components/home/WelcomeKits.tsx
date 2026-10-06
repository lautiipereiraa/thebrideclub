import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { destinations } from "@/data/destinations";

export function WelcomeKits() {
  return (
    <section id="kits" className="section bg-tone-200">
      <div className="container-page">
        <SectionHeading
          eyebrow="Kit de bienvenida"
          title="Algo para llevarse puesto, y algo para quedarse"
          description="Cada grupo recibe un kit pensado para su destino. Va incluido en el viaje."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <article
              key={destination.id}
              className="overflow-hidden rounded-3xl border border-tone-300 bg-tone-50"
            >
              <div className="relative aspect-4/5">
                <Image
                  src={destination.kit.photo}
                  alt={`Kit de bienvenida de ${destination.name}: ${destination.kit.items}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="px-7 py-6">
                <p className="small-caps text-accent">{destination.name}</p>
                <p className="mt-2 text-sm text-ink">{destination.kit.items}</p>
              </div>
            </article>
          ))}

          <article className="flex flex-col justify-center rounded-3xl border border-dashed border-wine/25 bg-tone-50 px-8 py-10 text-center">
            <h3 className="font-display text-2xl text-wine-deep">
              Y para la novia, la gorra con velo
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              El detalle que la distingue del resto del grupo durante todo el viaje.
              Va en todos los destinos.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
