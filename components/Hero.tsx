"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Clock3, Gauge } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white lg:px-20">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <p className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-blue-200">
            ORS — Optimisation opérationnelle
          </p>

          <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Optimiser
            <span className="block text-blue-300">l’organisation.</span>
            Libérer
            <span className="block text-blue-300">la production.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            ORS accompagne les entreprises dans l’identification des tâches à
            faible valeur ajoutée afin que leurs équipes puissent se concentrer
            sur leur cœur de métier.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-black text-white transition hover:scale-105 hover:bg-blue-500"
            >
              Demander un audit
              <ArrowRight size={18} />
            </a>

            <a
              href="#methode"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-black text-white transition hover:bg-white/10"
            >
              Découvrir notre méthode
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <HeroPoint icon={<Clock3 size={20} />} text="Temps mieux utilisé" />
            <HeroPoint icon={<Gauge size={20} />} text="Flux atelier optimisé" />
            <HeroPoint icon={<Building2 size={20} />} text="Vision multisecteur" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.75 }}
          className="rounded-[2.5rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur"
        >
          <div className="rounded-[2rem] bg-white p-6 text-slate-950">
            <p className="font-bold text-blue-600">Méthode ORS</p>

            <div className="mt-6 space-y-4">
              <FlowStep number="01" title="Identifier" text="Les tâches annexes qui mobilisent inutilement vos équipes." />
              <FlowStep number="02" title="Réorganiser" text="Les flux pour recentrer les équipes sur leur cœur de métier." />
              <FlowStep number="03" title="Déployer" text="Une solution adaptée à votre organisation terrain." />
              <FlowStep number="04" title="Suivre" text="La prestation pour garantir stabilité, qualité et amélioration continue." />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroPoint({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4">
      <div className="text-blue-300">{icon}</div>
      <p className="text-sm font-bold text-slate-200">{text}</p>
    </div>
  );
}

function FlowStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">
          {number}
        </div>

        <div>
          <p className="font-black text-slate-950">{title}</p>
          <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
        </div>
      </div>
    </div>
  );
}