import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { services } from "@/lib/content";

export const metadata: Metadata = { title: "Services" };

export default function Services() {
  return (
    <>
      <PageHero
        title="Manufacturing built around drone airframes"
        intro="Every capability below runs in-house, in the US, by a team that designs and flies the platforms these parts go into."
      />
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:py-24">
        {services.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className="grid scroll-mt-24 gap-8 rounded-3xl border border-indigo-100 bg-white p-8 shadow-sm shadow-indigo-900/5 md:grid-cols-12 md:gap-12 md:p-10"
          >
            <div className="md:col-span-7">
              <h2 className="display text-3xl md:text-4xl">{s.title}</h2>
              <p className="mt-5 max-w-xl text-lg text-mute">{s.long}</p>
            </div>
            <dl className="self-start rounded-2xl bg-indigo-50 p-6 md:col-span-5">
              {s.specs.map((sp) => (
                <div key={sp.label} className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-indigo-100 py-3 first:pt-0 last:border-0 last:pb-0">
                  <dt className="text-sm text-mute">{sp.label}</dt>
                  <dd className="font-semibold">{sp.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
      <CtaBand
        title="Have a part in mind?"
        text="Send us your specs and we'll tell you the fastest path to a finished part."
        label="Request a Quote"
      />
    </>
  );
}
