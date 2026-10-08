import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { DestinationCard } from "@/components/home/DestinationCard";
import { QuoteSection } from "@/components/home/QuoteSection";
import { destinations } from "@/data/destinations";

// Solo existen los destinos cargados: cualquier otra dirección da 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return destinations.map((destination) => ({ id: destination.id }));
}

function findDestination(id: string) {
  return destinations.find((destination) => destination.id === id);
}

export async function generateMetadata(
  props: PageProps<"/destinos/[id]">,
): Promise<Metadata> {
  const { id } = await props.params;
  const destination = findDestination(id);
  if (!destination) return {};

  return {
    title: `${destination.name} · ${destination.productName} · The Bride Club`,
    description: `${destination.productName}: despedida de soltera en ${destination.name}. ${destination.focus}`,
  };
}

export default async function DestinationPage(props: PageProps<"/destinos/[id]">) {
  const { id } = await props.params;
  const destination = findDestination(id);
  if (!destination) notFound();

  const others = destinations.filter((other) => other.id !== destination.id);

  return (
    <main className="flex-1">
      <section className="section bg-tone-300">
        <div className="container-page">
          <Link
            href="/#destinos"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-wine"
          >
            <ArrowLeft size={15} strokeWidth={1.5} />
            Todos los destinos
          </Link>

          <div className="mt-8">
            <DestinationCard destination={destination} headingLevel="h1" />
          </div>

          <nav aria-label="Otros destinos" className="mt-14 text-center">
            <p className="small-caps text-accent">Otros destinos</p>
            <ul className="mt-5 flex flex-wrap justify-center gap-3">
              {others.map((other) => (
                <li key={other.id}>
                  <Link
                    href={`/destinos/${other.id}`}
                    className="inline-block rounded-full border border-wine/25 bg-tone-100 px-5 py-2 text-sm text-wine transition-colors hover:bg-tone-50"
                  >
                    {other.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <QuoteSection defaultDestination={destination.id} />
    </main>
  );
}
