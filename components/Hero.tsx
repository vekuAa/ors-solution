"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock3, TrendingUp, Users } from "lucide-react";

type SmallMetricProps = {
  icon: ReactNode;
  title: string;
  value: string;
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-100 opacity-60 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-20 px-6 py-28 lg:grid-cols-2 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
            Optimisation opérationnelle
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-slate-950 md:text-7xl">
            Libérez plusieurs heures
            <span className="block text-blue-600">de production.</span>
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">
            ORS permet aux concessions automobiles de récupérer du temps de
            production en externalisant les tâches à faible valeur ajoutée.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-4 font-bold text-white transition hover:scale-105"
            >
              Demander un audit
              <ArrowRight size={18} />
            </a>

            <a
              href="#diagnostic"
              className="rounded-full border border-slate-300 px-7 py-4 font-bold hover:bg-slate-100"
            >
              Lancer mon diagnostic
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            <SmallMetric
              icon={<Clock3 size={18} />}
              title="Temps récupéré"
              value="Estimation selon votre atelier"
            />

            <SmallMetric
              icon={<TrendingUp size={18} />}
              title="Performance"
              value="Capacité atelier optimisée"
            />

            <SmallMetric
              icon={<Users size={18} />}
              title="Sans recrutement"
              value="Prestataires dédiés"
            />
          </div>

          <p className="mt-6 text-xs text-slate-500">
            * Les gains dépendent de l’organisation de l’atelier et des données
            saisies dans notre diagnostic.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-2xl">
            <p className="text-sm font-bold text-blue-600">
              Simulation atelier
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
              24 véhicules par jour
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Si chaque véhicule mobilise 20 minutes sur des tâches annexes,
              cela représente une journée complète de travail récupérable.
            </p>

            <div className="mt-8 rounded-3xl bg-slate-50 p-6">
              <div className="flex items-center justify-between gap-6 border-b border-slate-200 pb-5">
                <div>
                  <p className="font-black text-slate-950">
                    Temps annexe estimé
                  </p>
                  <p className="text-sm text-slate-500">24 × 20 minutes</p>
                </div>

                <p className="text-4xl font-black text-blue-600">8 h</p>
              </div>

              <div className="flex items-center justify-between gap-6 border-b border-slate-200 py-5">
                <div>
                  <p className="font-black text-slate-950">Avec ORS</p>
                  <p className="text-sm text-slate-500">
                    Le technicien passe au véhicule suivant
                  </p>
                </div>

                <p className="rounded-full bg-green-100 px-4 py-2 font-black text-green-700">
                  Optimisé
                </p>
              </div>

              <div className="pt-5">
                <p className="font-black text-slate-950">Forfait Premium</p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Une concession peut proposer un service Premium à 10 € afin
                  de contribuer au financement de la prestation ORS.
                </p>
              </div>
            </div>

            <p className="mt-6 text-xs leading-6 text-slate-500">
              Exemple indicatif. Les résultats réels dépendent du volume, de
              l’organisation atelier et du temps réellement consacré aux tâches
              annexes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SmallMetric({ icon, title, value }: SmallMetricProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="rounded-xl bg-blue-100 p-2 text-blue-600">{icon}</div>

      <div>
        <p className="text-sm font-bold">{title}</p>
        <p className="text-sm text-slate-500">{value}</p>
      </div>
    </div>
  );
}