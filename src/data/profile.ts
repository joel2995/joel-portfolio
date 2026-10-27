// All site content lives here. Edit this file to update the portfolio; no component changes needed.

export const profile = {
  name: "Joel Sundarsingh A",
  firstName: "Joel",
  shirtNumber: 10,
  position: "Forward Deployed Engineer",
  club: "Prodapt",
  location: "Chennai, Tamil Nadu",
  email: "joelsundarsingh2005@gmail.com",
  phone: "+91 877 872 8680",
  tagline: "I build governed, production-ready AI: multi-agent systems you can actually trust.",
  intro:
    "Forward Deployed Engineer trainee at Prodapt. I take AI platforms into real problems end to end (data, models, agents, evaluation, UI) and bring measured findings back to the product team. Backend engineer at heart, ML by training, obsessed with trustworthy AI.",
  links: {
    github: "https://github.com/joel2995",
    linkedin: "https://www.linkedin.com/in/joel-sundarsingh-738443252/",
    leetcode: "https://leetcode.com/u/JoelSundarsingh",
  },
  rating: 89,
};

// Season strip under the hero (jump links), styled like a competition's season-by-season tiles.
export const seasons = [
  { label: "Featured", title: "SentryX on Synapt", href: "#matches" },
  { label: "2026", title: "Prodapt · FDE", href: "#career" },
  { label: "2025", title: "Best Paper Award", href: "#trophies" },
  { label: "2024", title: "UPS · SDE Intern", href: "#career" },
  { label: "2022–26", title: "B.E. CSE · REC", href: "#career" },
];

// FIFA-style attribute card: the six headline attributes.
export const attributes = [
  { code: "AGT", label: "AI Agents", value: 91 },
  { code: "RAG", label: "Retrieval & RAG", value: 90 },
  { code: "BCK", label: "Backend", value: 88 },
  { code: "ML", label: "Machine Learning", value: 87 },
  { code: "GOV", label: "Governance & Trust", value: 92 },
  { code: "SHP", label: "Shipping Speed", value: 89 },
];

export const skillGroups = [
  { title: "Languages", items: ["Python", "Java", "JavaScript", "TypeScript", "SQL"] },
  {
    title: "AI & GenAI",
    items: ["LLMs", "AI Agents", "LangGraph", "LangChain", "RAG (Hybrid, GraphRAG)", "Model Context Protocol", "Prompt Engineering", "LLM-as-Judge", "DeepEval"],
  },
  { title: "Machine Learning", items: ["Scikit-learn", "LightGBM", "Isolation Forest", "SHAP", "Feature Engineering", "Model Evaluation"] },
  { title: "Frameworks", items: ["FastAPI", "Flask", "Spring Boot", "React.js", "Next.js"] },
  { title: "Databases", items: ["PostgreSQL (pgvector)", "MySQL", "MongoDB", "ChromaDB"] },
  { title: "Backend & Systems", items: ["REST APIs", "Microservices", "API Design", "System Integration", "JWT / RBAC", "System Design"] },
  { title: "Tools", items: ["Git", "GitHub Actions", "Docker", "Postman", "Linux", "AWS"] },
];

export const career = [
  {
    club: "Prodapt",
    role: "Forward Deployed Engineer Trainee",
    period: "2026 — Present",
    status: "Current club",
    points: [
      "Deployed Prodapt's Synapt AI context platform end to end for a cybersecurity use case: custom knowledge pack, 4 curated context providers, 9 agent identities with least-privilege grants over MCP.",
      "Evaluated the platform before and after integration and documented 26 product findings with impact and fixes for the Synapt product team.",
    ],
  },
  {
    club: "United Parcel Service (UPS)",
    role: "Software Development Intern",
    period: "Aug — Sep 2024",
    status: "Loan spell",
    points: [
      "Developed a machine-learning recommendation system in Python and Flask, integrated with a React frontend for real-time interaction.",
      "Designed and tested REST APIs and rule-based logistics workflows, resolving backend issues to improve reliability.",
    ],
  },
  {
    club: "Rajalakshmi Engineering College",
    role: "B.E. Computer Science and Engineering · CGPA 8.18",
    period: "2022 — 2026",
    status: "Academy",
    points: ["HSC 94.50% · SSLC 92.20% (Shree Niketan Hr. Sec. School)."],
  },
];

export type Project = {
  name: string;
  kicker: string;
  summary: string;
  stats: { value: string; label: string }[];
  points: string[];
  stack: string[];
  links: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "SentryX",
    kicker: "AI-Powered Cybersecurity Incident Response Assistant",
    summary:
      "Nine AI agents investigate every network alert like a SOC team: what the attack is, whether it was seen before, how urgent it is, and how to respond, with every risky step held for a human.",
    stats: [
      { value: "99.9%", label: "detection accuracy" },
      { value: "21/23", label: "DeepEval metrics pass" },
      { value: "16/16", label: "unauthorised calls blocked" },
      { value: "₹0.13", label: "per investigation" },
    ],
    points: [
      "9-agent LangGraph workflow on CIC-IDS2017 (2.8M flows, 319 incidents): MITRE ATT&CK mapping, three-way verdict (ML + past cases + LLM), explainable P1–P4 prioritisation, playbook response with human approval, LLM judge.",
      "Grounded in Synapt over MCP with per-agent identities; LightGBM + Isolation Forest + SHAP; hybrid search (BM25 + pgvector + RRF); measured before and after Synapt with DeepEval over 363 golden cases.",
    ],
    stack: ["Python", "LangGraph", "FastAPI", "Next.js", "Synapt", "MCP", "LightGBM", "PostgreSQL"],
    links: [{ label: "GitHub", href: "https://github.com/joel2995/AI-Powered-Cybersecurity-Incident-Response-Assistant" }],
    featured: true,
  },
  {
    name: "ResolveX",
    kicker: "AI-Powered Incident Knowledge Base Assistant",
    summary: "An IT incident knowledge assistant that finds the right fix fast, with hybrid retrieval and cooperating agents.",
    stats: [
      { value: "BM25+Vec", label: "hybrid retrieval" },
      { value: "A2A", label: "agent coordination" },
      { value: "MCP", label: "custom server" },
    ],
    points: [
      "Hybrid retrieval (BM25 + bge embeddings in ChromaDB, RRF fusion, cross-encoder reranking) and LangGraph agents with agent-to-agent coordination.",
      "Custom MCP server, LLM fallback chain, input guardrails, FastAPI + SQLAlchemy backend, Next.js UI and GitHub Actions CI.",
    ],
    stack: ["Python", "LangGraph", "FastAPI", "ChromaDB", "Next.js"],
    links: [{ label: "GitHub", href: "https://github.com/joel2995/AI-Powered-Incident-Knowledge-Base-Assistant" }],
  },
  {
    name: "TrustChain",
    kicker: "Transparent, Fraud-Resistant MSME Supply Chains",
    summary: "Tamper-resistant product traceability with fraud detection and smart escrow. Published at Springer and IEEE.",
    stats: [
      { value: "2", label: "publications" },
      { value: "Best", label: "Paper Award" },
    ],
    points: [
      "Secure REST backend services with MongoDB and IPFS for tamper-resistant product traceability across MSME supply chains.",
      "Fraud detection, validation and smart-escrow settlement workflows; Springer ICMLBDA 2025 (Best Paper) and IEEE ICIETSD 2026.",
    ],
    stack: ["REST APIs", "MongoDB", "IPFS", "Blockchain"],
    links: [
      { label: "Frontend", href: "https://github.com/joel2995/trust-chain-frontend" },
      { label: "Backend", href: "https://github.com/joel2995/trust-chain-b2b-backend" },
    ],
  },
];

export const trophies = [
  { title: "Best Paper Award", detail: "Big Data Analytics & Next-Gen Analytics Tracks, ICMLBDA 2025", kind: "Award" },
  { title: "19th Rank", detail: "Sports Data Gameathon 2.0 (FIFS & Dream11): ML fantasy prediction model", kind: "Competition" },
  { title: "Winner", detail: "Internet Ignite Hackathon (REC IEEE CS)", kind: "Hackathon" },
  { title: "NPTEL Discipline Star", detail: "Jan – Apr 2025", kind: "Award" },
];

export const certifications = [
  { title: "Claude Certified Developer – Foundations", issuer: "Anthropic" },
  { title: "Claude Certified Architect – Foundations", issuer: "Anthropic" },
  { title: "AWS Certified Solutions Architect – Associate", issuer: "ICT Academy, 2024" },
  { title: "NPTEL: Human Computer Interaction — Gold Medal", issuer: "NPTEL, 2025" },
];

export const hackathons = [
  { name: "Cardano Hacks 2025", host: "Midnight & EMURGO", what: "Privacy-focused verification with zero-knowledge validation", date: "Nov 2025" },
  { name: "Sports Data Gameathon 2.0", host: "FIFS & Dream11", what: "Python ML fantasy prediction system — 19th rank", date: "Apr 2025" },
  { name: "Unfold 2024", host: "CoinDCX & Crowwd Labs", what: "Secure smart-contract vault with access control", date: "Dec 2024" },
  { name: "Smart India Hackathon", host: "Govt. of India", what: "SHA-256 duplicate detection with automated alerts", date: "Sep 2024" },
];

export const publications = [
  {
    venue: "Springer PROMS — ICMLBDA 2025",
    title: "TrustChain: Building Trust Through Transparent Supply Chains",
    note: "Blockchain-based traceability, secure data sharing and transparent product verification.",
  },
  {
    venue: "IEEE — ICIETSD 2026",
    title: "TrustChain: Intelligent Fraud Detection and Smart Escrow Settlement Framework for MSME Supply Chains",
    note: "Fraud detection and smart escrow for secure, reliable MSME transactions.",
  },
];

export const offThePitch = [
  {
    title: "Football",
    text: "Madridista to the core. Champions League nights at the Bernabéu are my favourite kind of pressure: stay calm, keep the shape, finish in the last minute. I play whenever I can.",
    tag: "¡Hala Madrid!",
  },
  {
    title: "Cricket",
    text: "Grew up with a bat in hand. Cricket taught me patience and reading the game — the same instincts I use when debugging a stubborn system.",
    tag: "Long innings",
  },
  {
    title: "Fantasy Sports & Data",
    text: "Where sport meets ML: my Dream11 Gameathon model ranked 19th. Player form, conditions and constraints are just features waiting to be engineered.",
    tag: "19th rank",
  },
];
