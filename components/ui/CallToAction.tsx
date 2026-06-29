import Button from "./Button";

type CallToActionProps = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
};

export default function CallToAction({
  title,
  description,
  buttonLabel,
  buttonHref,
}: CallToActionProps) {
  return (
    <section className="px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-blue-600 p-10 text-center text-white md:p-14">
        <h2 className="text-4xl font-black tracking-tight md:text-5xl">
          {title}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-50">
          {description}
        </p>

        <div className="mt-8">
          <Button href={buttonHref} variant="secondary" arrow>
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}