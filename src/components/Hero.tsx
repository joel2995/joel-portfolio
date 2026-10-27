import { attributes, profile } from "@/data/profile";
import { Icon } from "./Section";

/** Kick-off: stadium-night hero with a gold player card. */
export function Hero() {
  return (
    <section id="top" className="stadium relative overflow-hidden px-4 pb-20 pt-32 text-white sm:px-6 sm:pt-36">
      <div className="pitch-lines pointer-events-none absolute inset-0" aria-hidden />
      {/* centre circle on the pitch */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full border border-white/10" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div className="rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Kick-off · {profile.club}
          </p>
          <h1 className="mt-6 font-display text-6xl leading-[0.9] tracking-wide sm:text-7xl lg:text-8xl">
            {profile.name.split(" ").slice(0, 2).join(" ")}
            <span className="block text-gold">{profile.position}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{profile.tagline}</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#matches" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-night transition hover:bg-gold-soft">
              See the highlights <Icon name="arrow" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold transition hover:border-gold hover:text-gold">
              Sign me <Icon name="mail" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-white/70">
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold">
              <Icon name="github" /> GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold">
              <Icon name="linkedin" /> LinkedIn
            </a>
            <a href={profile.links.leetcode} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold">
              <Icon name="code" /> LeetCode
            </a>
            <span className="inline-flex items-center gap-2">
              <Icon name="pin" /> {profile.location}
            </span>
          </div>
        </div>

        {/* The player card */}
        <div className="float mx-auto w-full max-w-[300px]" aria-label="Player card">
          <div className="player-card px-7 pb-14 pt-9 text-night">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-display text-6xl leading-none">{profile.rating}</p>
                <p className="font-display text-xl tracking-widest">FDE</p>
              </div>
              <p className="font-display text-5xl leading-none opacity-80">#{profile.shirtNumber}</p>
            </div>
            <div className="mt-5 grid h-28 place-items-center rounded-lg bg-night/10">
              <span className="font-display text-6xl tracking-wider">JS</span>
            </div>
            <p className="mt-4 text-center font-display text-3xl tracking-widest">{profile.firstName.toUpperCase()}</p>
            <div className="mx-auto my-3 h-px w-3/4 bg-night/30" />
            <dl className="grid grid-cols-2 gap-x-5 gap-y-1.5 text-sm">
              {attributes.map((a) => (
                <div key={a.code} className="flex items-baseline justify-between gap-2">
                  <dt className="font-semibold opacity-75">{a.code}</dt>
                  <dd className="font-display text-xl">{a.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
