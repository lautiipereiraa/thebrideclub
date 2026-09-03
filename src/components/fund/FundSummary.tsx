"use client";

import { FundProgressBar } from "@/components/fund/FundProgressBar";
import { formatDate, formatUsd } from "@/lib/format";
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
    <div className="rounded-3xl bg-wine p-9 text-blush-50 sm:p-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow-light">{fund.destination}</p>
          <h2 className="title-lg mt-2 text-blush-50">{fund.groupName}</h2>
        </div>
        <p className="text-sm text-blush-100">
          Salida: {formatDate(fund.travelDate)}
        </p>
      </div>

      <div className="mt-10">
        <div className="flex items-baseline justify-between">
          <p className="text-sm text-blush-100">Juntado hasta ahora</p>
          <p className="font-display text-4xl font-medium">{Math.round(percent)}%</p>
        </div>
        <div className="mt-4">
          <FundProgressBar percent={percent} />
        </div>
      </div>

      <dl className="mt-10 grid gap-8 border-t border-blush-50/15 pt-8 sm:grid-cols-4">
        <div>
          <dt className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-blush-200">
            Costo total
          </dt>
          <dd className="mt-1 font-display text-2xl font-medium">{formatUsd(total)}</dd>
        </div>
        <div>
          <dt className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-blush-200">
            Ya pagado
          </dt>
          <dd className="mt-1 font-display text-2xl font-medium">{formatUsd(collected)}</dd>
        </div>
        <div>
          <dt className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-blush-200">
            Falta
          </dt>
          <dd className="mt-1 font-display text-2xl font-medium text-blush-200">
            {formatUsd(remaining)}
          </dd>
        </div>
        <div>
          <dt className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-blush-200">
            Al día
          </dt>
          <dd className="mt-1 font-display text-2xl font-medium">
            {settledCount} de {fund.members.length}
          </dd>
        </div>
      </dl>

      <p className="mt-8 text-sm text-blush-100">
        {formatUsd(fund.totalPerPerson)} por persona · cada una paga su parte por
        separado.
      </p>
    </div>
  );
}
