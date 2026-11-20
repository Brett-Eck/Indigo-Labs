"use client";

import Link from "next/link";
import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-1.5 w-full rounded-xl border border-indigo-200 bg-white px-4 py-3 text-base text-ink focus:border-indigo-500";
const label = "block text-sm font-semibold";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-3xl border border-indigo-100 bg-white p-8">
        <h2 className="display text-3xl">Request received</h2>
        <p className="mt-4 max-w-md text-mute">
          Thanks for reaching out. We'll review what you sent and follow up by email to talk through next steps.
        </p>
        <Link href="/services" className="mt-6 inline-block font-semibold text-indigo-700 underline decoration-2 underline-offset-8">
          Browse our services
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-3xl border border-indigo-100 bg-white p-6 shadow-sm shadow-indigo-900/5 sm:grid-cols-2 md:p-8">
      <div>
        <label htmlFor="name" className={label}>Name *</label>
        <input id="name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="company" className={label}>Company</label>
        <input id="company" name="company" autoComplete="organization" className={field} />
      </div>
      <div>
        <label htmlFor="email" className={label}>Work email *</label>
        <input id="email" name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor="phone" className={label}>Phone</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
      </div>
      <div>
        <label htmlFor="need" className={label}>What do you need? *</label>
        <select id="need" name="need" required defaultValue="" className={field}>
          <option value="" disabled>Select one</option>
          <option>Custom machined parts</option>
          <option>Rapid prototyping</option>
          <option>Small-batch production</option>
          <option>Quality &amp; inspection</option>
          <option>Something else</option>
        </select>
      </div>
      <div>
        <label htmlFor="timeline" className={label}>Target timeline</label>
        <select id="timeline" name="timeline" defaultValue="" className={field}>
          <option value="" disabled>Select one</option>
          <option>As soon as possible</option>
          <option>Within a month</option>
          <option>1–3 months</option>
          <option>Just exploring</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="quantity" className={label}>Estimated quantity</label>
        <input id="quantity" name="quantity" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="details" className={label}>Project details *</label>
        <textarea id="details" name="details" required rows={6} className={field} />
      </div>
      {/* Honeypot: real visitors never see or fill this field. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-indigo-600 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-indigo-500 disabled:opacity-60"
        >
          {status === "sending" ? "Sending" : "Send Request"}
        </button>
        <p className="mt-3 text-sm text-mute">We only use your details to respond to this request.</p>
        {status === "error" && (
          <p role="alert" className="mt-4 rounded-xl bg-red-50 p-3 font-medium text-red-800">
            Something went wrong sending your request. Please try again in a moment.
          </p>
        )}
      </div>
    </form>
  );
}
