import type { Metadata, Viewport } from "next";
// Fonts are bundled with the app (Fontsource), so the build never depends on fetching from Google.
import "@fontsource/bebas-neue/latin-400.css";
import "@fontsource-variable/inter/index.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joel Sundarsingh A · Forward Deployed Engineer",
  description:
    "Portfolio of Joel Sundarsingh A: Forward Deployed Engineer building governed, production-ready AI. Multi-agent systems, RAG, MCP, ML and backend engineering.",
  openGraph: {
    title: "Joel Sundarsingh A · Forward Deployed Engineer",
    description: "Governed, production-ready AI: multi-agent systems, RAG, MCP, ML and backend engineering.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#07122b" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
