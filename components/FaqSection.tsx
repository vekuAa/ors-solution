const faqs = [
  {
    q: "ORS est-elle une société de nettoyage automobile ?",
    a: "ORS est avant tout une solution d’optimisation opérationnelle. Le nettoyage automobile est aujourd’hui notre premier levier concret pour libérer du temps aux ateliers.",
  },
  {
    q: "Le forfait Premium est-il obligatoire ?",
    a: "Non. Il s’agit d’une option commerciale que chaque concession peut choisir de proposer ou non à ses clients.",
  },
  {
    q: "Travaillez-vous uniquement avec les concessions automobiles ?",
    a: "Aujourd’hui, ORS intervient principalement dans l’automobile. À terme, l’objectif est d’aider les entreprises dans d’autres secteurs à externaliser certaines tâches à faible valeur ajoutée.",
  },
  {
    q: "Comment commence une mission ORS ?",
    a: "Nous échangeons avec la concession, analysons l’organisation actuelle, identifions le temps récupérable, puis proposons une mise en place adaptée.",
  },
];

export default function FaqSection() {
  return (
   <section id="faq" className="bg-slate-50 px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl font-black tracking-tight">
          Questions fréquentes
        </h2>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <summary className="cursor-pointer text-lg font-black">
                {faq.q}
              </summary>
              <p className="mt-4 leading-7 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}