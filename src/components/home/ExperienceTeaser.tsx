import Link from "next/link";
import { ArrowRight, Gift, PiggyBank, Smartphone, Sparkles, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const highlights = [
  { icon: Gift, name: "Kit de bienvenida", href: "/experiencia#kits" },
  { icon: Sparkles, name: "Experiencias adicionales", href: "/experiencia#extras" },
  { icon: Smartphone, name: "La app del viaje", href: "/experiencia#app" },
  { icon: Users, name: "Otras formas de viajar", href: "/experiencia#otros-viajes" },
];

export function ExperienceTeaser() {
  return (
    <section className="section bg-tone-300">
      <div className="container-page">
        <Reveal>
          <div className="rounded-3xl bg-wine p-10 text-tone-50 sm:p-14">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <p className="eyebrow-light">Además del viaje</p>
                <h2 className="title-lg mt-4 text-tone-50">
                  Todo lo que suma a la experiencia
                </h2>
                <p className="mt-6 text-base leading-relaxed text-tone-50">
                  El kit que recibe cada grupo, los extras que se pueden agregar, la app
                  con la caja del grupo y los viajes que organizamos además de las
                  despedidas.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link href="/experiencia" className="btn-light">
                    Ver la experiencia completa
                  </Link>
                  <Link
                    href="/caja"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-tone-50/40 px-7 py-3 text-sm font-medium tracking-wide text-tone-50 transition-all duration-300 hover:bg-tone-50/10"
                  >
                    <PiggyBank size={17} strokeWidth={1.5} />
                    Probar la caja del grupo
                  </Link>
                </div>
              </div>

              <ul className="grid gap-px overflow-hidden rounded-2xl bg-tone-50/15 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li key={item.href} className="bg-wine">
                    <Link
                      href={item.href}
                      className="group flex h-full items-center justify-between gap-4 p-6 transition-colors hover:bg-wine-deep"
                    >
                      <span className="flex items-center gap-3">
                        <item.icon size={20} strokeWidth={1.5} aria-hidden="true" />
                        <span className="text-sm">{item.name}</span>
                      </span>
                      <ArrowRight
                        size={15}
                        strokeWidth={1.5}
                        aria-hidden="true"
                        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
