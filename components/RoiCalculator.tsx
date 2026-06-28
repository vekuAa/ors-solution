"use client";

import { useMemo, useState } from "react";
import { Calculator, Clock3, Euro, Sparkles } from "lucide-react";

export default function RoiCalculator() {
  const [vehicles, setVehicles] = useState(24);
  const [minutes, setMinutes] = useState(20);
  const [days, setDays] = useState(21);
  const [hourlyCost, setHourlyCost] = useState(45);

  const data = useMemo(() => {
    const dailyMinutes = vehicles * minutes;
    const dailyHours = dailyMinutes / 60;
    const monthlyHours = dailyHours * days;
    const yearlyHours = monthlyHours * 12;
    const monthlyValue = monthlyHours * hourlyCost;
    const premiumPotential = vehicles * 10 * days;

    return {
      dailyHours,
      monthlyHours,
      yearlyHours,
      monthlyValue,
      premiumPotential,
    };
  }, [vehicles, minutes, days, hourlyCost]);

  return (
    <section
      id="diagnostic"
      className="bg-slate-950 px-6 py-24 text-white lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-bold text-blue-300">Diagnostic Atelier ORS</p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Estimez le temps que votre atelier peut récupérer.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Ajustez les données selon votre organisation : volume quotidien,
            temps consacré aux tâches annexes, jours travaillés et coût horaire
            estimé.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl bg-blue-500/20 p-3 text-blue-300">
                <Calculator size={24} />
              </div>

              <div>
                <p className="font-black">Paramètres atelier</p>
                <p className="text-sm text-slate-400">
                  Simulation indicative et ajustable
                </p>
              </div>
            </div>

            <Field
              label="Véhicules traités par jour"
              value={vehicles}
              onChange={setVehicles}
              suffix="véhicules"
            />

            <Field
              label="Temps annexe par véhicule"
              value={minutes}
              onChange={setMinutes}
              suffix="minutes"
            />

            <Field
              label="Jours travaillés par mois"
              value={days}
              onChange={setDays}
              suffix="jours"
            />

            <Field
              label="Coût horaire estimé"
              value={hourlyCost}
              onChange={setHourlyCost}
              suffix="€ / h"
            />
          </div>

          <div className="rounded-[2rem] bg-white p-8 text-slate-950">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-bold text-blue-600">Résultat estimatif</p>

                <h3 className="mt-3 text-3xl font-black tracking-tight">
                  Votre atelier pourrait récupérer du temps chaque jour.
                </h3>
              </div>

              <div className="hidden rounded-full bg-green-100 px-4 py-2 font-black text-green-700 md:block">
                Simulation
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <ResultCard
                icon={<Clock3 size={22} />}
                value={`${data.dailyHours.toFixed(1)} h`}
                label="par jour"
              />

              <ResultCard
                icon={<Clock3 size={22} />}
                value={`${Math.round(data.monthlyHours)} h`}
                label="par mois"
              />

              <ResultCard
                icon={<Euro size={22} />}
                value={`${Math.round(data.monthlyValue).toLocaleString(
                  "fr-FR"
                )} €`}
                label="valeur mensuelle du temps"
              />

              <ResultCard
                icon={<Sparkles size={22} />}
                value={`${data.premiumPotential.toLocaleString("fr-FR")} €`}
                label="potentiel Premium mensuel"
              />
            </div>

            <div className="mt-8 rounded-3xl bg-slate-50 p-6">
              <p className="font-black text-slate-950">
                Lecture simple du diagnostic
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                Avec les valeurs saisies, les tâches annexes représentent environ{" "}
                <strong>{data.dailyHours.toFixed(1)} h par jour</strong>. ORS
                intervient pour absorber ces opérations afin que les équipes
                atelier restent concentrées sur la production.
              </p>
            </div>

            <p className="mt-6 text-xs leading-6 text-slate-500">
              Les résultats sont indicatifs. Ils dépendent de l’organisation de
              l’atelier, du volume traité, des process internes et du temps
              réellement consacré aux tâches annexes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  suffix: string;
}) {
  return (
    <label className="mb-6 block">
      <span className="mb-2 block font-bold text-white">{label}</span>

      <div className="flex overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
        <input
          type="number"
          min="0"
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="w-full bg-transparent px-5 py-4 text-lg font-black text-white outline-none"
        />

        <span className="flex min-w-28 items-center justify-center bg-white/10 px-4 text-sm font-bold text-slate-300">
          {suffix}
        </span>
      </div>
    </label>
  );
}

function ResultCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
        {icon}
      </div>

      <p className="text-3xl font-black text-slate-950">{value}</p>
      <p className="mt-2 text-sm font-semibold text-slate-500">{label}</p>
    </div>
  );
}