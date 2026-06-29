import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import RoiCalculator from "@/components/RoiCalculator";
import MethodSection from "@/components/MethodSection";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  Car,
  CheckCircle2,
  Clock3,
  Gauge,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

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
        <PageHero
          eyebrow="Solution Automobile"
          title="Optimisation des ateliers automobiles."
          description="ORS accompagne les concessions automobiles dans l’identification et la prise en charge des tâches annexes afin que les techniciens restent concentrés sur leur cœur de métier."
          primaryCta={{
            label: "Lancer le diagnostic",
            href: "/audit",
          }}
          secondaryCta={{
            label: "Demander un audit",
            href: "/contact",
          }}
        />

        <section className="px-6 py-24 lg:px-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
            <SectionTitle
              eyebrow="Le problème"
              title="Un atelier ne perd pas du temps d’un seul coup."
            />

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
              <SectionTitle
                eyebrow="Tâches annexes"
                title="Ce qui semble secondaire finit par peser sur l’organisation."
                description="ORS aide à identifier les opérations pouvant être prises en charge autrement, sans perturber le fonctionnement quotidien de l’atelier."
              />
            </div>

            <div className="grid gap-3">
              {tasks.map((task) => (
                <div
                  key={task}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="shrink-0 text-green-600" size={20} />
                  <span className="font-bold text-slate-800">{task}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-20">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-slate-950 p-10 text-white md:p-14">
            <SectionTitle
              eyebrow="La solution ORS"
              title="Le technicien reste sur son métier. ORS prend le relais sur les tâches annexes."
              light
            />

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