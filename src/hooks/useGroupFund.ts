"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";
import type { FundMember, GroupFund } from "@/types/fund";

const STORAGE_KEY = "antes-del-velo-group-fund";

const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function getRawSnapshot(): string | null {
  return window.localStorage.getItem(STORAGE_KEY);
}

function getRawServerSnapshot(): string | null {
  return null;
}

function parseFund(raw: string | null): GroupFund | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as GroupFund;
  } catch {
    return null;
  }
}

function writeFund(next: GroupFund | null) {
  if (next) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } else {
    window.localStorage.removeItem(STORAGE_KEY);
  }
  emit();
}

function mutate(updater: (current: GroupFund | null) => GroupFund | null) {
  writeFund(updater(parseFund(getRawSnapshot())));
}

export function useGroupFund() {
  const raw = useSyncExternalStore(
    subscribe,
    getRawSnapshot,
    getRawServerSnapshot,
  );
  const ready = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  const fund = useMemo(() => parseFund(raw), [raw]);

  const createFund = useCallback((next: GroupFund) => {
    writeFund(next);
  }, []);

  const addMember = useCallback((name: string) => {
    mutate((current) => {
      if (!current) return current;
      const member: FundMember = { id: crypto.randomUUID(), name, paid: 0 };
      return { ...current, members: [...current.members, member] };
    });
  }, []);

  const removeMember = useCallback((id: string) => {
    mutate((current) => {
      if (!current) return current;
      return {
        ...current,
        members: current.members.filter((member) => member.id !== id),
      };
    });
  }, []);

  const registerPayment = useCallback((id: string, amount: number) => {
    mutate((current) => {
      if (!current) return current;
      return {
        ...current,
        members: current.members.map((member) =>
          member.id === id
            ? { ...member, paid: Math.max(0, member.paid + amount) }
            : member,
        ),
      };
    });
  }, []);

  const updateFund = useCallback((changes: Partial<GroupFund>) => {
    mutate((current) => (current ? { ...current, ...changes } : current));
  }, []);

  const resetFund = useCallback(() => {
    writeFund(null);
  }, []);

  return {
    fund,
    ready,
    createFund,
    addMember,
    removeMember,
    registerPayment,
    updateFund,
    resetFund,
  };
}
