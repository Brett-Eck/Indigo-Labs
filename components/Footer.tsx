import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/services", label: "Services" },
  { href: "/why-us", label: "Why Us" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="dark-surface bg-indigo-950 text-indigo-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1fr_auto]">
        <div>
          <Link href="/" aria-label="Indigo Labs home">
            <Logo inverse />
          </Link>
          <p className="mt-4 max-w-xs text-indigo-200">Precision defense components, built in America.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-2 font-medium">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-indigo-300">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-6 py-5 text-sm text-indigo-300">
          © 2026 Indigo Labs. All rights reserved. Made in the USA
        </p>
      </div>
    </footer>
  );
}
