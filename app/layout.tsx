import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ORS | Optimisation opérationnelle pour ateliers automobiles",
  description:
    "ORS aide les concessions automobiles à optimiser la productivité de leurs ateliers en prenant en charge les tâches à faible valeur ajoutée.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}