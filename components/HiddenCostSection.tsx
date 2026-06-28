"use client";

import { motion } from "framer-motion";
import { Car, ClipboardList, MoveRight, PackageCheck, Sparkles } from "lucide-react";

const tasks = [
  {
    icon: Car,
    title: "Déplacement véhicule",
    text: "Entrée, sortie, repositionnement ou attente entre deux étapes.",
  },
  {
    icon: Sparkles,
    title: "Tâches de préparation",
    text: "Nettoyage, remise en état légère ou préparation avant restitution.",
  },
  {
    icon: ClipboardList,
    title: "Restitution client",
    text: "Contrôle visuel, vérification rapide et présentation du véhicule.",
  },
  {
    icon: PackageCheck,
    title: "Tâches périphériques",
    text: "Petites opérations annexes qui coupent le rythme de production.",
  },
];

export default function HiddenCostSection() {
  return (
    <section id="probleme" className="bg-slate-50 px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-bold text-blue-600">Le coût caché</p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Les pertes de temps ne sont pas toujours visibles.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Dans un atelier, certaines tâches semblent courtes lorsqu’elles sont
            prises individuellement. Mais additionnées sur une journée, elles
            peuvent représenter plusieurs heures de production mobilisées.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tasks.map((task, index) => {
            const Icon = task.icon;

            return (
              <motion.div
                key={task.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.07, duration: 0.45 }}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-black text-slate-950">
                  {task.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">{task.text}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 rounded-[2rem] bg-slate-950 p-8 text-white">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
            <div>
              <p className="text-sm font-bold text-slate-400">
                Organisation classique
              </p>
              <h3 className="mt-3 text-3xl font-black">
                Le technicien termine aussi les tâches annexes.
              </h3>
            </div>

            <MoveRight className="hidden text-blue-300 lg:block" size={40} />

            <div>
              <p className="text-sm font-bold text-blue-300">Avec ORS</p>
              <h3 className="mt-3 text-3xl font-black">
                Ces tâches sont prises en charge pour libérer la production.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}