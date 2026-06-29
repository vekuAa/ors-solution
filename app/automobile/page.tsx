import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import RoiCalculator from "@/components/RoiCalculator";
import MethodSection from "@/components/MethodSection";
import ContactSection from "@/components/ContactSection";
import VoVnDiagnostic from "@/components/VoVnDiagnostic";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  Car,
  CheckCircle2,
  Clock3,
  Gauge,
  ShieldCheck,
} from "lucide-react";

const tasks = [
  "Sortie atelier après intervention",
  "Préparation VO — véhicules d’occasion",
  "Préparation VN — véhicules neufs",
  "Relavage avant livraison ou restitution",
  "Préparation esthétique légère",
  "Gestion des flux de véhicules sur site",
];

const benefits = [
  "Techniciens recentrés sur leur cœur de métier",
  "Organisation atelier plus fluide",
  "Préparation VO/VN mieux structurée",
  "Restitution et livraison véhicule mieux valorisées",
];

export default function AutomobilePage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-950">
        <PageHero
          eyebrow="Solution Automobile"
          title="Optimisation des ateliers, VO et VN."
          description="ORS accompagne les concessions automobiles dans la prise en charge des tâches annexes liées à l’après-vente, à la préparation VO/VN, au relavage et à la restitution client."
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
              title="Un site automobile ne perd pas du temps d’un seul coup."
            />

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Les pertes se créent par accumulation : déplacements,
                préparation, nettoyage, contrôle visuel, restitution, livraison
                VO/VN ou relavage. Chaque opération semble courte, mais leur
                addition pèse sur la capacité réelle du site.
              </p>

              <p>
                Dans un contexte où les compétences techniques et opérationnelles
                sont difficiles à recruter, l’enjeu n’est pas de demander aux
                équipes de travailler plus vite, mais de mieux organiser leur
                temps.
              </p>

              <p>
                Ces enjeux ne concernent pas uniquement l’après-vente. Ils
                existent aussi sur la préparation VO/VN, les livraisons, les
                relavages et les flux de véhicules entre les différents services
                de la concession.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-14 grid max-w-7xl gap-6 md:grid-cols-3">
            <Card
              icon={<Clock3 />}
              title="Temps mobilisé"
              text="Les équipes peuvent rester bloquées sur des tâches qui ne relèvent pas directement de leur cœur de métier."
            />

            <Card
              icon={<Gauge />}
              title="Flux ralenti"
              text="Le véhicule suivant attend pendant que les opérations annexes sont terminées."
            />

            <Card
              icon={<Car />}
              title="Restitution à valoriser"
              text="La qualité de restitution ou de livraison reste essentielle, mais elle doit être organisée efficacement."
            />
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-24 lg:px-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrow="Après-vente, VO et VN"
                title="ORS accompagne les concessions sur plusieurs besoins opérationnels."
                description="Nos interventions peuvent concerner la sortie atelier, la restitution client, la préparation de véhicules d’occasion, la préparation de véhicules neufs, le relavage ou la préparation avant livraison."
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
              title="Une organisation plus claire pour l’atelier, le VO et le VN."
              description="ORS permet de structurer la prise en charge des tâches annexes afin que chaque équipe reste concentrée sur son rôle principal."
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
        <VoVnDiagnostic />
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