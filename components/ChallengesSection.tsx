"use client";

import { motion } from "framer-motion";

const challenges = [
  {
    label: "01",
    title: "Recruter devient difficile.",
    text: "Les profils techniques sont rares et les ateliers doivent préserver le temps disponible de leurs équipes.",
  },
  {
    label: "02",
    title: "Les délais augmentent.",
    text: "Chaque tâche secondaire ralentit le passage au véhicule suivant et réduit la fluidité de l’atelier.",
  },
  {
    label: "03",
    title: "Les équipes sont sollicitées.",
    text: "Diagnostic, réparation, contrôle, restitution : les techniciens sont souvent mobilisés au-delà de leur cœur de métier.",
  },
  {
    label: "04",
    title: "L’organisation devient un avantage.",
    text: "Les ateliers les plus performants sont ceux qui structurent mieux leurs flux et limitent les interruptions.",
  },
];

export default function ChallengesSection() {
  return (
    <section id="defis" className="bg-white px-6 py-28 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="font-bold text-blue-600">Les défis des ateliers</p>

          <h2 className="mt-4 text-5xl font-black tracking-tight text-slate-950 md:text-7xl">
            Vos techniciens sont précieux. Leur temps aussi.
          </h2>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
            Dans un contexte où les compétences sont difficiles à recruter,
            chaque minute passée sur une tâche annexe compte.
          </p>
        </div>

        <div className="mt-20 space-y-8">
          {challenges.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="grid gap-6 border-t border-slate-200 pt-8 md:grid-cols-[140px_1fr]"
            >
              <p className="text-5xl font-black text-blue-100">{item.label}</p>

              <div>
                <h3 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 rounded-[2.5rem] bg-slate-950 p-10 text-white md:p-14">
          <p className="text-xl font-black text-blue-300">
            C’est pour cela qu’ORS existe.
          </p>

          <p className="mt-4 max-w-3xl text-3xl font-black tracking-tight md:text-5xl">
            Optimiser l’organisation pour libérer la production.
          </p>
        </div>
      </div>
    </section>
  );
}