"use client";

import { motion } from "framer-motion";
import { Car, Factory, Package, Building2 } from "lucide-react";

const sectors = [
  {
    icon: Car,
    title: "Automobile",
    status: "Expertise actuelle",
    text: "Concessions, ateliers après-vente, préparation et restitution véhicule.",
    active: true,
  },
  {
    icon: Factory,
    title: "Industrie",
    status: "Prochainement",
    text: "Externalisation de tâches périphériques pour fluidifier la production.",
    active: false,
  },
  {
    icon: Package,
    title: "Logistique",
    status: "Prochainement",
    text: "Organisation, manutention légère et tâches annexes opérationnelles.",
    active: false,
  },
  {
    icon: Building2,
    title: "Services",
    status: "Prochainement",
    text: "Accompagnement des entreprises sur les tâches à faible valeur ajoutée.",
    active: false,
  },
];

export default function SectorsSection() {
  return (
    <section id="secteurs" className="bg-slate-950 px-6 py-24 text-white lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-bold text-blue-300">Secteurs d’intervention</p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            ORS commence par l’automobile, avec une vision plus large.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Notre ambition est d’aider les entreprises à identifier et prendre
            en charge les tâches à faible valeur ajoutée, quel que soit leur
            secteur d’activité.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;

            return (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.07, duration: 0.45 }}
                className={`rounded-[2rem] border p-7 ${
                  sector.active
                    ? "border-blue-400 bg-blue-600"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <div
                  className={`mb-6 inline-flex rounded-2xl p-3 ${
                    sector.active
                      ? "bg-white text-blue-600"
                      : "bg-white/10 text-blue-300"
                  }`}
                >
                  <Icon size={24} />
                </div>

                <div className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-black">
                  {sector.status}
                </div>

                <h3 className="text-2xl font-black">{sector.title}</h3>

                <p
                  className={`mt-4 leading-7 ${
                    sector.active ? "text-blue-50" : "text-slate-400"
                  }`}
                >
                  {sector.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}