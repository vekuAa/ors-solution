import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type ResourcePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params;

  return (
    <>
      <Navbar />

      <main className="bg-white px-6 py-24 text-slate-950 lg:px-20">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/ressources"
            className="inline-flex items-center gap-2 font-black text-blue-600"
          >
            <ArrowLeft size={18} />
            Retour aux ressources
          </Link>

          <p className="mt-12 font-bold text-blue-600">Ressource ORS</p>

          <h1 className="mt-4 text-5xl font-black tracking-tight">
            {slug.replaceAll("-", " ")}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Cette ressource est en cours de préparation. ORS publiera bientôt
            des contenus dédiés à l’organisation, la performance opérationnelle
            et l’optimisation des ateliers.
          </p>
        </article>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}