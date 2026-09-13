interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  tone?: "wine" | "light";
  layout?: "stacked" | "inline";
  withCaptions?: boolean;
}

const wordmarkSizes = {
  sm: "text-[1.05rem]",
  md: "text-3xl",
  lg: "text-[2.6rem] sm:text-6xl lg:text-7xl",
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
  const color = tone === "light" ? "text-tone-200" : "text-wine";
  const captionColor = tone === "light" ? "text-tone-300" : "text-wine/70";
  const wordmark = `font-logo font-black uppercase leading-[0.82] tracking-[-0.015em] ${wordmarkSizes[size]}`;

  if (layout === "inline") {
    return (
      <span className={`${wordmark} ${color}`}>The Bride Club</span>
    );
  }

  return (
    <div className={`flex flex-col items-center ${color}`}>
      {withCaptions ? (
        <p className={`${captionSizes[size]} font-medium uppercase ${captionColor}`}>
          Agencia de viajes
        </p>
      ) : null}

      <p className={`${wordmark} mt-5 text-center`}>
        The
        <br />
        Bride Club
      </p>

      {withCaptions ? (
        <p className={`mt-6 ${captionSizes[size]} font-medium uppercase ${captionColor}`}>
          Despedidas de soltera
        </p>
      ) : null}
    </div>
  );
}
