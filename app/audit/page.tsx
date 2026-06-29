"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { ArrowRight, Building2, Car, Clock3, Euro } from "lucide-react";
import { useMemo, useState } from "react";

export default function AuditPage() {
  const [vehicles, setVehicles] = useState(24);
  const [minutes, setMinutes] = useState(20);
  const [days, setDays] = useState(21);
  const [hourlyCost, setHourlyCost] = useState(45);

  const result = useMemo(() => {
    const dailyHours = (vehicles * minutes) / 60;
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
    <>
      <Navbar />

      <main className="bg-white text-slate-950">
        <section className="bg-slate-950 px-6 py-24 text-white lg:px-20">
          <div className="mx-auto max-w-7xl">
            <p className="font-bold text-blue-300">Diagnostic ORS</p>

            <h1 className="mt-4 max-w-5xl text-5xl font-black tracking-tight md:text-7xl">
              Évaluez le temps mobilisé par les tâches annexes.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Ce diagnostic permet d&apos;estimer le temps potentiellement
              récupérable dans votre organisation.
            </p>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
              <h2 className="text-3xl font-black">Votre atelier</h2>

              <div className="mt-8 space-y-6">
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
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
              <p className="font-bold text-blue-600">Résultat estimatif</p>

              <h2 className="mt-3 text-3xl font-black">
                Votre potentiel d&apos;optimisation
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Result
                  icon={<Clock3 />}
                  value={`${result.dailyHours.toFixed(1)} h`}
                  label="mobilisées par jour"
                />

                <Result
                  icon={<Building2 />}
                  value={`${Math.round(result.monthlyHours)} h`}
                  label="mobilisées par mois"
                />

                <Result
                  icon={<Euro />}
                  value={`${Math.round(result.monthlyValue).toLocaleString(
                    "fr-FR"
                  )} €`}
                  label="valeur mensuelle estimée"
                />

                <Result
                  icon={<Car />}
                  value={`${result.premiumPotential.toLocaleString("fr-FR")} €`}
                  label="potentiel Premium mensuel"
                />
              </div>

              <div className="mt-8 rounded-3xl bg-slate-50 p-6">
                <p className="font-black">Lecture ORS</p>

                <p className="mt-3 leading-7 text-slate-600">
                  Avec ces données, les tâches annexes représentent environ{" "}
                  <strong>{result.dailyHours.toFixed(1)} h par jour</strong>.
                  Un audit terrain permettrait de vérifier ce potentiel et de
                  proposer une organisation adaptée.
                </p>
              </div>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-black text-white hover:bg-blue-500"
              >
                Demander un audit complet
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </>
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
    <label className="block">
      <span className="mb-2 block font-bold">{label}</span>

      <div className="flex overflow-hidden rounded-2xl border border-white/10 bg-white/10">
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

function Result({
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

      <p className="text-3xl font-black">{value}</p>
      <p className="mt-2 text-sm font-semibold text-slate-500">{label}</p>
    </div>
  );
}