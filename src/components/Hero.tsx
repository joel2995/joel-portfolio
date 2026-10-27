import { attributes, profile, seasons } from "@/data/profile";
import { Icon } from "./Section";

/** Kick-off: a Champions-night hero with glowing lines, the player card and a season strip. */
export function Hero() {
  return (
    <section id="top" className="night relative overflow-hidden text-white">
      {/* glowing curves, drawn on load */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <path className="glow-line draw" d="M-50 520 C 250 380, 420 640, 700 470 S 1100 260, 1260 330" />
        <path className="glow-line draw opacity-60" d="M650 -40 C 760 160, 980 120, 1050 300 S 1180 600, 1250 640" />
        <path className="glow-line draw opacity-40" d="M-40 140 C 180 60, 320 260, 520 180" />
      </svg>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:grid-cols-[1.25fr_1fr]">
        <div className="rise">
          <p className="inline-flex items-center gap-2 rounded-full bg-cyan px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-night">
            <Icon name="star" className="h-3.5 w-3.5" /> Now playing for {profile.club}
          </p>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name}
            <span className="mt-2 block bg-gradient-to-r from-cyan to-[#7f9bff] bg-clip-text text-transparent">{profile.position}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-white/85">{profile.tagline}</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#matches" className="inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-bold text-night transition hover:bg-white">
              Watch the highlights <Icon name="arrow" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold transition hover:border-cyan hover:text-cyan">
              Get in touch <Icon name="mail" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm font-semibold text-white/70">
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-cyan">
              <Icon name="github" /> GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-cyan">
              <Icon name="linkedin" /> LinkedIn
            </a>
            <a href={profile.links.leetcode} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-cyan">
              <Icon name="code" /> LeetCode
            </a>
            <span className="inline-flex items-center gap-2">
              <Icon name="pin" /> {profile.location}
            </span>
          </div>
        </div>

        {/* Player card */}
        <div className="float mx-auto w-full max-w-[290px]" aria-label="Player card">
          <div className="player-card px-7 pb-14 pt-9 text-white">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-5xl font-extrabold leading-none text-cyan">{profile.rating}</p>
                <p className="mt-1 text-sm font-bold tracking-[0.25em] text-white/80">FDE</p>
              </div>
              <p className="text-4xl font-extrabold leading-none text-white/85">#{profile.shirtNumber}</p>
            </div>
            <div className="mt-5 grid h-28 place-items-center rounded-xl border border-white/15 bg-white/5">
              <span className="text-5xl font-extrabold tracking-tight">JS</span>
            </div>
            <p className="mt-4 text-center text-xl font-extrabold tracking-[0.2em]">{profile.firstName.toUpperCase()}</p>
            <div className="mx-auto my-3 h-px w-3/4 bg-cyan/40" />
            <dl className="grid grid-cols-2 gap-x-5 gap-y-1.5 text-sm">
              {attributes.map((a) => (
                <div key={a.code} className="flex items-baseline justify-between gap-2">
                  <dt className="font-bold text-white/70">{a.code}</dt>
                  <dd className="text-lg font-extrabold">{a.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Season strip, like the competition's "season by season" tiles */}
      <nav aria-label="Seasons" className="relative border-t border-white/10 bg-night-2/70">
        <ul className="mx-auto flex max-w-6xl overflow-x-auto px-4 sm:px-6">
          {seasons.map((s, i) => (
            <li key={s.label} className="shrink-0">
              <a
                href={s.href}
                className={`flex h-full min-w-[150px] flex-col justify-center gap-0.5 border-r border-white/10 px-5 py-4 transition ${i === 0 ? "bg-cyan text-night" : "hover:bg-white/5"}`}
              >
                <span className={`text-xs font-bold uppercase tracking-wider ${i === 0 ? "text-night/70" : "text-cyan"}`}>{s.label}</span>
                <span className="text-sm font-extrabold">{s.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
