import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import CtaBand from "@/components/CtaBand";
import PlateDrawing from "@/components/PlateDrawing";
import { facts, reasons, services, steps } from "@/lib/content";

const textLink = "font-semibold text-indigo-700 underline decoration-2 underline-offset-8 hover:text-indigo-500";

export default function Home() {
  return (
    <>
      <section className="dark-surface rounded-b-[2.5rem] bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-700 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-12 pt-14 md:pt-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-indigo-100">
              <span className="h-2 w-2 rounded-full bg-amber-400" aria-hidden="true" />
              Made and machined in the USA
            </p>
            <h1 className="display mt-6 text-5xl md:text-7xl">Precision defense components, built in America.</h1>
            <p className="mt-6 max-w-xl text-lg text-indigo-100 md:text-xl">
              Indigo Labs is a US-based manufacturing partner for drone companies. We make custom parts, rapid
              prototypes, and small batches, and our team designs and flies drones too.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <ButtonLink href="/contact" variant="light">Request a Quote</ButtonLink>
              <ButtonLink href="#services" variant="outline">See What We Make</ButtonLink>
            </div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <PlateDrawing />
          </div>
        </div>

        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-6 pb-12 md:grid-cols-4">
          {services.map((s) => (
            <div key={s.id} className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4">
              <dt className="text-sm text-indigo-200">{s.title}</dt>
              <dd className="display mt-1 text-2xl">{s.lead}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <ul className="mx-auto flex max-w-6xl flex-wrap gap-3 px-6 py-8">
          {facts.map((f) => (
            <li key={f} className="rounded-full border border-indigo-200 bg-white px-5 py-2 text-sm font-semibold text-indigo-900">
              {f}
            </li>
          ))}
        </ul>
      </section>

      <section id="services" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="display text-4xl md:text-5xl">What we build for you</h2>
              <p className="mt-5 max-w-xl text-lg text-mute">
                From a single prototype part to production runs, we manufacture the components your drone platform
                depends on.
              </p>
            </div>
            <Link href="/services" className={textLink}>View all services</Link>
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <li
                key={s.id}
                className="flex flex-col rounded-2xl border border-indigo-100 bg-white p-8 shadow-sm shadow-indigo-900/5 transition-colors hover:border-indigo-300"
              >
                <p className="w-fit rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">
                  {s.lead}
                </p>
                <h3 className="display mt-5 text-2xl">{s.title}</h3>
                <p className="mt-3 text-mute">{s.short}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="dark-surface rounded-3xl bg-gradient-to-br from-indigo-900 to-indigo-700 p-10 text-white lg:sticky lg:top-24 lg:self-start">
            <h2 className="display text-4xl">Built by people who fly drones too</h2>
            <p className="mt-5 text-lg text-indigo-100">
              We started as a drone company ourselves, so we design for the tolerances, weight, and vibration an
              airframe demands, and we read your CAD file with that in mind.
            </p>
            <p className="mt-8">
              <Link href="/why-us" className="font-semibold underline decoration-2 underline-offset-8 hover:text-indigo-200">
                Read our story
              </Link>
            </p>
          </div>
          <ul className="grid gap-4">
            {reasons.map((r) => (
              <li key={r.title} className="rounded-2xl border border-indigo-100 bg-white p-7">
                <h3 className="display text-xl">{r.title}</h3>
                <p className="mt-2 text-mute">{r.short}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <h2 className="display text-4xl md:text-5xl">From drawing to delivered part</h2>
            <Link href="/process" className={textLink}>See full process and timeline</Link>
          </div>
          <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-8">
            <div className="absolute left-0 right-0 top-5 hidden h-px bg-indigo-200 md:block" aria-hidden="true" />
            {steps.map((s, i) => (
              <li key={s.title} className="relative">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white ring-8 ring-paper">
                  {i + 1}
                </span>
                <h3 className="display mt-5 text-xl">{s.title}</h3>
                <p className="mt-2 text-mute">{s.short}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Let's build your next part"
        text="Tell us what you're building and we'll get back to you with a quote and timeline."
        label="Start Your Request"
      />
    </>
  );
}
