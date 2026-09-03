"use client";

import { FundDashboard } from "@/components/fund/FundDashboard";
import { FundSetupForm } from "@/components/fund/FundSetupForm";
import { useGroupFund } from "@/hooks/useGroupFund";

export function GroupFundApp() {
  const {
    fund,
    ready,
    createFund,
    addMember,
    removeMember,
    registerPayment,
    resetFund,
  } = useGroupFund();

  if (!ready) {
    return (
      <div className="rounded-2xl border border-blush-200 bg-blush-50 p-12 text-center text-sm text-muted">
        Cargando la caja...
      </div>
    );
  }

  if (!fund) {
    return <FundSetupForm onCreate={createFund} />;
  }

  return (
    <FundDashboard
      fund={fund}
      onAddMember={addMember}
      onRemoveMember={removeMember}
      onPay={registerPayment}
      onReset={resetFund}
    />
  );
}
