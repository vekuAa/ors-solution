"use client";

import { motion } from "framer-motion";
import { BadgeEuro, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

const points = [
  {
    icon: BadgeEuro,
    title: "Un service valorisable",
    text: "La concession peut proposer un forfait nettoyage Premium à ses clients selon sa propre politique commerciale.",
  },
  {
    icon: Sparkles,
    title: "Une restitution plus qualitative",
    text: "Le véhicule est rendu dans de meilleures conditions, ce qui améliore l’expérience client au moment de la restitution.",
  },
  {
    icon: ShieldCheck,
    title: "Une liberté commerciale totale",
    text: "Le forfait peut être facturé directement, intégré dans un forfait atelier ou inclus dans une offre globale.",
  },
];

export default function PremiumSection() {
  return (
    <section id="premium" className="bg-slate-50 px-6 py-24 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="font-bold text-blue-600">Forfait Premium</p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Une prestation qui peut contribuer à se financer.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Le forfait Premium permet à la concession de valoriser la
            restitution du véhicule tout en contribuant au financement de la
            prestation ORS.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            ORS ne fixe pas la politique commerciale de la concession. Chaque
            établissement choisit librement la manière de présenter, facturer ou
            intégrer ce service.
          </p>

          <div className="mt-8 grid gap-4">
            {points.map((point, index) => {
              const Icon = point.icon;

              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className="flex gap-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
                >
                  <div className="h-fit rounded-2xl bg-blue-50 p-3 text-blue-600">
                    <Icon size={22} />
                  </div>

                  <div>
                    <p className="font-black text-slate-950">{point.title}</p>
                    <p className="mt-2 leading-7 text-slate-600">
                      {point.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl"
        >
          <p className="font-bold text-blue-300">Exemple de simulation</p>

          <h3 className="mt-4 text-4xl font-black tracking-tight">
            10 € par véhicule
          </h3>

          <p className="mt-4 leading-7 text-slate-300">
            Une concession traitant 24 véhicules par jour peut simuler un
            potentiel Premium afin d’estimer la contribution possible au coût
            de la prestation.
          </p>

          <div className="mt-8 space-y-4">
            <Line label="Véhicules / jour" value="24" />
            <Line label="Forfait Premium" value="10 €" />
            <Line label="Jours travaillés" value="21" />
          </div>

          <div className="mt-8 rounded-3xl bg-white p-6 text-slate-950">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-green-600" size={24} />
              <p className="font-black">Potentiel mensuel estimé</p>
            </div>

            <p className="mt-4 text-5xl font-black text-blue-600">5 040 €</p>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Calcul indicatif : 24 véhicules × 10 € × 21 jours. Le choix de
              facturation appartient à la concession.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Line({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4">
      <span className="text-slate-300">{label}</span>
      <span className="font-black">{value}</span>
    </div>
  );
}