import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";

export function Hero() {
  return (
    <section className="relative">
      <Image
        src="/fotos/hero.jpg"
        alt="Tres amigas mirando el mar durante un viaje"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-wine-deep/70" />

      <div className="container-page relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center py-24 text-center">
        <BrandLogo size="lg" tone="light" />

        <h1 className="title-lg mt-12 max-w-3xl text-tone-50">
          Tu despedida de soltera, convertida en una experiencia inolvidable.
        </h1>

        <p className="mt-7 max-w-xl text-base leading-relaxed text-tone-200 sm:text-lg">
          Diseñamos viajes personalizados para celebrar a la novia junto a sus amigas.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="#cotizar" className="btn-primary">
            Diseñar mi experiencia
          </Link>
          <Link href="#destinos" className="btn-light">
            Ver destinos
          </Link>
        </div>

        <dl className="mt-20 grid w-full max-w-lg grid-cols-3 gap-8 border-t border-tone-50/25 pt-9">
          <div>
            <dt className="small-caps text-tone-300">Destinos</dt>
            <dd className="mt-2 font-display text-3xl font-medium text-tone-50">
              {destinations.length}
            </dd>
          </div>
          <div>
            <dt className="small-caps text-tone-300">Experiencias</dt>
            <dd className="mt-2 font-display text-3xl font-medium text-tone-50">
              {experiences.length}
            </dd>
          </div>
          <div>
            <dt className="small-caps text-tone-300">Coordinación</dt>
            <dd className="mt-2 font-display text-3xl font-medium text-tone-50">24/7</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
