import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ContactSection from "@/components/ContactSection";
import { ArrowRight, ClipboardCheck, Search, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Observer",
    text: "Nous commençons par comprendre votre fonctionnement réel : volumes, contraintes, équipes, flux et tâches annexes.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Analyser",
    text: "Nous identifions les tâches à faible valeur ajoutée qui mobilisent vos équipes et ralentissent l’organisation.",
  },
  {
    icon: Users,
    number: "03",
    title: "Déployer",
    text: "Nous proposons une solution adaptée au terrain, avec un prestataire dédié lorsque cela répond au besoin.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Suivre",
    text: "Nous suivons la prestation et ajustons l’organisation pour maintenir une exécution stable et efficace.",
  },
];

export default function MethodePage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-950">
        <section className="bg-slate-950 px-6 py-28 text-white lg:px-20">
          <div className="mx-auto max-w-7xl">
            <p className="font-bold text-blue-300">Méthode ORS</p>

            <h1 className="mt-5 max-w-5xl text-5xl font-black tracking-tight md:text-7xl">
              Une méthode avant une prestation.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              ORS analyse votre organisation avant de proposer une solution.
              L’objectif : identifier les tâches annexes qui mobilisent vos
              équipes et libérer du temps pour les activités à forte valeur.
            </p>

            <Link
              href="/audit"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-black text-white hover:bg-blue-500"
            >
              Lancer le diagnostic
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Pourquoi commencer par un audit ?
            </h2>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Chaque organisation est différente. Deux ateliers peuvent traiter
                le même volume de véhicules, mais fonctionner avec des équipes,
                des flux et des contraintes totalement différents.
              </p>

              <p>
                C’est pourquoi ORS ne propose pas une solution standard. Nous
                commençons par comprendre votre fonctionnement réel, puis nous
                identifions les tâches qui peuvent être prises en charge autrement.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-24 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <p className="font-bold text-blue-600">Les 4 étapes</p>

            <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-5xl">
              Observer, analyser, déployer, suivre.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="rounded-2xl bg-blue-600 p-3 text-white">
                        <Icon size={24} />
                      </div>

                      <span className="text-4xl font-black text-slate-200">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-8 text-2xl font-black">{step.title}</h3>

                    <p className="mt-4 leading-7 text-slate-600">{step.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-20">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-slate-950 p-10 text-white md:p-14">
            <p className="font-bold text-blue-300">Notre conviction</p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Les meilleures organisations ne travaillent pas plus. Elles
              travaillent mieux.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              ORS aide les entreprises à structurer leurs flux pour que les
              équipes puissent se concentrer sur leur cœur de métier.
            </p>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}