"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, ShieldCheck } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="overflow-hidden rounded-[2.5rem] bg-slate-950 text-white shadow-2xl"
        >
          <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:p-16">
            <div>
              <p className="font-bold text-blue-300">Audit ORS</p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
                Parlons de votre organisation atelier.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                ORS analyse votre fonctionnement, identifie les tâches annexes
                qui ralentissent vos équipes et vous propose une organisation
                adaptée à votre réalité terrain.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:contact@ors-solution.fr?subject=Demande d’audit ORS"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-black text-white transition hover:scale-105 hover:bg-blue-500"
                >
                  Demander un audit
                  <ArrowRight size={18} />
                </a>

                <a
                  href="mailto:contact@ors-solution.fr"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 font-black text-white transition hover:bg-white/10"
                >
                  <Mail size={18} />
                  contact@ors-solution.fr
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-6 text-slate-950">
              <div className="space-y-5">
                <Info
                  icon={<ShieldCheck size={22} />}
                  title="Premier échange"
                  text="Compréhension de votre atelier, de vos volumes et de vos contraintes."
                />

                <Info
                  icon={<Phone size={22} />}
                  title="Audit simple"
                  text="Analyse des tâches annexes et estimation du temps mobilisé."
                />

                <Info
                  icon={<ArrowRight size={22} />}
                  title="Proposition adaptée"
                  text="Mise en place possible d’une solution ORS selon vos besoins."
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Info({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 rounded-3xl bg-slate-50 p-5">
      <div className="h-fit rounded-2xl bg-blue-50 p-3 text-blue-600">
        {icon}
      </div>

      <div>
        <p className="font-black">{title}</p>
        <p className="mt-2 leading-7 text-slate-600">{text}</p>
      </div>
    </div>
  );
}