"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Search, UserCheck, BarChart3, RefreshCcw } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Audit de votre atelier",
    text: "Nous échangeons avec vos équipes pour comprendre votre organisation, vos volumes et vos contraintes terrain.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Analyse des tâches annexes",
    text: "Nous identifions les opérations qui ralentissent vos techniciens : nettoyage, préparation, restitution ou tâches périphériques.",
  },
  {
    icon: UserCheck,
    number: "03",
    title: "Mise en place du prestataire",
    text: "ORS sélectionne un intervenant adapté à votre besoin et organise le déploiement directement sur site.",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Suivi qualité",
    text: "Nous suivons la prestation, les retours terrain et la régularité d’exécution pour garantir un service stable.",
  },
  {
    icon: RefreshCcw,
    number: "05",
    title: "Optimisation continue",
    text: "Nous ajustons l’organisation si nécessaire afin d’améliorer progressivement l’efficacité de l’intervention.",
  },
];

export default function MethodSection() {
  return (
    <section id="methode" className="bg-white px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-bold text-blue-600">Notre méthode</p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Une mise en place simple, structurée et suivie.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            ORS ne se limite pas à placer un prestataire. Nous analysons votre
            organisation, identifions les tâches à faible valeur ajoutée et
            mettons en place une solution adaptée à votre atelier.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="relative rounded-[2rem] border border-slate-200 bg-slate-50 p-6"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="rounded-2xl bg-blue-600 p-3 text-white">
                    <Icon size={22} />
                  </div>

                  <span className="text-4xl font-black text-slate-200">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">{step.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}