import { attributes, career, certifications, hackathons, offThePitch, profile, projects, publications, skillGroups, trophies } from "@/data/profile";
import { Chip, Icon, Section } from "./Section";

/** 01 · Scouting report: attribute bars + the full skill set. */
export function PlayerProfile() {
  return (
    <Section
      id="profile"
      number="01"
      eyebrow="Scouting report"
      title="The player profile"
      intro="A forward who plays between the customer and the product: I make platforms work on real problems, then bring back evidence of what should change."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <div className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-line">
          <h3 className="text-lg font-extrabold">Attributes</h3>
          <ul className="mt-5 space-y-4">
            {attributes.map((a) => (
              <li key={a.code}>
                <div className="flex justify-between text-sm">
                  <span className="font-semibold">{a.label}</span>
                  <span className="font-extrabold text-pitch">{a.value}</span>
                </div>
                <div className="mt-1.5 h-2 rounded-full bg-page">
                  <div className="h-2 rounded-full bg-gradient-to-r from-pitch to-volt" style={{ width: `${a.value}%` }} />
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
              <div key={l} className="rounded-xl bg-page p-3">
                <p className="text-2xl font-extrabold text-pitch">{v}</p>
                <p className="text-xs font-medium text-muted">{l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((g) => (
            <div key={g.title} className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-line">
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-muted">{g.title}</h3>
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

/** 02 · Career, as a season-by-season record. */
export function Career() {
  return (
    <Section id="career" number="02" eyebrow="Season by season" title="Career" tone="white">
      <ol className="relative space-y-5 border-l-2 border-pitch/30 pl-6 sm:pl-8">
        {career.map((c) => (
          <li key={c.club} className="relative">
            <span className="absolute -left-[33px] top-6 h-4 w-4 rounded-full border-4 border-card bg-volt sm:-left-[41px]" aria-hidden />
            <div className="rounded-2xl bg-page p-6 ring-1 ring-line">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-2xl font-extrabold tracking-tight">{c.club}</h3>
                <span className="text-sm font-bold text-muted">{c.period}</span>
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <p className="font-bold text-pitch">{c.role}</p>
                <span className="rounded-full bg-night px-2.5 py-0.5 text-xs font-bold text-volt">{c.status}</span>
              </div>
              <ul className="mt-4 space-y-2 text-ink-2">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-3 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pitch" aria-hidden />
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
      title="Signature goals"
      intro="The projects I'd show in a final: built end to end, measured, and honest about what didn't work."
      tone="dark"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className={`flex flex-col rounded-2xl p-6 sm:p-7 ${p.featured ? "bg-gradient-to-br from-[#123c2c] to-night-2 ring-1 ring-volt/40 lg:col-span-2" : "bg-white/[0.04] ring-1 ring-white/10"}`}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                {p.featured && (
                  <p className="inline-flex items-center gap-1.5 rounded-full bg-volt px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-night">
                    <Icon name="star" className="h-3 w-3" /> Player of the match
                  </p>
                )}
                <h3 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{p.name}</h3>
                <p className="font-medium text-white/70">{p.kicker}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm font-bold transition hover:border-volt hover:text-volt"
                  >
                    <Icon name="github" /> {l.label}
                  </a>
                ))}
              </div>
            </div>

            <p className="mt-4 leading-relaxed text-white/80">{p.summary}</p>

            <dl className={`mt-5 grid gap-3 ${p.stats.length > 3 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 sm:grid-cols-3"}`}>
              {p.stats.map((s) => (
                <div key={s.label} className="rounded-xl bg-white/[0.06] p-3 ring-1 ring-white/10">
                  <dd className="text-2xl font-extrabold text-volt">{s.value}</dd>
                  <dt className="text-xs font-medium text-white/60">{s.label}</dt>
                </div>
              ))}
            </dl>

            <ul className="mt-5 space-y-2 text-sm leading-relaxed text-white/75">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-volt" aria-hidden />
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

/** 04 · Trophy cabinet: honours, certifications, hackathons, publications. */
export function TrophyCabinet() {
  return (
    <Section id="trophies" number="04" eyebrow="Trophy cabinet" title="Honours" intro="A club is judged by its cabinet. Here's mine so far.">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-line lg:col-span-2">
          <h3 className="text-lg font-extrabold">Titles</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {trophies.map((t) => (
              <li key={t.title} className="rounded-xl bg-page p-4">
                <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold">
                  <Icon name="star" className="h-3 w-3" /> {t.kind}
                </p>
                <p className="mt-1 text-lg font-extrabold">{t.title}</p>
                <p className="text-sm text-ink-2">{t.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-night p-6 text-white">
          <h3 className="text-lg font-extrabold">Certifications</h3>
          <ul className="mt-4 space-y-3">
            {certifications.map((c) => (
              <li key={c.title} className="border-b border-white/10 pb-3 last:border-0">
                <p className="font-bold leading-snug">{c.title}</p>
                <p className="text-sm text-volt">{c.issuer}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-line lg:col-span-2">
          <h3 className="text-lg font-extrabold">Cup runs · hackathons</h3>
          <ul className="mt-2 divide-y divide-line">
            {hackathons.map((h) => (
              <li key={h.name} className="flex flex-wrap items-baseline justify-between gap-2 py-3">
                <div>
                  <p className="font-bold">
                    {h.name} <span className="font-medium text-muted">· {h.host}</span>
                  </p>
                  <p className="text-sm text-ink-2">{h.what}</p>
                </div>
                <span className="text-sm font-semibold text-muted">{h.date}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-line">
          <h3 className="text-lg font-extrabold">Press room · publications</h3>
          <ul className="mt-4 space-y-4">
            {publications.map((p) => (
              <li key={p.title}>
                <p className="text-xs font-bold uppercase tracking-wider text-pitch">{p.venue}</p>
                <p className="mt-1 font-bold leading-snug">{p.title}</p>
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
      title="Football, cricket & data"
      intro="Sport is where I learned teamwork, patience and playing under pressure."
      tone="white"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {offThePitch.map((o, i) => (
          <article key={o.title} className={`rounded-2xl p-6 ${i === 0 ? "night text-white" : "bg-page ring-1 ring-line"}`}>
            <p className={`text-xs font-bold uppercase tracking-[0.18em] ${i === 0 ? "text-volt" : "text-pitch"}`}>{o.tag}</p>
            <h3 className="mt-2 text-2xl font-extrabold">{o.title}</h3>
            <p className={`mt-3 leading-relaxed ${i === 0 ? "text-white/80" : "text-ink-2"}`}>{o.text}</p>
          </article>
        ))}
      </div>
      <blockquote className="mt-8 rounded-2xl border-l-4 border-volt bg-night p-6 text-white">
        <p className="text-2xl font-extrabold tracking-tight sm:text-3xl">&ldquo;Play until the final whistle.&rdquo;</p>
        <p className="mt-2 text-sm text-white/65">The same rule applies to shipping software: the last minute counts.</p>
      </blockquote>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="bg-night px-4 py-10 text-white/65 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-extrabold text-white">{profile.name}</p>
          <p className="text-sm">
            © {new Date().getFullYear()} · {profile.location}, India
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm font-semibold">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-volt">
            <Icon name="github" /> GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-volt">
            <Icon name="linkedin" /> LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-volt">
            <Icon name="mail" /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}
