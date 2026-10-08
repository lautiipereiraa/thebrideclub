import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Moon } from "lucide-react";
import { travelStyleNames } from "@/data/travel-styles";
import { formatArs } from "@/lib/format";
import type { Destination } from "@/types/travel";

interface DestinationTeaserProps {
  destination: Destination;
}

export function DestinationTeaser({ destination }: DestinationTeaserProps) {
  return (
    <Link
      href={`/destinos/${destination.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-tone-300 bg-tone-50 transition-colors duration-300 hover:border-wine/30"
    >
      {/* La portada trae el nombre compuesto adentro: se muestra entera, sin recorte. */}
      <div className="p-5 pb-0">
        <Image
          src={destination.photo}
          alt={`${destination.name}, ${destination.region}`}
          width={900}
          height={1125}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="h-auto w-full rounded-2xl"
        />
      </div>

      <div className="flex flex-1 flex-col px-7 py-6">
        <h3 className="sr-only">{destination.name}</h3>
        <p className="font-display text-xl italic text-wine">{destination.productName}</p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {destination.nights ? (
            <span className="flex items-center gap-1.5 rounded-full border border-wine/25 px-3 py-1 text-[0.62rem] uppercase tracking-[0.16em] text-wine">
              <Moon size={11} strokeWidth={1.5} />
              {destination.nights} noches
            </span>
          ) : null}
          {destination.styles.map((style) => (
            <span
              key={style}
              className="rounded-full bg-tone-200 px-3 py-1 text-[0.62rem] uppercase tracking-[0.16em] text-wine"
            >
              {travelStyleNames[style]}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <p className="text-xs text-muted">
            Desde
            <span className="block font-display text-2xl font-medium text-wine-deep">
              {formatArs(destination.prices.essential)}
            </span>
            por persona
          </p>
          <span className="flex items-center gap-1.5 text-sm text-wine transition-transform duration-300 group-hover:translate-x-1">
            Ver el viaje
            <ArrowRight size={15} strokeWidth={1.5} />
          </span>
        </div>
      </div>
    </Link>
  );
}
