import { NextResponse } from "next/server";

/**
 * POST /api/contact: the portfolio's backend.
 * Validates the message, blocks bots (honeypot) and floods (rate limit per IP), then delivers it by email through
 * Resend when RESEND_API_KEY and CONTACT_TO_EMAIL are set (Vercel → Settings → Environment Variables).
 * Without them, the message is written to the server log so nothing is lost while setting up.
 */

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>(); // per serverless instance; good enough for a portfolio

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function clientIp(req: Request): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill the "website" field.
  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  const errors: Record<string, string> = {};
  if (name.length < 2 || name.length > 80) errors.name = "Please enter your name.";
  if (!EMAIL.test(email) || email.length > 120) errors.email = "Please enter a valid email.";
  if (message.length < 10 || message.length > 2000) errors.message = "Message should be 10–2000 characters.";
  if (Object.keys(errors).length) return NextResponse.json({ ok: false, errors }, { status: 422 });

  if (rateLimited(clientIp(req))) {
    return NextResponse.json({ ok: false, error: "Too many messages. Please try again later." }, { status: 429 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.info("[contact] message received (email delivery not configured)", { name, email, length: message.length });
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
        to: [to],
        reply_to: email,
        subject: `Portfolio message from ${name}`,
        html: `<p><b>${escapeHtml(name)}</b> (${escapeHtml(email)}) wrote:</p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
      }),
    });
    if (!res.ok) throw new Error(`Resend ${res.status}`);
    return NextResponse.json({ ok: true, delivered: true });
  } catch (e) {
    console.error("[contact] delivery failed", e);
    return NextResponse.json({ ok: false, error: "Could not send right now. Please email me directly." }, { status: 502 });
  }
}
