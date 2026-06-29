import Link from "next/link";
import { Mail } from "lucide-react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-14 text-slate-950 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-block">
              <p className="text-3xl font-black tracking-tight">ORS</p>
              <p className="mt-2 text-sm font-bold text-blue-600">
                Optimiser l’organisation. Libérer la production.
              </p>
            </Link>

            <p className="mt-6 max-w-md leading-7 text-slate-600">
              ORS accompagne les entreprises dans l’identification des tâches à
              faible valeur ajoutée afin que leurs équipes restent concentrées
              sur leur cœur de métier.
            </p>
          </div>

          <FooterGroup
            title="Solutions"
            links={[
              { label: "Automobile", href: "/automobile" },
              { label: "Industrie", href: "/secteurs" },
              { label: "Logistique", href: "/secteurs" },
            ]}
          />

          <FooterGroup
            title="Entreprise"
            links={[
              { label: "Accueil", href: "/" },
              { label: "Méthode", href: "/methode" },
              { label: "Contact", href: "/contact" },
            ]}
          />

          <div>
            <p className="font-black">Contact</p>

            <div className="mt-5 space-y-4 text-slate-600">
              <a
                href="mailto:contact@ors-solution.fr"
                className="flex items-center gap-2 hover:text-blue-600"
              >
                <Mail size={18} />
                contact@ors-solution.fr
              </a>

              <a
                href="https://www.linkedin.com/company/ors-solution/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-blue-600"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-slate-700 text-xs font-black text-white">
                  in
                </span>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} ORS. Tous droits réservés.</p>
          <p>Entreprise en phase de lancement — France</p>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="font-black">{title}</p>

      <div className="mt-5 flex flex-col gap-3 text-slate-600">
        {links.map((link) => (
          <Link
            key={link.href + link.label}
            href={link.href}
            className="hover:text-blue-600"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}