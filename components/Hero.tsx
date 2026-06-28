"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock3, TrendingUp, Users } from "lucide-react";

type SmallMetricProps = {
  icon: ReactNode;
  title: string;
  value: string;
};

type ProgressProps = {
  title: string;
  value: number;
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
              value="Jusqu’à plusieurs heures / semaine*"
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
            saisies dans notre simulateur.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-500">
                  Temps récupérable
                </p>

                <h2 className="mt-2 text-5xl font-black text-blue-600">8 h</h2>
              </div>

              <div className="rounded-full bg-green-100 px-4 py-2 font-bold text-green-700">
                + Productivité
              </div>
            </div>

            <div className="mt-10 space-y-5">
              <Progress title="Production" value={92} />
              <Progress title="Temps perdu" value={28} />
              <Progress title="Rentabilité" value={87} />
            </div>

            <div className="mt-10 rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-sm text-slate-400">Forfait Premium</p>

              <p className="mt-2 text-3xl font-black">Jusqu’à 10 €</p>

              <p className="mt-2 text-slate-400">
                Possibilité de contribuer au financement de la prestation selon
                la politique commerciale de la concession.
              </p>
            </div>
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

function Progress({ title, value }: ProgressProps) {
  return (
    <div>
      <div className="mb-2 flex justify-between">
        <span className="font-semibold">{title}</span>
        <span className="font-bold">{value}%</span>
      </div>

      <div className="h-3 rounded-full bg-slate-100">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1 }}
          className="h-3 rounded-full bg-blue-600"
        />
      </div>
    </div>
  );
}