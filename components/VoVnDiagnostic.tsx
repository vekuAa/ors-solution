"use client";

import { useMemo, useState } from "react";
import { Car, Euro, RotateCcw, Sparkles } from "lucide-react";

export default function VoVnDiagnostic() {
  const [vo, setVo] = useState(80);
  const [vn, setVn] = useState(40);
  const [relavage, setRelavage] = useState(30);
  const [voSale, setVoSale] = useState(10);

  const data = useMemo(() => {
    const totalVehicles = vo + vn + relavage + voSale;

    const orsVehicleModel =
      vo * 80 + vn * 50 + relavage * 40 + voSale * 120;

    const daysAt180 = Math.ceil(orsVehicleModel / 180);
    const daysAt190 = Math.ceil(orsVehicleModel / 190);

    return {
      totalVehicles,
      orsVehicleModel,
      daysAt180,
      daysAt190,
    };
  }, [vo, vn, relavage, voSale]);

  return (
    <section id="diagnostic-vovn" className="bg-slate-950 px-6 py-24 text-white lg:px-20">
      <div className="mx-auto max-w-7xl">
        <p className="font-bold text-blue-300">Diagnostic VO/VN</p>

        <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-5xl">
          Estimez votre volume de préparation automobile.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Renseignez vos volumes mensuels pour visualiser la charge liée aux VO,
          VN, relavages et véhicules très sales. ORS peut ensuite proposer un
          modèle adapté : au véhicule ou au forfait journalier.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <Field label="VO / mois" value={vo} onChange={setVo} />
            <Field label="VN / mois" value={vn} onChange={setVn} />
            <Field label="Relavages / mois" value={relavage} onChange={setRelavage} />
            <Field label="VO très sales / mois" value={voSale} onChange={setVoSale} />
          </div>

          <div className="rounded-[2rem] bg-white p-8 text-slate-950">
            <p className="font-bold text-blue-600">Résultat estimatif</p>

            <h3 className="mt-3 text-3xl font-black">
              Votre volume mensuel de préparation
            </h3>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Result icon={<Car />} value={`${data.totalVehicles}`} label="véhicules / mois" />
              <Result icon={<Euro />} value={`${data.orsVehicleModel.toLocaleString("fr-FR")} €`} label="modèle au véhicule" />
              <Result icon={<Sparkles />} value="50 / 80 / 120 €" label="VN / VO / VO très sale" />
              <Result icon={<RotateCcw />} value="40 €" label="relavage" />
            </div>

            <div className="mt-8 rounded-3xl bg-slate-50 p-6">
              <p className="font-black">Lecture ORS</p>

              <p className="mt-3 leading-7 text-slate-600">
                Selon vos volumes, ORS peut étudier deux approches : une
                facturation au véhicule ou un forfait journalier entre{" "}
                <strong>180 € HT et 190 € HT</strong>, selon le site et
                l’organisation.
              </p>
            </div>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-blue-600 px-7 py-4 font-black text-white hover:bg-blue-500"
            >
              Demander une étude personnalisée
            </a>
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
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="mb-6 block">
      <span className="mb-2 block font-bold text-white">{label}</span>

      <input
        type="number"
        min="0"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 text-lg font-black text-white outline-none focus:border-blue-500"
      />
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