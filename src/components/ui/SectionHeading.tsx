interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={isCentered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={tone === "light" ? "eyebrow-light" : "eyebrow"}>{eyebrow}</p>
      <h2
        className={`title-lg mt-4 ${tone === "light" ? "text-tone-50" : "text-wine-deep"}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 ${tone === "light" ? "text-base leading-relaxed text-tone-200 sm:text-lg" : "lead"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
