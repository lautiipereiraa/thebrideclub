import { Moon } from "lucide-react";
import { travelStyleNames } from "@/data/travel-styles";
import type { Destination } from "@/types/travel";

interface DestinationCardProps {
  destination: Destination;
  index: number;
}

export function DestinationCard({ destination, index }: DestinationCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-blush-300/50 bg-blush-50">
      <div className="grid lg:grid-cols-5">
        <div
          className={`flex flex-col justify-between bg-gradient-to-br p-9 sm:p-11 lg:col-span-2 ${destination.gradient}`}
        >
          <div>
            <p className="small-caps text-wine/50">
              Producto 0{index + 1}
            </p>
            <h3 className="mt-6 font-display text-4xl leading-tight text-wine-deep sm:text-5xl">
              {destination.name}
            </h3>
            <p className="mt-2 text-sm text-muted">{destination.region}</p>
            <p className="mt-6 font-display text-2xl italic text-wine">
              {destination.productName}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-2">
            {destination.nights ? (
              <span className="flex items-center gap-1.5 rounded-full border border-wine/20 px-3 py-1 text-[0.68rem] uppercase tracking-[0.16em] text-wine">
                <Moon size={11} strokeWidth={1.5} />
                {destination.nights} noches
              </span>
            ) : null}
            {destination.styles.map((style) => (
              <span
                key={style}
                className="rounded-full bg-blush-50/70 px-3 py-1 text-[0.68rem] uppercase tracking-[0.16em] text-wine-soft"
              >
                {travelStyleNames[style]}
              </span>
            ))}
          </div>
        </div>

        <div className="p-9 sm:p-11 lg:col-span-3">
          <p className="font-display text-xl leading-snug text-wine-deep sm:text-2xl">
            {destination.focus}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {destination.why}
          </p>

          <div className="mt-9 grid gap-8 border-t border-blush-200 pt-8 sm:grid-cols-2">
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

          <div className="mt-8 border-t border-blush-200 pt-6">
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
