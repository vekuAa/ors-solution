import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock3 } from "lucide-react";

const resources = [
  {
    type: "Guide",
    category: "Automobile",
    title: "Optimiser un atelier automobile",
    description:
      "Comprendre les leviers d’organisation pour améliorer la fluidité d’un atelier.",
    readingTime: "8 min",
    href: "/ressources/optimiser-atelier-automobile",
  },
  {
    type: "Guide",
    category: "Organisation",
    title: "Réduire les tâches annexes",
    description:
      "Identifier les opérations périphériques qui mobilisent inutilement les équipes.",
    readingTime: "6 min",
    href: "/ressources/reduire-taches-annexes",
  },
  {
    type: "Guide",
    category: "Performance",
    title: "Pourquoi externaliser certaines missions ?",
    description:
      "Comprendre comment l’externalisation peut améliorer l’organisation interne.",
    readingTime: "7 min",
    href: "/ressources/externaliser-missions",
  },
  {
    type: "Analyse",
    category: "Automobile",
    title: "Le coût caché du temps perdu en atelier",
    description:
      "Pourquoi quelques minutes répétées sur chaque véhicule deviennent un enjeu majeur.",
    readingTime: "9 min",
    href: "/ressources/cout-cache-temps-atelier",
  },
];

export default function RessourcesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-950">
        <section className="bg-slate-950 px-6 py-28 text-white lg:px-20">
          <div className="mx-auto max-w-7xl">
            <p className="font-bold text-blue-300">Ressources ORS</p>

            <h1 className="mt-5 max-w-5xl text-5xl font-black tracking-tight md:text-7xl">
              Guides, analyses et conseils pour mieux organiser vos opérations.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              Des contenus pensés pour les dirigeants, responsables d’atelier et
              entreprises qui souhaitent améliorer leur organisation.
            </p>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-wrap gap-3">
              {["Tous", "Automobile", "Organisation", "Performance"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 px-4 py-2 text-sm font-black text-slate-700"
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {resources.map((resource) => (
                <Link
                  key={resource.title}
                  href={resource.href}
                  className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-600">
                      <BookOpen size={16} />
                      {resource.type}
                    </div>

                    <div className="inline-flex items-center gap-2 text-sm font-bold text-slate-500">
                      <Clock3 size={16} />
                      {resource.readingTime}
                    </div>
                  </div>

                  <p className="mt-8 text-sm font-black uppercase tracking-wide text-blue-600">
                    {resource.category}
                  </p>

                  <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                    {resource.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {resource.description}
                  </p>

                  <div className="mt-8 inline-flex items-center gap-2 font-black text-blue-600">
                    Lire le guide
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}