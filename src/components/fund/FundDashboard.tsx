"use client";

import { RotateCcw } from "lucide-react";
import { AddMemberForm } from "@/components/fund/AddMemberForm";
import { FundSummary } from "@/components/fund/FundSummary";
import { MemberRow } from "@/components/fund/MemberRow";
import type { GroupFund } from "@/types/fund";

interface FundDashboardProps {
  fund: GroupFund;
  onAddMember: (name: string) => void;
  onRemoveMember: (id: string) => void;
  onPay: (id: string, amount: number) => void;
  onReset: () => void;
}

export function FundDashboard({
  fund,
  onAddMember,
  onRemoveMember,
  onPay,
  onReset,
}: FundDashboardProps) {
  return (
    <div className="space-y-10">
      <FundSummary fund={fund} />

      <div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h3 className="font-display text-2xl text-wine-deep">
            El grupo ({fund.members.length})
          </h3>
          <AddMemberForm onAdd={onAddMember} />
        </div>

        {fund.members.length === 0 ? (
          <p className="mt-8 rounded-2xl border border-dashed border-tone-400 bg-tone-50 p-10 text-center text-sm text-muted">
            Todavía no hay nadie en la caja. Agregá a las amigas del grupo para empezar.
          </p>
        ) : (
          <ul className="mt-6 space-y-4">
            {fund.members.map((member) => (
              <MemberRow
                key={member.id}
                member={member}
                totalPerPerson={fund.totalPerPerson}
                onPay={onPay}
                onRemove={onRemoveMember}
              />
            ))}
          </ul>
        )}
      </div>

      <div className="border-t border-tone-300 pt-8">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-wine"
        >
          <RotateCcw size={14} strokeWidth={1.5} />
          Empezar una caja nueva
        </button>
      </div>
    </div>
  );
}
