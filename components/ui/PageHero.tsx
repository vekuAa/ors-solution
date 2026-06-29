import Button from "./Button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="bg-slate-950 px-6 py-28 text-white lg:px-20">
      <div className="mx-auto max-w-7xl">
        <p className="font-bold text-blue-300">{eyebrow}</p>

        <h1 className="mt-5 max-w-5xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
          {title}
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
          {description}
        </p>

        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {primaryCta && (
              <Button href={primaryCta.href} arrow>
                {primaryCta.label}
              </Button>
            )}

            {secondaryCta && (
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}