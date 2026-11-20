import ButtonLink from "./ButtonLink";

export default function CtaBand({
  title,
  text,
  label,
  href = "/contact",
}: {
  title: string;
  text: string;
  label: string;
  href?: string;
}) {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="dark-surface mx-auto grid max-w-6xl items-center gap-8 rounded-3xl bg-gradient-to-br from-indigo-900 to-indigo-600 p-10 text-white md:grid-cols-[1fr_auto] md:p-16">
        <div>
          <h2 className="display text-3xl md:text-5xl">{title}</h2>
          <p className="mt-4 max-w-xl text-lg text-indigo-100">{text}</p>
        </div>
        <ButtonLink href={href} variant="light">{label}</ButtonLink>
      </div>
    </section>
  );
}
