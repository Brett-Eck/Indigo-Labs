import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Contact" };

const helps = [
  { t: "The part", d: "What it is, what it attaches to, and the material if you know it." },
  { t: "Volume and timing", d: "A rough quantity and when you need parts in hand." },
  { t: "CAD or drawings", d: "Mention what you have and we'll follow up to collect the files." },
];

export default function Contact() {
  return (
    <>
      <PageHero
        title="Tell us what you need built"
        intro="Share a few details about your part or project and we'll follow up to talk through specs, volume, and timeline."
      />
      <div id="quote" className="mx-auto grid max-w-6xl scroll-mt-24 gap-16 px-6 py-16 md:py-24 lg:grid-cols-[1.4fr_0.8fr]">
        <ContactForm />
        <aside>
          <h2 className="display text-2xl">What helps us quote</h2>
          <dl className="mt-6 grid gap-3">
            {helps.map((h) => (
              <div key={h.t} className="rounded-2xl bg-indigo-50 px-5 py-4">
                <dt className="font-semibold">{h.t}</dt>
                <dd className="mt-1 text-mute">{h.d}</dd>
              </div>
            ))}
          </dl>
          <h3 className="display mt-10 text-xl">Need an NDA first?</h3>
          <p className="mt-2 text-mute">
            Note it in your request and we'll get one in place before you share any designs.
          </p>
        </aside>
      </div>
    </>
  );
}
