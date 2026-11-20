export default function PageHero({ title, intro }: { title: string; intro: string }) {
  return (
    <section className="dark-surface rounded-b-[2.5rem] bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-700 text-white">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:pb-24 md:pt-24">
        <h1 className="display max-w-3xl text-4xl md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-indigo-100 md:text-xl">{intro}</p>
      </div>
    </section>
  );
}
