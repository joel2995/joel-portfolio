import type { ReactNode } from "react";

/** A page section with a small matchday-style label and a bold headline. */
export function Section({
  id,
  number,
  eyebrow,
  title,
  intro,
  tone = "light",
  children,
}: {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "light" | "white" | "dark";
  children: ReactNode;
}) {
  const bg = tone === "dark" ? "night text-white" : tone === "white" ? "bg-card" : "bg-page";
  const sub = tone === "dark" ? "text-white/70" : "text-ink-2";
  const label = tone === "dark" ? "text-volt" : "text-pitch";
  return (
    <section id={id} className={`${bg} px-4 py-20 sm:px-6 sm:py-24`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className={`text-xs font-bold uppercase tracking-[0.22em] ${label}`}>
            {number} · {eyebrow}
          </p>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{title}</h2>
          <div className="volt-rule mt-4" />
          {intro && <p className={`mt-5 text-base leading-relaxed sm:text-lg ${sub}`}>{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

export function Chip({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  const cls = tone === "dark" ? "border-white/15 bg-white/5 text-white/85" : "border-line bg-page text-ink-2";
  return <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${cls}`}>{children}</span>;
}

/** Small inline icons (no icon library needed). */
export function Icon({ name, className = "h-4 w-4" }: { name: "github" | "linkedin" | "mail" | "code" | "arrow" | "phone" | "pin" | "star"; className?: string }) {
  const common = { className, fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, viewBox: "0 0 24 24", "aria-hidden": true };
  switch (name) {
    case "github":
      return (
        <svg {...common}>
          <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "star":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9z" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
  }
}
