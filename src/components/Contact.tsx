"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { Icon, Section } from "./Section";

type State = { status: "idle" | "sending" | "sent" | "error"; message?: string; errors?: Record<string, string> };

/** 06 · Contact: "Sign me", with a form posting to /api/contact. */
export function Contact() {
  const [state, setState] = useState<State>({ status: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState({ status: "sending" });
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json();
      if (res.ok && json.ok) {
        form.reset();
        setState({ status: "sent", message: "Message received. I'll get back to you soon." });
      } else {
        setState({ status: "error", message: json.error || "Please check the highlighted fields.", errors: json.errors });
      }
    } catch {
      setState({ status: "error", message: "Network error. Please email me directly." });
    }
  }

  const field = "mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/35 outline-none transition focus:border-volt";

  return (
    <Section id="contact" number="06" eyebrow="Final whistle" title="Get in touch" intro="Open to Forward Deployed Engineering and AI engineering roles. Let's talk." tone="dark">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {[
            { icon: "mail" as const, label: profile.email, href: `mailto:${profile.email}` },
            { icon: "phone" as const, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
            { icon: "linkedin" as const, label: "LinkedIn", href: profile.links.linkedin },
            { icon: "github" as const, label: "GitHub", href: profile.links.github },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-white/[0.04] p-4 ring-1 ring-white/10 transition hover:ring-volt"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-volt text-night">
                <Icon name={c.icon} />
              </span>
              <span className="break-all font-semibold">{c.label}</span>
            </a>
          ))}
        </div>

        <form onSubmit={onSubmit} noValidate className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10">
          {/* honeypot: hidden from people, filled by bots */}
          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-white/75">
              Name
              <input name="name" required className={field} placeholder="Your name" />
              {state.errors?.name && <span className="mt-1 block text-xs text-red-300">{state.errors.name}</span>}
            </label>
            <label className="text-sm text-white/75">
              Email
              <input name="email" type="email" required className={field} placeholder="you@company.com" />
              {state.errors?.email && <span className="mt-1 block text-xs text-red-300">{state.errors.email}</span>}
            </label>
          </div>
          <label className="mt-4 block text-sm text-white/75">
            Message
            <textarea name="message" required rows={5} className={field} placeholder="Tell me about the role or project…" />
            {state.errors?.message && <span className="mt-1 block text-xs text-red-300">{state.errors.message}</span>}
          </label>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={state.status === "sending"}
              className="inline-flex items-center gap-2 rounded-full bg-volt px-6 py-3 text-sm font-bold text-night transition hover:bg-white disabled:opacity-60"
            >
              {state.status === "sending" ? "Sending…" : "Send message"} <Icon name="arrow" />
            </button>
            {state.message && (
              <p role="status" className={`text-sm ${state.status === "sent" ? "text-volt" : "text-red-300"}`}>
                {state.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </Section>
  );
}
