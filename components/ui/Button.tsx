import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark" | "light";
  arrow?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  arrow = false,
}: ButtonProps) {
  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-900/20",
    secondary:
      "border border-slate-300 text-slate-950 hover:bg-slate-50",
    dark: "bg-slate-950 text-white hover:bg-blue-600",
    light: "border border-white/20 text-white hover:bg-white/10",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-black transition hover:scale-105 ${styles[variant]}`}
    >
      {children}
      {arrow && <ArrowRight size={18} />}
    </Link>
  );
}