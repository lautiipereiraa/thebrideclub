"use client";

import { useState } from "react";
import { Check, Plus, Trash2 } from "lucide-react";
import { formatUsd } from "@/lib/format";
import type { FundMember } from "@/types/fund";

interface MemberRowProps {
  member: FundMember;
  totalPerPerson: number;
  onPay: (id: string, amount: number) => void;
  onRemove: (id: string) => void;
}

export function MemberRow({
  member,
  totalPerPerson,
  onPay,
  onRemove,
}: MemberRowProps) {
  const [amount, setAmount] = useState("");
  const remaining = Math.max(0, totalPerPerson - member.paid);
  const percent = totalPerPerson > 0 ? (member.paid / totalPerPerson) * 100 : 0;
  const settled = remaining === 0;

  function handlePay() {
    const value = Number(amount);
    if (!Number.isFinite(value) || value <= 0) return;
    onPay(member.id, value);
    setAmount("");
  }

  return (
    <li className="rounded-2xl border border-tone-300 bg-tone-50 p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <p className="font-display text-2xl font-medium text-wine">{member.name}</p>
            {settled ? (
              <span className="flex items-center gap-1 rounded-full bg-tone-200 px-3 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-wine-deep">
                <Check size={11} strokeWidth={2} />
                Al día
              </span>
            ) : null}
          </div>
          <p className="mt-1 text-sm text-muted">
            Pagó {formatUsd(member.paid)}
            {settled ? "" : ` · le falta ${formatUsd(remaining)}`}
          </p>
        </div>

        <button
          type="button"
          aria-label={`Sacar a ${member.name}`}
          onClick={() => onRemove(member.id)}
          className="text-tone-400 transition-colors hover:text-wine"
        >
          <Trash2 size={16} strokeWidth={1.5} />
        </button>
      </div>

      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-tone-50">
        <div
          className="h-full rounded-full bg-gradient-to-r from-tone-400 to-wine transition-all duration-500"
          style={{ width: `${Math.min(100, percent)}%` }}
        />
      </div>

      {settled ? null : (
        <div className="mt-5 flex flex-wrap gap-2">
          <input
            type="number"
            min={1}
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            className="input-base w-36 py-2"
            placeholder="Monto"
          />
          <button type="button" onClick={handlePay} className="btn-outline px-5 py-2">
            <Plus size={14} strokeWidth={2} />
            Registrar pago
          </button>
          <button
            type="button"
            onClick={() => onPay(member.id, remaining)}
            className="btn-light px-5 py-2"
          >
            Pagó todo
          </button>
        </div>
      )}
    </li>
  );
}
