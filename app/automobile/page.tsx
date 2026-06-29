import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import RoiCalculator from "@/components/RoiCalculator";
import MethodSection from "@/components/MethodSection";
import ContactSection from "@/components/ContactSection";
import {
  ArrowRight,
  Car,
  CheckCircle2,
  Clock3,
  Gauge,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const tasks = [
  "Déplacement véhicule",
  "Préparation avant restitution",
  "Nettoyage léger ou approfondi",
  "Contrôle visuel",
  "Remise en état simple",
  "Gestion des flux atelier",
];

const benefits = [
  "Techniciens recentrés sur leur cœur de métier",
  "Organisation atelier plus fluide",
  "Restitution véhicule mieux valorisée",
  "Solution adaptée au fonctionnement réel du site",
];

export default function AutomobilePage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-950">
        <section className="bg-slate-950 px-6 py-28 text-white lg:px-20">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="font-bold text-blue-300">Solution Automobile</p>

              <h1 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">
                Optimisation des ateliers automobiles.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                ORS accompagne les concessions automobiles dans
                l’identification et la prise en charge des tâches annexes afin
                que les techniciens restent concentrés sur leur cœur de métier.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/audit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-black text-white hover:bg-blue-500"
                >
                  Lancer le diagnostic
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-white/20 px-7 py-4 text-center font-black text-white hover:bg-white/10"
                >
                  Demander un audit
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl">
              <p className="text-sm font-bold text-blue-300">En atelier</p>

              <h2 className="mt-4 text-4xl font-black">
                Les petites tâches créent de grandes pertes de temps.
              </h2>

              <div className="mt-8 grid gap-4">
                <MiniLine icon={<Wrench />} text="Diagnostic et réparation" />
                <MiniLine icon={<ShieldCheck />} text="Contrôle technique" />
                <MiniLine icon={<Sparkles />} text="Tâches annexes" />
                <MiniLine icon={<Car />} text="Restitution client" />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
            <div>
              <p className="font-bold text-blue-600">Le problème</p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Un atelier ne perd pas du temps d’un seul coup.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Les pertes se créent par accumulation : déplacements,
                préparation, nettoyage, contrôle visuel, restitution. Chaque
                opération semble courte, mais leur addition pèse sur la capacité
                réelle de l’atelier.
              </p>

              <p>
                Dans un contexte où les compétences techniques sont difficiles à
                recruter, l’enjeu n’est pas de demander aux équipes de travailler
                plus vite, mais de mieux organiser leur temps.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-14 grid max-w-7xl gap-6 md:grid-cols-3">
            <Card
              icon={<Clock3 />}
              title="Temps mobilisé"
              text="Les techniciens peuvent rester bloqués sur des tâches qui ne relèvent pas directement de la production."
            />

            <Card
              icon={<Gauge />}
              title="Flux ralenti"
              text="Le véhicule suivant attend pendant que l’équipe termine les opérations annexes."
            />

            <Card
              icon={<Car />}
              title="Restitution à valoriser"
              text="L’expérience client reste importante, mais elle ne doit pas bloquer le cœur de métier atelier."
            />
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-24 lg:px-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
            <div>
              <p className="font-bold text-blue-600">Tâches annexes</p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Ce qui semble secondaire finit par peser sur l’organisation.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                ORS aide à identifier les opérations pouvant être prises en
                charge autrement, sans perturber le fonctionnement quotidien de
                l’atelier.
              </p>
            </div>

            <div className="grid gap-3">
              {tasks.map((task) => (
                <div
                  key={task}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="text-green-600" size={20} />
                  <span className="font-bold text-slate-800">{task}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-20">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-slate-950 p-10 text-white md:p-14">
            <p className="font-bold text-blue-300">La solution ORS</p>

            <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-5xl">
              Le technicien reste sur son métier. ORS prend le relais sur les
              tâches annexes.
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 font-bold text-slate-200"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </section>

        <MethodSection />
        <RoiCalculator />
        <ContactSection />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

function MiniLine({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">
      <div className="text-blue-300">{icon}</div>
      <p className="font-bold">{text}</p>
    </div>
  );
}

function Card({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
      <div className="mb-6 inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
        {icon}
      </div>

      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-4 leading-7 text-slate-600">{text}</p>
    </div>
  );
}