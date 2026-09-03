const segments = [
  {
    title: "Hoy",
    heading: "Despedidas de soltera",
    text: "Grupos de 6 a 20 amigas que quieren celebrar juntas sin que nadie termine agotada de organizar.",
  },
  {
    title: "Después",
    heading: "Otros viajes de celebración",
    text: "El mismo formato aplicado a viajes entre amigas, cumpleaños redondos, aniversarios, lunas de miel y experiencias individuales para la novia.",
  },
];

export function Audience() {
  return (
    <section className="section bg-wine text-blush-50">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow-light">Para quién viajamos</p>
            <h2 className="title-lg mt-4 text-blush-50">
              Mujeres de 25 a 40 que valoran su tiempo tanto como su plata.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-blush-100 sm:text-lg">
              Nuestras viajeras trabajan, tienen agenda y quieren un viaje a la altura
              del momento que están celebrando. No buscan lo más barato: buscan que
              esté todo bien hecho y que no les consuma semanas de organización.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
            {segments.map((segment) => (
              <div key={segment.title} className="border-t border-blush-50/20 pt-6">
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-blush-200">
                  {segment.title}
                </p>
                <h3 className="mt-3 font-display text-2xl text-blush-50">
                  {segment.heading}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-blush-100">
                  {segment.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
