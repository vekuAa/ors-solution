export default function PremiumSection() {
  return (
    <section id="premium" className="px-6 py-24 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 font-bold text-blue-600">Forfait Premium</p>
          <h2 className="text-4xl font-black tracking-tight">
            Une solution qui peut s’autofinancer.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Certaines concessions choisissent de proposer un forfait nettoyage
            Premium à leurs clients. Ce service peut contribuer à financer une
            partie, voire la totalité, de l’intervention ORS.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Chaque concession reste libre de définir sa politique commerciale :
            facturation directe, intégration dans un forfait atelier ou service
            inclus dans l’expérience client.
          </p>
        </div>

        <div className="rounded-[2rem] bg-blue-50 p-8">
          {["Client", "Forfait Premium 10 €", "Contribution au coût ORS", "Rentabilité atelier améliorée"].map((item, index) => (
            <div key={item}>
              <p className="rounded-2xl bg-white p-5 text-lg font-black text-slate-950 shadow-sm">
                {item}
              </p>
              {index < 3 && <p className="py-3 text-center text-2xl font-black text-blue-600">↓</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}