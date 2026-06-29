"use client";

import Link from "next/link";
import {
  Building2,
  Car,
  ChevronDown,
  FileText,
  Menu,
  Newspaper,
  X,
} from "lucide-react";
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
    active: true,
  },
  {
    label: "Actualités",
    description: "Suivre l’évolution d’ORS.",
    href: "/ressources",
    icon: Newspaper,
    active: true,
  },
];

type MenuItem = {
  label: string;
  description: string;
  href: string;
  icon: React.ElementType;
  active?: boolean;
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
    setMobileSolutionsOpen(false);
    setMobileResourcesOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-20">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-black tracking-tight">
            ORS
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-bold text-slate-300 lg:flex">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>

            <Dropdown label="Solutions" items={solutions} />

            <Link href="/methode" className="hover:text-white">
              Méthode
            </Link>

            <Link href="/entreprise" className="hover:text-white">
              Entreprise
            </Link>

            <Dropdown label="Ressources" items={resources} />

            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </nav>
        </div>

        <Link
          href="/audit"
          className="hidden rounded-full bg-blue-600 px-5 py-3 text-sm font-black text-white transition hover:bg-blue-500 lg:inline-flex"
        >
          Demander un audit
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-white/10 p-3 lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-[73px] z-50 max-h-[calc(100vh-73px)] overflow-y-auto border-t border-white/10 bg-slate-950 px-6 py-5 lg:hidden">
          <div className="space-y-3 pb-8">
            <MobileLink href="/" label="Accueil" onClick={closeMenu} />

            <MobileAccordion
              title="Solutions"
              open={mobileSolutionsOpen}
              setOpen={setMobileSolutionsOpen}
              items={solutions}
              onNavigate={closeMenu}
            />

            <MobileLink href="/methode" label="Méthode" onClick={closeMenu} />

            <MobileLink
              href="/entreprise"
              label="Entreprise"
              onClick={closeMenu}
            />

            <MobileAccordion
              title="Ressources"
              open={mobileResourcesOpen}
              setOpen={setMobileResourcesOpen}
              items={resources}
              onNavigate={closeMenu}
            />

            <MobileLink href="/contact" label="Contact" onClick={closeMenu} />

            <Link
              href="/audit"
              onClick={closeMenu}
              className="mt-4 flex justify-center rounded-full bg-blue-600 px-5 py-4 font-black"
            >
              Demander un audit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Dropdown({ label, items }: { label: string; items: MenuItem[] }) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 font-bold text-slate-300 transition group-hover:text-white">
        {label}
        <ChevronDown size={16} />
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

function MobileAccordion({
  title,
  open,
  setOpen,
  items,
  onNavigate,
}: {
  title: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  items: MenuItem[];
  onNavigate: () => void;
}) {
  return (
    <div className="rounded-3xl bg-white/5">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-4 font-black"
      >
        {title}
        <ChevronDown
          size={18}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="space-y-2 px-3 pb-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onNavigate}
                className="flex gap-4 rounded-2xl bg-slate-900 p-4"
              >
                <div className="h-fit rounded-2xl bg-white/10 p-3 text-blue-300">
                  <Icon size={20} />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-black">{item.label}</p>

                    {!item.active && (
                      <span className="rounded-full bg-white/10 px-2 py-1 text-xs font-black text-slate-400">
                        Bientôt
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

function MobileLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block rounded-3xl bg-white/5 p-4 font-black"
    >
      {label}
    </Link>
  );
}