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
      <div className="grid lg:grid-cols-5">
        <div className="relative min-h-72 lg:col-span-2">
          <Image
            src={destination.photo}
            alt={`${destination.name}, ${destination.region}`}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-wine-deep/85 via-wine-deep/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-9">
            <h3 className="font-display text-4xl leading-tight text-tone-50">
              {destination.name}
            </h3>
            <p className="mt-1 text-sm text-tone-200">{destination.region}</p>
            <p className="mt-4 font-display text-2xl italic text-tone-50">
              {destination.productName}
            </p>
          </div>
        </div>

        <div className="p-9 sm:p-11 lg:col-span-3">
          <div className="flex flex-wrap items-center gap-2">
            {destination.nights ? (
              <span className="flex items-center gap-1.5 rounded-full border border-wine/25 px-3 py-1 text-[0.68rem] uppercase tracking-[0.16em] text-wine">
                <Moon size={11} strokeWidth={1.5} />
                {destination.nights} noches
              </span>
            ) : null}
            {destination.styles.map((style) => (
              <span
                key={style}
                className="rounded-full bg-tone-200 px-3 py-1 text-[0.68rem] uppercase tracking-[0.16em] text-wine-deep"
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
