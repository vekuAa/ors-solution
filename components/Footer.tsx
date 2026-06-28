export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-2xl font-black">ORS</p>
          <p className="mt-4 max-w-md leading-7 text-slate-600">
            Optimisation opérationnelle pour entreprises. Nous aidons les équipes
            à se concentrer sur les tâches qui créent réellement de la valeur.
          </p>
        </div>

        <div>
          <p className="font-black">Navigation</p>
          <div className="mt-4 flex flex-col gap-3 text-slate-600">
            <a href="#roi">Calculateur ROI</a>
            <a href="#premium">Forfait Premium</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div>
          <p className="font-black">Contact</p>
          <div className="mt-4 flex flex-col gap-3 text-slate-600">
            <a href="mailto:contact@ors-solution.fr">
              contact@ors-solution.fr
            </a>
            <span>France</span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-200 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} ORS. Tous droits réservés.
      </div>
    </footer>
  );
}