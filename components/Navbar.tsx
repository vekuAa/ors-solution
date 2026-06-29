"use client";

import Link from "next/link";
import { Building2, Car, FileText, Menu, Newspaper, X } from "lucide-react";
import { useState } from "react";

const solutions = [
  {
    label: "Automobile",
    description: "Optimisation des ateliers et concessions.",
    href: "/automobile",
    icon: Car,
    active: true,
  },
  {
    label: "Industrie",
    description: "Déploiement prochainement.",
    href: "/secteurs",
    icon: Building2,
    active: false,
  },
  {
    label: "Logistique",
    description: "Déploiement prochainement.",
    href: "/secteurs",
    icon: Building2,
    active: false,
  },
];

const resources = [
  {
    label: "Ressources",
    description: "Guides, conseils et contenus métier.",
    href: "/ressources",
    icon: FileText,
  },
  {
    label: "Actualités",
    description: "Suivre l’évolution d’ORS.",
    href: "/ressources",
    icon: Newspaper,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-20">
        <Link href="/" className="text-2xl font-black tracking-tight">
          ORS
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-bold text-slate-300 lg:flex">
          <Dropdown label="Solutions" items={solutions} />
          <Link href="/methode" className="hover:text-white">
            Méthode
          </Link>
          <Dropdown label="Ressources" items={resources} />
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-blue-600 px-5 py-3 text-sm font-black text-white transition hover:bg-blue-500 lg:inline-flex"
        >
          Demander un audit
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-full border border-white/10 p-3 lg:hidden"
          aria-label="Ouvrir le menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-6 lg:hidden">
          <div className="space-y-6">
            <MobileGroup title="Solutions" items={solutions} />
            <MobileLink href="/methode" label="Méthode" />
            <MobileGroup title="Ressources" items={resources} />
            <MobileLink href="/contact" label="Contact" />

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex justify-center rounded-full bg-blue-600 px-5 py-4 font-black"
            >
              Demander un audit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Dropdown({
  label,
  items,
}: {
  label: string;
  items: {
    label: string;
    description: string;
    href: string;
    icon: React.ElementType;
    active?: boolean;
  }[];
}) {
  return (
    <div className="group relative">
      <button className="font-bold text-slate-300 transition group-hover:text-white">
        {label}
      </button>

      <div className="invisible absolute left-1/2 top-full w-[420px] -translate-x-1/2 pt-5 opacity-0 transition group-hover:visible group-hover:opacity-100">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-3 text-slate-950 shadow-2xl">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex gap-4 rounded-3xl p-4 transition hover:bg-slate-50"
              >
                <div className="h-fit rounded-2xl bg-blue-50 p-3 text-blue-600">
                  <Icon size={22} />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-black">{item.label}</p>

                    {!item.active && (
                      <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-black text-slate-500">
                        Bientôt
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MobileGroup({
  title,
  items,
}: {
  title: string;
  items: {
    label: string;
    description: string;
    href: string;
    icon: React.ElementType;
    active?: boolean;
  }[];
}) {
  return (
    <div>
      <p className="mb-3 text-sm font-black text-blue-300">{title}</p>

      <div className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex gap-4 rounded-3xl bg-white/5 p-4"
            >
              <div className="h-fit rounded-2xl bg-white/10 p-3 text-blue-300">
                <Icon size={22} />
              </div>

              <div>
                <p className="font-black">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function MobileLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="block rounded-3xl bg-white/5 p-4 font-black">
      {label}
    </Link>
  );
}