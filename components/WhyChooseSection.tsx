"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  Gauge,
  Handshake,
  ShieldCheck,
  UserCheck,
  Wrench,
} from "lucide-react";

const reasons = [
  {
    icon: Clock3,
    title: "Temps atelier optimisé",
    text: "Les tâches annexes sont prises en charge afin que vos techniciens restent concentrés sur les opérations à forte valeur.",
  },
  {
    icon: Wrench,
    title: "Techniciens sur leur métier",
    text: "Diagnostic, réparation, contrôle : vos équipes restent mobilisées sur leur cœur de compétence.",
  },
  {
    icon: Gauge,
    title: "Meilleure fluidité",
    text: "L’objectif est d’améliorer l’enchaînement des véhicules et de réduire les temps morts dans l’organisation.",
  },
  {
    icon: UserCheck,
    title: "Prestataire dédié",
    text: "ORS met en place un intervenant adapté à vos besoins, avec une organisation claire sur site.",
  },
  {
    icon: ShieldCheck,
    title: "Suivi qualité",
    text: "La prestation est suivie pour garantir une exécution régulière, stable et conforme aux attentes.",
  },
  {
    icon: Handshake,
    title: "Solution flexible",
    text: "Chaque mission est adaptée au fonctionnement réel de votre concession ou de votre atelier.",
  },
];

export default function WhyChooseSection() {
  return (
    <section id="pourquoi-ors" className="bg-white px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-bold text-blue-600">Pourquoi ORS ?</p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Une solution pensée pour les ateliers, pas seulement pour le
            nettoyage.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            ORS intervient comme un levier d’organisation : moins de temps perdu
            sur les tâches annexes, plus de concentration sur la production.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-blue-600 p-3 text-white">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-black text-slate-950">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">{reason.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}