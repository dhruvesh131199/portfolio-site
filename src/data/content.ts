export const site = {
  name: "Dhruvesh Chauhan",
  year: new Date().getFullYear(),
  email: "dhruvesh.chauhan13@gmail.com",
  linkedin: "https://www.linkedin.com/in/dhruveshchauhan/",
  github: "https://github.com/dhruvesh131199",
  resume: `${import.meta.env.BASE_URL}resume/DhruveshResume.pdf`,
  tagline:
    "Master’s student at Rutgers — Computer & Information Sciences — building AI systems and full-stack products. Seeking Fall 2026 co-op / internship opportunities and full-time roles.",
};

export const nav = [
  { label: "PROJECTS", to: "/projects" },
  { label: "ABOUT", to: "/about" },
  { label: "RESUME", to: "/resume", external: true, href: site.resume },
  { label: "CONTACT", to: "/contact" },
] as const;

export type ProjectPointPart = {
  text: string;
  bold?: boolean;
};

export type ProjectPoint = string | ProjectPointPart[];

export type Project = {
  id: string;
  title: string;
  blurb: string;
  hasDetail: boolean;
  date?: string;
  video?: string;
  points?: ProjectPoint[];
  skills?: string;
  links: {
    github?: string;
    live?: string;
  };
};

export const projects: Project[] = [
  {
    id: "finsight",
    title: "Agentic Investment Analytics Platform (MCP & RAG)",
    date: "06/2026 – PRESENT",
    blurb:
      "MCP-driven AI financial platform with RAG for SEC 10-K analysis, XBRL DCF modeling, and multi-tenant live dashboards.",
    hasDetail: true,
    video: "videos/finsight.mp4",
    points: [
      [
        { text: "Architected an MCP-driven AI financial platform ", bold: true },
        {
          text: "integrating Python, FastAPI, and React, deploying 7+ MCP tools to offload mathematical modeling from LLMs to a robust backend.",
        },
      ],
      [
        { text: "Developed a production-grade RAG pipeline", bold: true },
        { text: " for SEC 10-K analysis using " },
        { text: "AWS RDS PostgreSQL/pgvector", bold: true },
        {
          text: ", executing semantic chunking and reranking to generate highly cited, grounded financial insights.",
        },
      ],
      [
        {
          text: "Optimized data ingestion pipelines, reducing multi-ticker processing latency by 46% (195s to 105s)",
          bold: true,
        },
        {
          text: " through asyncio concurrency, parallel embedding batches, and resolving asynchronous event loop bottlenecks.",
        },
      ],
      [
        {
          text: "Engineered and deployed a multi-tenant session architecture on AWS EC2, ",
          bold: true,
        },
        {
          text: "synchronizing out-of-process MCP and REST APIs to enable real-time, link-isolated dashboard polling without authentication friction.",
        },
      ],
      [
        {
          text: "Built a deterministic XBRL financial analysis engine",
          bold: true,
        },
        {
          text: " that automates the extraction and integrity validation of multi-year financial statements, bypassing LLM hallucination for accurate Discounted Cash Flow (DCF) modeling and comparative analysis.",
        },
      ],
    ],
    links: {
      github: "https://github.com/dhruvesh131199/MCP-Financial-model-builder",
      live: "https://finsight-mcp-app.onrender.com/",
    },
  },
  {
    id: "ai-alerts",
    title: "Agentic Text-to-SQL Reporting Engine",
    date: "03/2026",
    blurb:
      "AI-driven text-to-SQL pipeline with MCP and human-in-the-loop approval — from natural language to Excel reports.",
    hasDetail: true,
    video: "slides/aialertsdemo.mp4",
    points: [
      [
        {
          text: "Architected an AI-driven text-to-SQL pipeline ",
          bold: true,
        },
        {
          text: "utilizing Model Context Protocol (MCP) and Groq, empowering non-technical stakeholders to autonomously query relational databases.",
        },
      ],
      [
        {
          text: "Engineered a dynamic schema-injection pipeline",
          bold: true,
        },
        {
          text: " that feeds human-readable data dictionaries into the LLM context window, drastically reducing query hallucinations and SQL syntax errors.",
        },
      ],
      [
        {
          text: "Developed a Human-in-the-Loop (HITL)",
          bold: true,
        },
        {
          text: " security architecture within the Flask backend, enforcing administrative UI approval for generated queries to prevent SQL injection and destructive database operations.",
        },
      ],
      "Automated the complete data extraction lifecycle from natural language prompt to finalized Excel download, eliminating the need for developer tickets and reducing report generation time from days to minutes.",
    ],
    links: {
      github:
        "https://github.com/dhruvesh131199/AI-Agent-to-generate-suspicious-reports",
      live: "https://suspicious-reports-ui.onrender.com",
    },
  },
  {
    id: "sdlc",
    title: "AI-Powered SDLC Automation",
    blurb:
      "End-to-end pipeline from Jira intent through semantic search and code diffs to GitHub, with manual approval before every commit.",
    hasDetail: true,
    video: "videos/cgi.mp4",
    points: [
      "End-to-end pipeline: Jira → Intent → Semantic Search → Code Diff → GitHub",
      "Multi-step LLM agents generate search queries and refactoring diffs",
      "Safe deployment with manual approval before every commit",
    ],
    skills:
      "Python, Streamlit, LLMs (Agentic Workflows), Semantic Search (ChromaDB), Neo4j, GitHub Automation, Jira API",
    links: {
      github: "https://github.com/dhruvesh131199/AI-automation-for-SDLC",
    },
  },
  {
    id: "options",
    title: "Options Strategy Recommender",
    blurb:
      "Suggests options positions from ticker, strategy, expiry, and risk inputs using live market data.",
    hasDetail: true,
    video: "videos/optionStrategy.mp4",
    points: [
      "Built a full-stack Options Strategy Recommender using Spring Boot and React, with user inputs for ticker, strategy, expiry, and risk to suggest relevant options positions using Yahoo Finance data.",
      "Deployed on Google Cloud Platform with basic CI/CD setup, demonstrating skills in web app development, cloud deployment, and financial data integration.",
    ],
    skills: "Java, Spring Boot, React, Python, Bootstrap, CI/CD, Docker, GCP",
    links: {
      github: "https://github.com/dhruvesh131199/Options-Trade-Recommender",
      live: "https://option-recommender-frontend-92837797412.europe-west1.run.app/",
    },
  },
  {
    id: "covered-call",
    title: "Covered Call Backtester",
    blurb:
      "Simulates covered-call strategies on historical data and compares returns against buy-and-hold.",
    hasDetail: true,
    video: "videos/backtesting.mp4",
    points: [
      "Built a Python-based backtester to simulate covered call options strategies on historical stock data.",
      "Automated daily fetch of live stock and options prices; logged results to CSV for transparency.",
      "Compared strategy returns with buy-and-hold baseline; visualized outcomes using Matplotlib.",
    ],
    skills: "Python, Pandas, Github workflow, Automation",
    links: {
      github: "https://github.com/dhruvesh131199/covered_call_daily_update",
    },
  },
  {
    id: "volatility",
    title: "Stock Volatility Predictor",
    blurb:
      "Forecasts weekly stock volatility with engineered OHLCV features and an XGBoost model served via FastAPI.",
    hasDetail: true,
    video: "videos/stockVolatilityPredictor.mp4",
    points: [
      "Built and deployed a full-stack machine learning web app to forecast weekly stock volatility using OHLCV data.",
      "Engineered custom features from daily financial data and trained an XGBoost regression model.",
      "Developed FastAPI backend to fetch live data, derive custom features, feed data to the model, and serve predictions via REST API.",
    ],
    skills: "Python, XGBoost, FastAPI, Docker, CI/CD, React, Render",
    links: {
      github:
        "https://github.com/dhruvesh131199/volatility-predictor-machine-learning",
      live: "https://volatility-predictor.onrender.com/",
    },
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
