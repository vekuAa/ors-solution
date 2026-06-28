import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoiCalculator from "@/components/RoiCalculator";
import MethodSection from "@/components/MethodSection";
import ContactSection from "@/components/ContactSection";
import {
  ArrowRight,
  Car,
  Clock3,
  Gauge,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

export default function AutomobilePage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-950">
        <section className="px-6 py-24 lg:px-20">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="font-bold text-blue-600">Solution Automobile</p>

              <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">
                Optimisation des ateliers automobiles.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                ORS accompagne les concessions automobiles dans l’identification
                et la prise en charge des tâches annexes afin que les techniciens
                restent concentrés sur leur cœur de métier.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 font-black text-white"
                >
                  Demander un audit
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#diagnostic"
                  className="rounded-full border border-slate-300 px-7 py-4 text-center font-black"
                >
                  Lancer le diagnostic
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl">
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

        <section className="bg-slate-50 px-6 py-24 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="font-bold text-blue-600">Le problème</p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Un atelier ne perd pas du temps d’un seul coup.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Les pertes se créent par accumulation : déplacements,
                préparation, nettoyage, contrôle visuel, restitution. Chaque
                opération semble courte, mais leur addition pèse sur la capacité
                réelle de l’atelier.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Card
                icon={<Clock3 />}
                title="Temps mobilisé"
                text="Les techniciens restent parfois bloqués sur des tâches qui ne relèvent pas directement de la production."
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
          </div>
        </section>

        <MethodSection />
        <RoiCalculator />
        <ContactSection />
      </main>

      <Footer />
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