import { LuggageTagIcon } from "@/components/ui/LuggageTagIcon";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  tone?: "wine" | "light";
  layout?: "stacked" | "inline";
  withCaptions?: boolean;
}

const scriptSizes = {
  sm: "text-[1.7rem]",
  md: "text-5xl",
  lg: "text-[3.5rem] sm:text-7xl lg:text-8xl",
};

const tagSizes = {
  sm: "h-5",
  md: "h-9",
  lg: "h-11 sm:h-14 lg:h-16",
};

const captionSizes = {
  sm: "text-[0.48rem] tracking-[0.34em]",
  md: "text-[0.58rem] tracking-[0.4em]",
  lg: "text-[0.6rem] sm:text-[0.68rem] tracking-[0.42em]",
};

export function BrandLogo({
  size = "md",
  tone = "wine",
  layout = "stacked",
  withCaptions = true,
}: BrandLogoProps) {
  const color = tone === "light" ? "text-blush-100" : "text-wine";
  const captionColor = tone === "light" ? "text-blush-200/80" : "text-wine/55";

  if (layout === "inline") {
    return (
      <span className={`flex items-end gap-2 ${color}`}>
        <span className={`font-script leading-none ${scriptSizes[size]}`}>
          Antes del velo
        </span>
        <LuggageTagIcon className={`${tagSizes[size]} w-auto opacity-75`} />
      </span>
    );
  }

  return (
    <div className={`flex flex-col items-center ${color}`}>
      {withCaptions ? (
        <p className={`${captionSizes[size]} uppercase ${captionColor}`}>
          Agencia de viajes
        </p>
      ) : null}

      <div className={withCaptions ? "mt-4" : ""}>
        <p className={`font-script text-center leading-[0.9] ${scriptSizes[size]}`}>
          Antes
        </p>
        <div className="mt-1 flex items-end justify-center gap-3">
          <p className={`font-script leading-[0.95] ${scriptSizes[size]}`}>
            del velo
          </p>
          <LuggageTagIcon className={`${tagSizes[size]} w-auto opacity-75`} />
        </div>
      </div>

      {withCaptions ? (
        <p className={`mt-5 ${captionSizes[size]} uppercase ${captionColor}`}>
          Despedidas de soltera
        </p>
      ) : null}
    </div>
  );
}
