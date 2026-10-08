"use client";

import { Moon, Sun } from "lucide-react";
import { THEME_STORAGE_KEY } from "@/lib/theme";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  function toggleTheme() {
    const root = document.documentElement;
    const dark = root.dataset.theme !== "dark";

    if (dark) root.dataset.theme = "dark";
    else delete root.dataset.theme;

    try {
      if (dark) localStorage.setItem(THEME_STORAGE_KEY, "oscuro");
      else localStorage.removeItem(THEME_STORAGE_KEY);
    } catch {
      // Sin almacenamiento (modo privado) el cambio vale solo para esta visita.
    }
  }

  // Los dos íconos se renderizan y el CSS muestra uno: el servidor no sabe el tema.
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Cambiar entre modo claro y oscuro"
      title="Modo claro / oscuro"
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-wine transition-colors hover:bg-tone-200 ${className}`}
    >
      <Moon size={19} strokeWidth={1.5} className="dark:hidden" aria-hidden="true" />
      <Sun size={19} strokeWidth={1.5} className="hidden dark:block" aria-hidden="true" />
    </button>
  );
}
