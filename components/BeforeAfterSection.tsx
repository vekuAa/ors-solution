"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock3, Wrench } from "lucide-react";

const beforeSteps = [
  "Diagnostic",
  "Réparation",
  "Contrôle",
  "Nettoyage par le mécanicien",
  "Véhicule suivant seulement après",
];

const afterSteps = [
  "Diagnostic",
  "Réparation",
  "Contrôle",
  "Le mécanicien passe au véhicule suivant",
  "ORS nettoie en parallèle",
];

export default function BeforeAfterSection() {
  return (
    <section className="bg-white px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-bold text-blue-600">Avant / Après ORS</p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Le mécanicien reste sur son métier.
            <br />
            ORS gère le reste.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            L’objectif est simple : limiter le temps passé sur les tâches
            annexes afin que les équipes atelier puissent enchaîner plus
            rapidement les opérations à forte valeur.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <TimelineCard
            title="Sans ORS"
            subtitle="Le technicien reste mobilisé jusqu’à la fin du nettoyage."
            steps={beforeSteps}
            variant="before"
          />

          <TimelineCard
            title="Avec ORS"
            subtitle="Le technicien repart produire pendant qu’ORS prend le relais."
            steps={afterSteps}
            variant="after"
          />
        </div>

        <div className="mt-10 rounded-[2rem] bg-slate-950 p-8 text-white">
          <div className="grid gap-8 md:grid-cols-3">
            <MiniStat
              icon={<Clock3 size={22} />}
              value="Temps récupéré"
              label="Les techniciens passent plus vite au véhicule suivant."
            />

            <MiniStat
              icon={<Wrench size={22} />}
              value="Cœur de métier"
              label="Le temps atelier est concentré sur la réparation."
            />

            <MiniStat
              icon={<CheckCircle2 size={22} />}
              value="Expérience client"
              label="La restitution reste propre, claire et valorisée."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  title,
  subtitle,
  steps,
  variant,
}: {
  title: string;
  subtitle: string;
  steps: string[];
  variant: "before" | "after";
}) {
  const isAfter = variant === "after";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`rounded-[2rem] border p-8 ${
        isAfter
          ? "border-blue-200 bg-blue-50"
          : "border-slate-200 bg-slate-50"
      }`}
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="text-3xl font-black text-slate-950">{title}</h3>
          <p className="mt-3 leading-7 text-slate-600">{subtitle}</p>
        </div>

        <div
          className={`rounded-full px-4 py-2 text-sm font-black ${
            isAfter
              ? "bg-blue-600 text-white"
              : "bg-white text-slate-700 ring-1 ring-slate-200"
          }`}
        >
          {isAfter ? "Optimisé" : "Classique"}
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {steps.map((step, index) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: isAfter ? 24 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-black ${
                isAfter
                  ? "bg-blue-600 text-white"
                  : "bg-slate-200 text-slate-700"
              }`}
            >
              {index + 1}
            </div>

            <p className="font-bold text-slate-900">{step}</p>

            {index < steps.length - 1 && (
              <ArrowRight className="ml-auto text-slate-400" size={18} />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function MiniStat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div>
      <div className="mb-4 inline-flex rounded-2xl bg-white/10 p-3 text-blue-300">
        {icon}
      </div>

      <p className="text-xl font-black">{value}</p>
      <p className="mt-2 leading-7 text-slate-400">{label}</p>
    </div>
  );
}