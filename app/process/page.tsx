import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { faq, steps } from "@/lib/content";

export const metadata: Metadata = { title: "Our Process" };

export default function Process() {
  return (
    <>
      <PageHero
        title="From drawing to delivered part"
        intro="Here's exactly what happens at each stage, and what we need from you to keep it moving."
      />
      <ol className="mx-auto grid max-w-6xl gap-5 px-6 py-16 md:py-24">
        {steps.map((s, i) => (
          <li
            key={s.title}
            className="grid gap-6 rounded-3xl border border-indigo-100 bg-white p-8 md:grid-cols-12 md:items-start md:gap-10 md:p-10"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-xl font-bold text-white md:col-span-1">
              {i + 1}
            </span>
            <div className="md:col-span-7 md:col-start-2">
              <h2 className="display text-3xl">{s.title}</h2>
              <p className="mt-4 max-w-xl text-lg text-mute">{s.long}</p>
            </div>
            <div className="rounded-2xl bg-indigo-50 px-5 py-4 md:col-span-3">
              <p className="text-sm text-mute">Typical time</p>
              <p className="font-semibold">{s.time}</p>
            </div>
          </li>
        ))}
      </ol>
      <section className="bg-indigo-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:py-24 lg:grid-cols-[0.6fr_1.4fr]">
          <h2 className="display text-3xl md:text-4xl">Common questions</h2>
          <div className="grid gap-3">
            {faq.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-indigo-100 bg-white px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-2xl leading-none text-indigo-600 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 max-w-xl text-mute">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Ready to start step one?"
        text="Send over your specs and we'll get back with a quote."
        label="Request a Quote"
      />
    </>
  );
}
