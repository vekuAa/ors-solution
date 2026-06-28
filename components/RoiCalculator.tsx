"use client";

import { useMemo, useState } from "react";

export default function RoiCalculator() {
  const [vehicles, setVehicles] = useState(24);
  const [minutes, setMinutes] = useState(20);
  const [days, setDays] = useState(21);
  const [hourlyCost, setHourlyCost] = useState(45);

  const data = useMemo(() => {
    const dailyHours = (vehicles * minutes) / 60;
    const monthlyHours = dailyHours * days;
    const monthlyCost = monthlyHours * hourlyCost;
    const premiumRevenue = vehicles * 10 * days;

    return { dailyHours, monthlyHours, monthlyCost, premiumRevenue };
  }, [vehicles, minutes, days, hourlyCost]);

  return (
   <section id="diagnostic" className="bg-slate-950 px-6 py-24 text-white lg:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
          Calculez le temps récupérable dans votre atelier.
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 text-slate-950">
            <Input label="Véhicules par jour" value={vehicles} setValue={setVehicles} />
            <Input label="Minutes annexes par véhicule" value={minutes} setValue={setMinutes} />
            <Input label="Jours travaillés par mois" value={days} setValue={setDays} />
            <Input label="Coût horaire estimé (€)" value={hourlyCost} setValue={setHourlyCost} />
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <Result value={`${data.dailyHours.toFixed(1)} h`} label="temps récupérable par jour" />
            <Result value={`${Math.round(data.monthlyHours)} h`} label="temps récupérable par mois" />
            <Result value={`${Math.round(data.monthlyCost).toLocaleString("fr-FR")} €`} label="valeur mensuelle estimée du temps" />
            <Result value={`${data.premiumRevenue.toLocaleString("fr-FR")} €`} label="potentiel mensuel avec forfait Premium" />

            <p className="mt-6 text-sm leading-6 text-slate-400">
              Simulation indicative basée sur les valeurs saisies. Les résultats
              réels dépendent de l’organisation, du volume et du fonctionnement
              de chaque atelier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Input({
  label,
  value,
  setValue,
}: {
  label: string;
  value: number;
  setValue: (value: number) => void;
}) {
  return (
    <label className="mb-6 block">
      <span className="mb-2 block font-bold">{label}</span>
      <input
        type="number"
        min="0"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full rounded-2xl border border-slate-300 px-5 py-4 text-lg font-bold outline-none focus:border-blue-600"
      />
    </label>
  );
}

function Result({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-b border-white/10 py-5">
      <p className="text-4xl font-black text-blue-300">{value}</p>
      <p className="mt-2 text-slate-300">{label}</p>
    </div>
  );
}