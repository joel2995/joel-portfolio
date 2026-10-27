import { attributes, career, certifications, hackathons, offThePitch, profile, projects, publications, skillGroups, trophies } from "@/data/profile";
import { Chip, Icon, Section } from "./Section";

/** 01 · Player profile: who I am + attribute bars + the full skill set. */
export function PlayerProfile() {
  return (
    <Section
      id="profile"
      number="01"
      eyebrow="Player profile"
      title="The Scouting Report"
      intro="A forward who plays between the customer and the product: I make platforms work on real problems, then bring back evidence of what should change."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div className="rounded-2xl border border-line bg-paper p-6">
          <h3 className="font-display text-2xl tracking-wide">Attributes</h3>
          <ul className="mt-5 space-y-4">
            {attributes.map((a) => (
              <li key={a.code}>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{a.label}</span>
                  <span className="font-display text-lg text-royal">{a.value}</span>
                </div>
                <div className="mt-1.5 h-2 rounded-full bg-line">
                  <div className="h-2 rounded-full bg-gradient-to-r from-royal to-gold" style={{ width: `${a.value}%` }} />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            {[
              ["2", "Publications"],
              ["4", "Hackathons"],
              ["26", "Product findings"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-xl bg-white p-3">
                <p className="font-display text-3xl text-royal">{v}</p>
                <p className="text-xs text-muted">{l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-line p-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{g.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/** 02 · Career: the "transfer history". */
export function Career() {
  return (
    <Section id="career" number="02" eyebrow="Transfer history" title="Career" tone="paper">
      <ol className="relative space-y-6 border-l-2 border-gold/50 pl-6 sm:pl-8">
        {career.map((c) => (
          <li key={c.club} className="relative">
            <span className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-4 border-paper bg-gold sm:-left-[41px]" aria-hidden />
            <div className="rounded-2xl border border-line bg-white p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-3xl tracking-wide">{c.club}</h3>
                <span className="text-sm font-medium text-muted">{c.period}</span>
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <p className="font-medium text-royal">{c.role}</p>
                <span className="rounded-full bg-gold-soft px-2.5 py-0.5 text-xs font-semibold text-night">{c.status}</span>
              </div>
              <ul className="mt-4 space-y-2 text-ink-2">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-3 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/** 03 · Projects as match reports. */
export function Matches() {
  return (
    <Section
      id="matches"
      number="03"
      eyebrow="Match highlights"
      title="Signature Goals"
      intro="The projects I'd show in the final: built end to end, measured, and honest about what didn't work."
      tone="dark"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className={`flex flex-col rounded-2xl border p-6 sm:p-7 ${p.featured ? "border-gold/50 bg-gradient-to-br from-night-2 to-night lg:col-span-2" : "border-white/10 bg-white/[0.03]"}`}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                {p.featured && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Man of the match</p>}
                <h3 className="font-display text-4xl tracking-wide sm:text-5xl">{p.name}</h3>
                <p className="text-white/70">{p.kicker}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium transition hover:border-gold hover:text-gold"
                  >
                    <Icon name="github" /> {l.label}
                  </a>
                ))}
              </div>
            </div>

            <p className="mt-4 leading-relaxed text-white/80">{p.summary}</p>

            <dl className={`mt-5 grid gap-3 ${p.stats.length > 3 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 sm:grid-cols-3"}`}>
              {p.stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <dd className="font-display text-3xl text-gold">{s.value}</dd>
                  <dt className="text-xs text-white/60">{s.label}</dt>
                </div>
              ))}
            </dl>

            <ul className="mt-5 space-y-2 text-sm leading-relaxed text-white/75">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                  {pt}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              {p.stack.map((s) => (
                <Chip key={s} tone="dark">
                  {s}
                </Chip>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/** 04 · Trophy cabinet: awards, certifications, hackathons, publications. */
export function TrophyCabinet() {
  return (
    <Section id="trophies" number="04" eyebrow="Trophy cabinet" title="Silverware" intro="A club is judged by its cabinet. Here's mine so far.">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-line p-6 lg:col-span-2">
          <h3 className="font-display text-2xl tracking-wide">Honours</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {trophies.map((t) => (
              <li key={t.title} className="rounded-xl bg-paper p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">{t.kind}</p>
                <p className="mt-1 font-display text-2xl tracking-wide">{t.title}</p>
                <p className="text-sm text-ink-2">{t.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-gold/40 bg-gradient-to-b from-gold-soft/40 to-white p-6">
          <h3 className="font-display text-2xl tracking-wide">Certifications</h3>
          <ul className="mt-4 space-y-3">
            {certifications.map((c) => (
              <li key={c.title} className="border-b border-line pb-3 last:border-0">
                <p className="font-semibold leading-snug">{c.title}</p>
                <p className="text-sm text-muted">{c.issuer}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-line p-6 lg:col-span-2">
          <h3 className="font-display text-2xl tracking-wide">Cup runs (hackathons)</h3>
          <ul className="mt-4 divide-y divide-line">
            {hackathons.map((h) => (
              <li key={h.name} className="flex flex-wrap items-baseline justify-between gap-2 py-3">
                <div>
                  <p className="font-semibold">
                    {h.name} <span className="font-normal text-muted">· {h.host}</span>
                  </p>
                  <p className="text-sm text-ink-2">{h.what}</p>
                </div>
                <span className="text-sm text-muted">{h.date}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-line p-6">
          <h3 className="font-display text-2xl tracking-wide">Press room</h3>
          <ul className="mt-4 space-y-4">
            {publications.map((p) => (
              <li key={p.title}>
                <p className="text-xs font-semibold uppercase tracking-wider text-royal">{p.venue}</p>
                <p className="mt-1 font-medium leading-snug">{p.title}</p>
                <p className="text-sm text-muted">{p.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/** 05 · Off the pitch: football, cricket, fantasy sports. */
export function OffThePitch() {
  return (
    <Section
      id="off-the-pitch"
      number="05"
      eyebrow="Off the pitch"
      title="Football, Cricket & Data"
      intro="Sport is where I learned teamwork, patience and playing under pressure. Madridista always: the club that never stops believing until the final whistle."
      tone="paper"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {offThePitch.map((o, i) => (
          <article key={o.title} className={`rounded-2xl p-6 ${i === 0 ? "bg-night text-white" : "border border-line bg-white"}`}>
            <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${i === 0 ? "text-gold" : "text-royal"}`}>{o.tag}</p>
            <h3 className="mt-2 font-display text-3xl tracking-wide">{o.title}</h3>
            <p className={`mt-3 leading-relaxed ${i === 0 ? "text-white/80" : "text-ink-2"}`}>{o.text}</p>
          </article>
        ))}
      </div>
      <blockquote className="mt-10 rounded-2xl border-l-4 border-gold bg-white p-6">
        <p className="font-display text-3xl tracking-wide sm:text-4xl">&ldquo;Hasta el final, vamos Real.&rdquo;</p>
        <p className="mt-2 text-sm text-muted">Until the end. Same rule for shipping software: the last minute counts.</p>
      </blockquote>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="bg-night px-4 py-10 text-white/60 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm">
        <p>
          © {new Date().getFullYear()} {profile.name} · Built with Next.js · <span className="text-gold">¡Hala Madrid!</span>
        </p>
        <p className="text-xs">Fan-made styling. Not affiliated with Real Madrid C.F.</p>
      </div>
    </footer>
  );
}
