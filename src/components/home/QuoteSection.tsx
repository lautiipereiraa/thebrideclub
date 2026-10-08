import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteForm } from "@/components/home/QuoteForm";

interface QuoteSectionProps {
  defaultDestination?: string;
}

export function QuoteSection({ defaultDestination }: QuoteSectionProps) {
  return (
    <section id="cotizar" className="section bg-tone-300">
      <div className="container-page">
        <SectionHeading
          eyebrow="Pedir cotización"
          title="Contanos cómo se imaginan el viaje"
          description="Completá el formulario y te armamos una propuesta con precio final por persona, sin cargo y sin compromiso."
        />

        <Reveal className="mx-auto mt-14 max-w-3xl">
          <QuoteForm defaultDestination={defaultDestination} />
        </Reveal>
      </div>
    </section>
  );
}
