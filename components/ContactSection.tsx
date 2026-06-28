export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-slate-950 p-10 text-center text-white">
        <h2 className="text-4xl font-black tracking-tight">
          Prêt à récupérer du temps de production ?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Demandez un audit ORS et identifiez les tâches annexes qui ralentissent
          vos équipes.
        </p>

        <a
          href="mailto:contact@ors-solution.fr"
          className="mt-8 inline-flex rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-900/40"
        >
          Contacter ORS
        </a>
      </div>
    </section>
  );
}