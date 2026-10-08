import Link from "next/link";
import { Check } from "lucide-react";
import { formatArs } from "@/lib/format";
import type { ServiceTier } from "@/types/travel";

interface TierCardProps {
  tier: ServiceTier;
}

export function TierCard({ tier }: TierCardProps) {
  const featured = tier.featured;

  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border p-9 transition-all duration-300 ${
        featured
          ? "border-wine bg-wine text-tone-50 shadow-xl shadow-wine/20"
          : "border-tone-300 bg-tone-50 hover:border-wine/30"
      }`}
    >
      {featured ? (
        <span className="absolute -top-3 left-9 rounded-full bg-tone-300 px-4 py-1 text-[0.62rem] uppercase tracking-[0.28em] text-wine-deep">
          El más elegido
        </span>
      ) : null}

      <h3
        className={`font-display text-3xl ${featured ? "text-tone-50" : "text-wine"}`}
      >
        {tier.name}
      </h3>
      {/* Dos renglones reservados: el precio queda a la misma altura en las dos tarjetas. */}
      <p
        className={`mt-3 min-h-[2lh] text-sm leading-relaxed ${
          featured ? "text-tone-50" : "text-muted"
        }`}
      >
        {tier.positioning}
      </p>

      <div
        className={`mt-7 border-t pt-6 ${
          featured ? "border-tone-50/20" : "border-tone-400/60"
        }`}
      >
        <p
          className={`text-[0.7rem] uppercase tracking-[0.14em] ${
            featured ? "text-tone-50" : "text-muted"
          }`}
        >
          Desde
        </p>
        <p className="font-display text-4xl font-medium">
          {formatArs(tier.fromPrice)}
          <span
            className={`ml-2 font-sans text-xs ${
              featured ? "text-tone-50" : "text-muted"
            }`}
          >
            por persona
          </span>
        </p>
      </div>

      <ul className="mb-9 mt-7 space-y-3 text-sm">
        {tier.includes.map((item) => (
          <li key={item} className="flex gap-3">
            <Check
              size={16}
              strokeWidth={1.75}
              className={`mt-0.5 shrink-0 ${featured ? "text-tone-100" : "text-accent"}`}
            />
            <span className={featured ? "text-tone-50" : "text-ink"}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href="#cotizar"
        className={`mt-auto ${featured ? "btn-light" : "btn-outline"}`}
      >
        Quiero este nivel
      </Link>
    </article>
  );
}
