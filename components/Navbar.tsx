"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";


const links = [
  { label: "Diagnostic Atelier ORS", href: "#diagnostic" },
  { label: "Méthode", href: "#methode" },
  { label: "Pourquoi ORS ?", href: "#pourquoi-ors" },
  { label: "Problème", href: "#probleme" },
  { label: "Premium", href: "#premium" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-20">
        <Link href="/" className="text-2xl font-black tracking-tight">
          ORS
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-bold text-slate-700 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-blue-600">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-600 md:inline-flex"
        >
          Audit gratuit
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-full border border-slate-200 p-3 md:hidden"
          aria-label="Ouvrir le menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4 font-bold text-slate-800">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-blue-600 px-5 py-3 text-center text-white"
            >
              Audit gratuit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}