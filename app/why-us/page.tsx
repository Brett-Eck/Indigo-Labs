import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { reasons } from "@/lib/content";

export const metadata: Metadata = { title: "Why Indigo Labs" };

export default function WhyUs() {
  return (
    <>
      <PageHero
        title="Built by people who fly drones"
        intro="Indigo Labs grew out of our own drone program. That background shapes every part we make for other teams."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:py-24 lg:grid-cols-[0.6fr_1.4fr]">
        <h2 className="display text-3xl md:text-4xl">Our story</h2>
        <div className="max-w-2xl space-y-6 text-lg leading-8 md:text-xl md:leading-9">
          <p>
            We started as a drone company designing our own airframes. Every part in those builds, from CNC brackets to
            printed housings to gimbal mounts, either came from an overseas supplier with a six-week lead time or got
            machined by us to keep the program moving. Indigo Labs is that second option, opened up to other drone teams
            facing the same bottleneck: manufacturing capacity that understands what an airframe needs, sitting idle
            between our own build cycles.
          </p>
          <p className="text-mute">
            When you send us a part, it gets reviewed by people who have trusted that same category of part in the air.
          </p>
        </div>
      </section>
      <section className="bg-indigo-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <h2 className="display text-3xl md:text-5xl">What that means for you</h2>
          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {reasons.map((r) => (
              <li key={r.title} className="rounded-2xl border border-indigo-100 bg-white p-8">
                <h3 className="display text-xl md:text-2xl">{r.title}</h3>
                <p className="mt-3 text-mute">{r.long}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand
        title="Want to talk through a build?"
        text="Tell us what you're working on and we'll tell you honestly whether we're the right fit."
        label="Get in Touch"
      />
    </>
  );
}
