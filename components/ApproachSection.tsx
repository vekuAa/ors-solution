"use client";

import { motion } from "framer-motion";
import { Search, ClipboardCheck, Users, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Observer",
    text: "Chaque entreprise est différente. Nous commençons toujours par comprendre votre fonctionnement avant de proposer une solution.",
  },
  {
    icon: ClipboardCheck,
    title: "Analyser",
    text: "Nous identifions les tâches annexes qui mobilisent vos équipes et évaluons leur impact sur votre organisation.",
  },
  {
    icon: Users,
    title: "Déployer",
    text: "Nous mettons en place une solution adaptée à votre activité, sans perturber votre fonctionnement quotidien.",
  },
  {
    icon: TrendingUp,
    title: "Accompagner",
    text: "Notre mission ne s'arrête pas au déploiement. Nous suivons la prestation et faisons évoluer l'organisation avec vous.",
  },
];

export default function ApproachSection() {
  return (
    <section className="bg-slate-50 px-6 py-28 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-bold text-blue-600">Notre approche</p>

          <h2 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
            Une méthode avant une prestation.
          </h2>

          <p className="mt-6 text-xl leading-9 text-slate-600">
            ORS ne propose pas une solution standard.
            Nous analysons votre organisation afin de construire une réponse
            réellement adaptée à votre entreprise.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="rounded-[2rem] bg-white p-8 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="text-blue-600" size={28} />
                </div>

                <h3 className="mt-6 text-3xl font-black">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {step.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 rounded-[2.5rem] bg-slate-950 p-10 text-white md:p-14">
          <p className="text-blue-300 font-bold">
            Notre conviction
          </p>

          <h3 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            Les meilleures organisations ne travaillent pas plus.
            Elles travaillent mieux.
          </h3>
        </div>
      </div>
    </section>
  );
}