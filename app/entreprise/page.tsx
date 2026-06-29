import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import CallToAction from "@/components/ui/CallToAction";

const values = [
  {
    title: "Organisation",
    text: "Nous analysons avant d’agir.",
  },
  {
    title: "Performance",
    text: "Chaque minute doit servir le cœur de métier.",
  },
  {
    title: "Simplicité",
    text: "Une solution claire, lisible et adaptée au terrain.",
  },
  {
    title: "Confiance",
    text: "Une relation professionnelle, durable et suivie.",
  },
];

const timeline = [
  {
    year: "2026",
    title: "Création d’ORS",
    text: "Lancement d’une approche centrée sur l’optimisation opérationnelle.",
  },
  {
    year: "Aujourd’hui",
    title: "Automobile",
    text: "Première application concrète auprès des ateliers et concessions.",
  },
  {
    year: "Demain",
    title: "Nouveaux secteurs",
    text: "Extension progressive vers l’industrie, la logistique et les services.",
  },
];

export default function EntreprisePage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-950">
        <PageHero
          eyebrow="Entreprise"
          title="Nous croyons que l’organisation est devenue un avantage concurrentiel."
          description="Chez ORS, nous aidons les entreprises à identifier les tâches à faible valeur ajoutée afin que leurs équipes puissent se concentrer sur leur cœur de métier."
          primaryCta={{
            label: "Demander un audit",
            href: "/contact",
          }}
          secondaryCta={{
            label: "Découvrir la méthode",
            href: "/methode",
          }}
        />

        <section className="px-6 py-28 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <p className="max-w-5xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Nous ne vendons pas du nettoyage.
              <span className="block text-blue-600">
                Nous améliorons l’organisation.
              </span>
            </p>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-24 lg:px-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
            <SectionTitle
              eyebrow="Notre mission"
              title="Aider les entreprises à consacrer davantage de temps aux activités qui créent réellement de la valeur."
            />

            <p className="text-lg leading-8 text-slate-600">
              ORS intervient comme un partenaire d’organisation. Notre rôle est
              d’observer le fonctionnement réel d’une entreprise, d’identifier
              les tâches périphériques qui mobilisent inutilement les équipes,
              puis de proposer une solution claire et adaptée.
            </p>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Nos valeurs"
              title="Une méthode simple. Une exigence élevée."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <h3 className="text-2xl font-black">{value.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-24 text-white lg:px-20">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Notre ambition"
              title="Aujourd’hui dans l’automobile. Demain dans d’autres secteurs."
              light
            />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {timeline.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-7"
                >
                  <p className="text-sm font-black text-blue-300">
                    {item.year}
                  </p>

                  <h3 className="mt-4 text-2xl font-black">{item.title}</h3>

                  <p className="mt-4 leading-7 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CallToAction
          title="Vous souhaitez échanger avec ORS ?"
          description="Parlons de votre organisation et des tâches qui mobilisent vos équipes au quotidien."
          buttonLabel="Demander un audit"
          buttonHref="/contact"
        />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}