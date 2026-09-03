"use client";

import { useState } from "react";
import { UserPlus } from "lucide-react";

interface AddMemberFormProps {
  onAdd: (name: string) => void;
}

export function AddMemberForm({ onAdd }: AddMemberFormProps) {
  const [name, setName] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-2">
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="input-base w-full py-2 sm:w-56"
        placeholder="Sumar otra amiga"
      />
      <button type="submit" className="btn-outline px-5 py-2">
        <UserPlus size={14} strokeWidth={1.75} />
        Agregar
      </button>
    </form>
  );
}
