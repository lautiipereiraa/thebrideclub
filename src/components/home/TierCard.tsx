import Link from "next/link";
import { Check } from "lucide-react";
import { formatUsd } from "@/lib/format";
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
          ? "border-wine bg-wine text-blush-50 shadow-xl shadow-wine/20 lg:-translate-y-4"
          : "border-blush-200 bg-blush-50 hover:border-wine/30"
      }`}
    >
      {featured ? (
        <span className="absolute -top-3 left-9 rounded-full bg-blush-200 px-4 py-1 text-[0.62rem] uppercase tracking-[0.28em] text-wine">
          El más elegido
        </span>
      ) : null}

      <h3
        className={`font-display text-3xl ${featured ? "text-blush-50" : "text-wine"}`}
      >
        {tier.name}
      </h3>
      <p
        className={`mt-3 text-sm leading-relaxed ${
          featured ? "text-blush-100" : "text-muted"
        }`}
      >
        {tier.positioning}
      </p>

      <div
        className={`mt-7 border-t pt-6 ${
          featured ? "border-blush-50/20" : "border-blush-100"
        }`}
      >
        <p
          className={`text-[0.7rem] uppercase tracking-[0.14em] ${
            featured ? "text-blush-100" : "text-muted"
          }`}
        >
          Desde
        </p>
        <p className="font-display text-4xl font-medium">
          {formatUsd(tier.fromPrice)}
          <span
            className={`ml-2 font-sans text-xs ${
              featured ? "text-blush-100" : "text-muted"
            }`}
          >
            por persona
          </span>
        </p>
      </div>

      <ul className="mt-7 space-y-3 text-sm">
        {tier.includes.map((item) => (
          <li key={item} className="flex gap-3">
            <Check
              size={16}
              strokeWidth={1.75}
              className={`mt-0.5 shrink-0 ${featured ? "text-blush-200" : "text-accent"}`}
            />
            <span className={featured ? "text-blush-100" : "text-ink"}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href="#cotizar"
        className={`mt-9 ${featured ? "btn-light" : "btn-outline"}`}
      >
        Quiero este nivel
      </Link>
    </article>
  );
}
