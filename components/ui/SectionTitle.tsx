type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
}: SectionTitleProps) {
  return (
    <div className="max-w-4xl">
      <p className={`font-bold ${light ? "text-blue-300" : "text-blue-600"}`}>
        {eyebrow}
      </p>

      <h2
        className={`mt-4 text-4xl font-black tracking-tight md:text-5xl ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 text-lg leading-8 ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}