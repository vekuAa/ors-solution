const problems = [
  ["⏱️", "Temps perdu", "Les techniciens consacrent une partie de leur journée à des tâches annexes."],
  ["👨‍🔧", "Recrutement difficile", "Trouver de bons profils devient long, coûteux et incertain."],
  ["📉", "Capacité limitée", "Chaque minute non productive réduit la capacité réelle de l’atelier."],
  ["💶", "Rentabilité", "ORS permet de transformer du temps perdu en potentiel de production."],
];

export default function ProblemSection() {
  return (
    <section className="bg-slate-50 px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-black tracking-tight md:text-5xl">
          Votre problème n’est pas le nettoyage.
          <br />
          <span className="text-blue-600">Le problème, c’est le temps.</span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {problems.map(([emoji, title, text]) => (
            <div key={title} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <div className="text-4xl">{emoji}</div>
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}