"use client";

import { FundProgressBar } from "@/components/fund/FundProgressBar";
import { formatDate, formatArs } from "@/lib/format";
import type { GroupFund } from "@/types/fund";

interface FundSummaryProps {
  fund: GroupFund;
}

export function FundSummary({ fund }: FundSummaryProps) {
  const total = fund.totalPerPerson * fund.members.length;
  const collected = fund.members.reduce((sum, member) => sum + member.paid, 0);
  const remaining = Math.max(0, total - collected);
  const percent = total > 0 ? (collected / total) * 100 : 0;
  const settledCount = fund.members.filter(
    (member) => member.paid >= fund.totalPerPerson,
  ).length;

  return (
    <div className="rounded-3xl bg-wine p-9 text-tone-50 sm:p-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow-light">{fund.destination}</p>
          <h2 className="title-lg mt-2 text-tone-50">{fund.groupName}</h2>
        </div>
        <p className="text-sm text-tone-50">
          Salida: {formatDate(fund.travelDate)}
        </p>
      </div>

      <div className="mt-10">
        <div className="flex items-baseline justify-between">
          <p className="text-sm text-tone-50">Juntado hasta ahora</p>
          <p className="font-display text-4xl font-medium">{Math.round(percent)}%</p>
        </div>
        <div className="mt-4">
          <FundProgressBar percent={percent} />
        </div>
      </div>

      <dl className="mt-10 grid gap-8 border-t border-tone-50/15 pt-8 sm:grid-cols-4">
        <div>
          <dt className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-tone-100">
            Costo total
          </dt>
          <dd className="mt-1 font-display text-2xl font-medium">{formatArs(total)}</dd>
        </div>
        <div>
          <dt className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-tone-100">
            Ya pagado
          </dt>
          <dd className="mt-1 font-display text-2xl font-medium">{formatArs(collected)}</dd>
        </div>
        <div>
          <dt className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-tone-100">
            Falta
          </dt>
          <dd className="mt-1 font-display text-2xl font-medium text-tone-100">
            {formatArs(remaining)}
          </dd>
        </div>
        <div>
          <dt className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-tone-100">
            Al día
          </dt>
          <dd className="mt-1 font-display text-2xl font-medium">
            {settledCount} de {fund.members.length}
          </dd>
        </div>
      </dl>

      <p className="mt-8 text-sm text-tone-50">
        {formatArs(fund.totalPerPerson)} por persona · cada una paga su parte por
        separado.
      </p>
    </div>
  );
}
