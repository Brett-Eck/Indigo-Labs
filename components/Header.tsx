"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/services", label: "Services" },
  { href: "/why-us", label: "Why Us" },
  { href: "/process", label: "Process" },
];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-indigo-100 bg-paper/80 text-ink backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <Link href="/" aria-label="Indigo Labs home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-1 text-[0.95rem] font-medium md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-4 py-2 transition-colors hover:bg-indigo-100 ${
                path === l.href ? "bg-indigo-100 text-indigo-700" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-3 rounded-full bg-indigo-600 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-indigo-500"
          >
            Get in Touch
          </Link>
        </nav>
        <button
          type="button"
          className="rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm font-semibold md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-indigo-100 bg-paper md:hidden">
          <ul className="mx-auto max-w-6xl px-6 py-3">
            {[...links, { href: "/contact", label: "Get in Touch" }].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="block rounded-xl px-3 py-3 font-medium hover:bg-indigo-100" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
