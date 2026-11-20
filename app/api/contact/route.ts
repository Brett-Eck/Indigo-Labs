import { NextResponse } from "next/server";

const str = (v: unknown, max = 5000) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: pretend success so bots do not retry.
  if (str(body.website)) return NextResponse.json({ ok: true });

  const lead = {
    name: str(body.name, 200),
    company: str(body.company, 200),
    email: str(body.email, 200),
    phone: str(body.phone, 50),
    need: str(body.need, 100),
    timeline: str(body.timeline, 100),
    quantity: str(body.quantity, 200),
    details: str(body.details),
  };

  if (!lead.name || !lead.need || !lead.details || !/^\S+@\S+\.\S+$/.test(lead.email)) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;

  // Without email credentials, log the lead so it shows up in Vercel function logs.
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    console.log("Quote request", lead);
    return NextResponse.json({ ok: true });
  }

  const text = Object.entries(lead)
    .map(([k, v]) => `${k}: ${v || "(blank)"}`)
    .join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL ?? "Indigo Labs <onboarding@resend.dev>",
      to: [CONTACT_TO_EMAIL],
      reply_to: lead.email,
      subject: `Quote request: ${lead.need}`,
      text,
    }),
  });

  if (!res.ok) return NextResponse.json({ error: "Send failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
