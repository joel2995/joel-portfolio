"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "#profile", label: "Profile" },
  { href: "#career", label: "Career" },
  { href: "#matches", label: "Projects" },
  { href: "#trophies", label: "Trophies" },
  { href: "#off-the-pitch", label: "Off the Pitch" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled || open ? "bg-night/90 backdrop-blur" : "bg-transparent"}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Main">
        <a href="#top" className="flex items-center gap-3 text-white">
          <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-gold font-display text-lg text-gold">
            {profile.shirtNumber}
          </span>
          <span className="font-display text-2xl tracking-wider">JOEL</span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-white/80 transition-colors hover:text-gold">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="rounded-md p-2 text-white md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>
      {open && (
        <ul className="border-t border-white/10 bg-night px-4 pb-4 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-white/85 hover:text-gold">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
