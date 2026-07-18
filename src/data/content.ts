export const site = {
  name: "Dhruvesh Chauhan",
  year: new Date().getFullYear(),
  email: "dhruvesh.chauhan13@gmail.com",
  linkedin: "https://www.linkedin.com/in/dhruveshchauhan/",
  github: "https://github.com/dhruvesh131199",
  resume: `${import.meta.env.BASE_URL}resume/DhruveshResume.pdf`,
  tagline:
    "Master’s student at Rutgers — Computer & Information Sciences — building AI systems, full-stack products, and financial tooling. Seeking Summer & Fall 2026 co-op / internship opportunities.",
};

export const nav = [
  { label: "WORK", to: "/work" },
  { label: "ABOUT", to: "/about" },
  { label: "RESUME", to: "/resume", external: true, href: site.resume },
  { label: "CONTACT", to: "/contact" },
] as const;

export const projects = [
  {
    title: "AI Alerts Generator",
    role: "AI Agent · Full Stack",
    blurb:
      "Turns plain-English scenarios into SQL reports with a human-in-the-loop approval gate before anything runs.",
    links: {
      github: "https://github.com/dhruvesh131199/AI-Agent-to-generate-suspicious-reports",
      live: "https://suspicious-reports-ui.onrender.com/",
    },
    skills: ["Python", "Flask", "React", "Groq", "PostgreSQL", "Docker"],
  },
  {
    title: "AI Agents for the SDLC",
    role: "Agentic Workflow · Automation",
    blurb:
      "End-to-end pipeline from Jira intent through semantic search and code diffs to GitHub, with manual approval before every commit.",
    links: {
      github: "https://github.com/dhruvesh131199/AI-automation-for-SDLC",
    },
    skills: ["Python", "Streamlit", "ChromaDB", "Neo4j", "LLMs"],
  },
  {
    title: "Options Strategy Recommender",
    role: "Full Stack · FinTech",
    blurb:
      "Suggests options positions from ticker, strategy, expiry, and risk inputs using live market data.",
    links: {
      github: "https://github.com/dhruvesh131199/Options-Trade-Recommender",
      live: "https://options-trade-recommender.onrender.com/",
    },
    skills: ["Java", "Spring Boot", "React", "Docker", "GCP"],
  },
  {
    title: "Covered Call Backtester",
    role: "Python · Quant Tools",
    blurb:
      "Simulates covered-call strategies on historical data and compares returns against buy-and-hold.",
    links: {
      github: "https://github.com/dhruvesh131199/covered_call_daily_update",
    },
    skills: ["Python", "Pandas", "Automation"],
  },
  {
    title: "Stock Volatility Predictor",
    role: "ML · Full Stack",
    blurb:
      "Forecasts weekly stock volatility with engineered OHLCV features and an XGBoost model served via FastAPI.",
    links: {
      github: "https://github.com/dhruvesh131199/volatility-predictor-machine-learning",
      live: "https://volatility-predictor.onrender.com/",
    },
    skills: ["Python", "XGBoost", "FastAPI", "React", "Docker"],
  },
];

export const about = {
  headline: "I'm Dhruvesh. A builder, systems thinker, and problem solver.",
  paragraphs: [
    "I'm curious and analytical — drawn to systems that solve complex, real-world problems. Whether it's an AI agent that writes SQL under human supervision, or a full-stack tool that turns market data into decisions, I care about shipping things that work and that people can trust.",
    "I'm currently pursuing a Master's in Computer & Information Sciences at Rutgers University–New Brunswick, and looking for Summer & Fall 2026 co-op / internship roles where I can contribute to product engineering, AI systems, or data-heavy applications.",
    "I don't want to build clever demos for their own sake. I want to build ideas and products that are real, that matter, and that hold up when someone actually uses them.",
  ],
  experience: [
    "Master's in Computer & Information Sciences — Rutgers University",
    "Full-stack apps across React, Spring Boot, FastAPI, and Flask",
    "AI agents with tool-use, human-in-the-loop gates, and MCP-style workflows",
    "Financial tooling: options strategies, backtesting, volatility models",
    "Cloud & delivery: Docker, CI/CD, GCP, Render",
  ],
  skills:
    "Python / Java / React / FastAPI / Flask / Spring Boot / PostgreSQL / MongoDB / Docker / AWS / GCP / Pandas / NumPy / XGBoost / LLMs / MCP / Git / Tableau",
};
