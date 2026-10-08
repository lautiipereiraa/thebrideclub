"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";

const navLinks = [
  { href: "/#nosotras", label: "Nosotras" },
  { href: "/#destinos", label: "Destinos" },
  { href: "/#niveles", label: "Niveles" },
  { href: "/experiencia", label: "Experiencia" },
  { href: "/caja", label: "La caja" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-tone-400/40 bg-tone-100/95 backdrop-blur-md"
          : "border-b border-transparent bg-tone-100"
      }`}
    >
      {/* Alto fijo: con el borde de abajo suma --header-height, que descuentan las secciones de pantalla completa. */}
      <div className="container-page relative">
        <div className="flex h-[calc(var(--header-height)-1px)] items-center justify-between gap-6">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => window.location.reload()}
              aria-label="Refrescar la página"
              className="shrink-0 transition-opacity duration-200 hover:opacity-70"
            >
              <BrandLogo size="md" layout="mark" priority />
            </button>

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="min-w-0"
              aria-label="The Bride Club · Inicio"
            >
              <span
                className="block font-logo text-2xl font-black uppercase leading-none tracking-[-0.01em] text-wine sm:text-3xl"
              >
                The Bride Club
              </span>
              <span
                className="mt-1.5 block text-[0.5rem] uppercase tracking-[0.3em] text-accent sm:text-[0.56rem] sm:tracking-[0.36em]"
              >
                Viajes para despedidas de soltera
              </span>
            </Link>
          </div>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-wine"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/#cotizar" className="btn-primary px-6 py-2.5">
              Diseñar mi experiencia
            </Link>
          </nav>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
            className="shrink-0 text-wine lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-tone-400/40 bg-tone-100/95 backdrop-blur-md lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm text-muted transition-colors hover:bg-tone-50 hover:text-wine"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#cotizar"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Diseñar mi experiencia
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
