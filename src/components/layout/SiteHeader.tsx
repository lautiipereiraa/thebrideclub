"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";

const navLinks = [
  { href: "/#experiencia", label: "La experiencia" },
  { href: "/#destinos", label: "Destinos" },
  { href: "/#niveles", label: "Niveles" },
  { href: "/#extras", label: "Extras" },
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
          ? "border-b border-blush-200/70 bg-cream/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)} aria-label="Antes del velo">
          <BrandLogo size="sm" layout="inline" />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
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
            Pedir cotización
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
          className="text-wine lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-blush-200/70 bg-cream/95 backdrop-blur-md lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm text-muted transition-colors hover:bg-blush-50 hover:text-wine"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#cotizar"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Pedir cotización
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
