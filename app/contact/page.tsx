import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
} from "lucide-react";

import { FaLinkedin } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-950">
        {/* HERO */}

        <section className="bg-slate-950 px-6 py-24 text-white lg:px-20">
          <div className="mx-auto max-w-7xl">
            <p className="font-bold text-blue-300">Contact ORS</p>

            <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
              Échangeons sur votre organisation.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Nous analysons votre fonctionnement afin de déterminer si ORS
              peut vous aider à optimiser votre organisation.
            </p>

            <a
              href="#formulaire"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-black text-white transition hover:bg-blue-500"
            >
              Demander un audit

              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* CONTENU */}

        <section className="px-6 py-24 lg:px-20">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">

            {/* GAUCHE */}

            <div>
              <p className="font-bold text-blue-600">
                Comment se déroule un premier échange ?
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight">
                Une approche simple.
              </h2>

              <div className="mt-10 space-y-5">

                <Step
                  number="01"
                  text="Présentation de votre activité"
                />

                <Step
                  number="02"
                  text="Analyse de votre organisation"
                />

                <Step
                  number="03"
                  text="Identification des tâches annexes"
                />

                <Step
                  number="04"
                  text="Présentation d'une solution adaptée"
                />

              </div>

              <div className="mt-10 rounded-[2rem] bg-slate-50 p-8">

                <p className="text-xl font-black">
                  Pourquoi nous contacter ?
                </p>

                <div className="mt-6 space-y-4">


                  <Benefit text="Aucun engagement" />

                  <Benefit text="Analyse personnalisée" />

                  <Benefit text="Réponse sous 24 heures ouvrées" />

                </div>

              </div>
            </div>

            {/* DROITE */}

            <div
              id="formulaire"
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl"
            >
              <p className="font-bold text-blue-600">
                Demande d&apos;audit
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Contactez ORS
              </h2>

              <p className="mt-4 text-slate-600">
                Ce formulaire ouvrira votre logiciel de messagerie.
                Une version professionnelle sera intégrée prochainement.
              </p>

              <form
                action="mailto:contact@ors-solution.fr"
                method="post"
                encType="text/plain"
                className="mt-8 space-y-5"
              >
                <Field
                  label="Nom"
                  name="Nom"
                  required
                />

                <Field
                  label="Entreprise"
                  name="Entreprise"
                  required
                />

                <Field
                  label="Téléphone"
                  name="Téléphone"
                />

                <Field
                  label="Adresse email"
                  name="Email"
                  required
                  type="email"
                />

                <label className="block">

                  <span className="mb-2 block font-bold">
                    Message
                  </span>

                  <textarea
                    rows={5}
                    name="Message"
                    className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600"
                    placeholder="Décrivez votre besoin..."
                  />

                </label>

                <button
                  className="w-full rounded-full bg-blue-600 px-7 py-4 font-black text-white transition hover:bg-blue-500"
                >
                  Envoyer la demande
                </button>

              </form>

              <div className="mt-8 border-t border-slate-200 pt-8 space-y-5">

                <ContactItem
                  icon={<Mail size={18} />}
                  text="contact@ors-solution.fr"
                  href="mailto:contact@ors-solution.fr"
                />

                <ContactItem
                  icon={<FaLinkedin className="text-[18px]" />}
                  text="LinkedIn ORS"
                  href="https://www.linkedin.com/company/ors-solution/"
                />

                <ContactItem
                  icon={<MapPin size={18} />}
                  text="France"
                />

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <BackToTop />
    </>
  );
}

function Step({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 rounded-3xl bg-slate-50 p-5">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black text-white">
        {number}
      </div>

      <p className="self-center font-bold">
        {text}
      </p>

    </div>
  );
}

function Benefit({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">

      <CheckCircle2
        size={18}
        className="text-green-600"
      />

      <span>{text}</span>

    </div>
  );
}

function Field({
  label,
  name,
  required = false,
  type = "text",
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="block">

      <span className="mb-2 block font-bold">
        {label}
      </span>

      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600"
      />

    </label>
  );
}

function ContactItem({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition">
      <div className="text-blue-600">{icon}</div>
      <span className="font-semibold">{text}</span>
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
    >
      {content}
    </a>
  );
}