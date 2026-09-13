import type { Metadata } from "next";
import { GroupFundApp } from "@/components/fund/GroupFundApp";

export const metadata: Metadata = {
  title: "La caja del grupo · The Bride Club",
  description:
    "La herramienta de The Bride Club para que cada amiga pague su parte del viaje por separado y todas vean cuánto falta.",
};

export default function GroupFundPage() {
  return (
    <main className="flex-1 bg-tone-100">
      <section className="border-b border-tone-300 bg-tone-100">
        <div className="container-page py-20 sm:py-24">
          <p className="eyebrow">Una función de la app del viaje</p>
          <h1 className="title-xl mt-4 max-w-3xl text-wine-deep">
            La caja del grupo
          </h1>
          <p className="lead mt-6 max-w-2xl">
            Que ninguna tenga que adelantar la plata de las demás. Cargás el viaje una
            vez, cada amiga suma lo que va pagando y todas ven en el mismo lugar cuánto
            se juntó y cuánto falta. Va incluida en el presupuesto del viaje, junto con
            el itinerario, los recordatorios y las votaciones del grupo.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-4xl">
          <GroupFundApp />
        </div>
      </section>
    </main>
  );
}
