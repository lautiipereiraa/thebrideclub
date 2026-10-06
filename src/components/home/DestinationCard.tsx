import Image from "next/image";
import { Moon } from "lucide-react";
import { travelStyleNames } from "@/data/travel-styles";
import type { Destination } from "@/types/travel";

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-tone-300 bg-tone-50">
      <div className="grid items-center lg:grid-cols-5">
        {/* La portada trae el nombre y el logo compuestos adentro, en distinto lugar
            en cada destino. Por eso se muestra **entera**: cualquier recorte le
            comería el texto. Va con su proporción natural (4/5) y centrada. */}
        <div className="p-6 sm:p-8 lg:col-span-2">
          <Image
            src={destination.photo}
            alt={`${destination.name}, ${destination.region}`}
            width={900}
            height={1125}
            sizes="(min-width: 1024px) 38vw, (min-width: 640px) 90vw, 100vw"
            className="h-auto w-full rounded-2xl"
          />
        </div>

        <div className="p-9 pt-2 sm:p-11 sm:pt-2 lg:col-span-3 lg:pt-11">
          <h3 className="font-display text-3xl leading-tight text-wine-deep sm:text-4xl">
            {destination.name}
          </h3>
          <p className="mt-1.5 text-sm text-muted">{destination.region}</p>
          <p className="mt-4 font-display text-2xl italic text-wine">
            {destination.productName}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-2">
            {destination.nights ? (
              <span className="flex items-center gap-1.5 rounded-full border border-wine/25 px-3 py-1 text-[0.68rem] uppercase tracking-[0.16em] text-wine">
                <Moon size={11} strokeWidth={1.5} />
                {destination.nights} noches
              </span>
            ) : null}
            {destination.styles.map((style) => (
              <span
                key={style}
                className="rounded-full bg-tone-200 px-3 py-1 text-[0.68rem] uppercase tracking-[0.16em] text-wine"
              >
                {travelStyleNames[style]}
              </span>
            ))}
          </div>

          <p className="mt-7 font-display text-xl leading-snug text-wine-deep sm:text-2xl">
            {destination.focus}
          </p>

          <div className="mt-8 grid gap-8 border-t border-tone-300 pt-8 sm:grid-cols-2">
            <div>
              <p className="small-caps text-accent">Atractivos</p>
              <ul className="mt-4 space-y-1.5 text-sm text-ink">
                {destination.attractions.map((attraction) => (
                  <li key={attraction}>{attraction}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="small-caps text-accent">Experiencias</p>
              <ul className="mt-4 space-y-1.5 text-sm text-ink">
                {destination.experiences.map((experience) => (
                  <li key={experience} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {experience}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-tone-300 pt-6">
            <p className="text-sm text-ink">
              <span className="small-caps text-accent">Ideal para</span>
              <span className="mt-2 block">{destination.idealFor}</span>
            </p>
            {destination.hotels ? (
              <p className="mt-4 text-xs leading-relaxed text-muted">
                Alojamientos de referencia: {destination.hotels.join(" · ")}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
