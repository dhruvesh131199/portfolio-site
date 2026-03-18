import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


const projects = [
  {
    id: 1,
    title: "AI Alerts Generator",
    video: "slides/aialertsdemo.mp4",
    isNew: true,
    points: [
      <p>AI agent that turns plain-English scenarios into SQL reports — no coding required.</p>,
      <p>Human-in-the-loop approval gate: the agent generates SQL, you review and approve before anything runs.</p>,
      <p>Built with MCP-style tool-use: the LLM autonomously chains <span className="font-mono text-amber-300">get_schema</span> → <span className="font-mono text-amber-300">present_query</span> → <span className="font-mono text-amber-300">run_query</span> → <span className="font-mono text-amber-300">create_excel</span>.</p>,
      <p><span className="!font-bold">Skills: </span>Python, Flask, React, Groq API (Llama 3.3), AI Agents, MCP, PostgreSQL, Docker</p>,
    ],
    caseStudyLink: "/projects/ai-alerts",
  },
  {
    id: 2,
    title: "AI Agents for the Software Development Lifecycle",
    video: "videos/cgi.mp4",
    points: [
      <p>End-to-end pipeline: Jira → Intent → Semantic Search → Code Diff → GitHub</p>,
      <p>Multi-step LLM agents generate search queries and refactoring diffs</p>,
      <p>Safe deployment with manual approval before every commit</p>,
      <p><span className="!font-bold">Skills: </span>Python, Streamlit, LLMs (Agentic Workflows), Semantic Search (ChromaDB), Neo4j, GitHub Automation, Jira API</p>,
      <p>
        <a href="https://github.com/dhruvesh131199/AI-automation-for-SDLC" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </p>,
    ],
  },
  {
    id: 3,
    title: "Options Strategy Recommender",
    video: "videos/optionStrategy.mp4",
    points: [
      <p>Built a full-stack Options Strategy Recommender using Spring Boot and React, with user inputs for ticker, strategy, expiry, and risk to suggest relevant options positions using Yahoo Finance data.</p>,
      <p>Deployed on Google Cloud Platform with basic CI/CD setup, demonstrating skills in web app development, cloud deployment, and financial data integration.</p>,
      <p><span className="!font-bold">Skills: </span>Java, Spring Boot, React, Python, Bootstrap, CI/CD, Docker, GCP</p>,
      <p>
        <a href="https://github.com/dhruvesh131199/Options-Trade-Recommender" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a><span> | </span>
        <a href="https://option-recommender-frontend-92837797412.europe-west1.run.app/" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
          Live App
        </a>
      </p>,
    ],
  },
  {
    id: 4,
    title: "Automated Covered Call Backtesting Tool",
    video: "videos/backtesting.mp4",
    points: [
      <p>Built a Python-based backtester to simulate covered call options strategies on historical stock data.</p>,
      <p>Automated daily fetch of live stock and options prices; logged results to CSV for transparency.</p>,
      <p>Compared strategy returns with buy-and-hold baseline; visualized outcomes using Matplotlib.</p>,
      <p><span className="!font-bold">Skills: </span>Python, Pandas, Github workflow, Automation</p>,
      <p>
        <a href="https://github.com/dhruvesh131199/covered_call_daily_update" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </p>,
    ],
  },
  {
    id: 5,
    title: "Stock Weekly Volatility Predictor",
    video: "videos/stockVolatilityPredictor.mp4",
    points: [
      <p>Built and deployed a full-stack machine learning web app to forecast weekly stock volatility using OHLCV data.</p>,
      <p>Engineered custom features from daily financial data and trained an XGBoost regression model.</p>,
      <p>Developed FastAPI backend to fetch live data, derive custom features, feed data to the model, and serve predictions via REST API.</p>,
      <p><span className="!font-bold">Skills: </span>Python, XGBoost, FastAPI, Docker, CI/CD, React, Render</p>,
      <p>
        <a href="https://github.com/dhruvesh131199/volatility-predictor-machine-learning" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a><span> | </span>
        <a href="https://volatility-predictor.onrender.com/" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
          Live App
        </a>
      </p>,
    ],
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);
  const next = () => setIndex((i) => (i + 1) % projects.length);

  const project = projects[index];

  return (
    <div id="projects" className="w-full px-10 mx-auto mb-25 relative">
      <h2 className="text-5xl md:text-5xl lg:text-5xl mt-20 mb-10 text-white text-center font-bold">Projects</h2>

      <motion.div
        key={project.id}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e, { offset }) => {
          if (offset.x < -100) next();
          else if (offset.x > 100) prev();
        }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col md:flex-row gap-6 items-center md:items-start"
      >
        {/* Left — video or placeholder */}
        <div className="w-full md:w-1/2">
          {project.video ? (
            <video
              src={project.video}
              loop
              autoPlay
              muted
              playsInline
              className="rounded-2xl shadow-lg w-full"
            />
          ) : (
            /* AI Alerts placeholder — dark terminal card */
            <div
              className="rounded-2xl w-full flex flex-col justify-between cursor-pointer group"
              style={{ background: "#0c0f14", border: "1.5px solid #4ade8044", minHeight: 260, padding: "28px 24px" }}
              onClick={() => navigate("/projects/ai-alerts")}
            >
              <div>
                <p style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.15em", color: "#4ade80", marginBottom: 16 }}>
                  SUSPICIOUS TRANSACTION REPORT GENERATOR
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {["Customers with transactions 5× their monthly income", "Accounts dormant 6 months with sudden activity", "High-volume same-day transactions"].map((ex) => (
                    <div key={ex} style={{ fontFamily: "monospace", fontSize: 12, color: "#4b5563", borderLeft: "2px solid #1e2535", paddingLeft: 10 }}>
                      {ex}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontFamily: "monospace", fontSize: 12, color: "#4ade80", letterSpacing: "0.1em" }}>
                  VIEW FULL CASE STUDY
                </span>
                <span style={{ color: "#4ade80", fontSize: 14 }}>→</span>
              </div>
            </div>
          )}
        </div>

        {/* Right — text */}
        <div className="w-full text-left md:w-1/2 space-y-4">
          <div className="flex items-center gap-3">
            <p className="text-2xl bg-gradient-to-r from-amber-400 to-amber-600 text-white text-center p-1 mr-2">
              {project.title}
            </p>
            {project.isNew && (
              <span style={{ fontSize: 10, fontFamily: "monospace", letterSpacing: "0.1em", background: "#4ade8022", color: "#4ade80", border: "1px solid #4ade8055", borderRadius: 4, padding: "2px 8px" }}>
                NEW
              </span>
            )}
          </div>

          <ul className="list-disc pl-5 space-y-2">
            {project.points.map((p, i) => (
              <li key={i} className="text-white font-light">{p}</li>
            ))}
          </ul>

          {project.caseStudyLink && (
            <button
              onClick={() => navigate(project.caseStudyLink)}
              className="mt-2 text-sm font-mono tracking-widest text-amber-400 border border-amber-400 border-opacity-40 px-4 py-2 rounded hover:bg-amber-400 hover:text-black transition-all duration-200"
            >
              FULL CASE STUDY →
            </button>
          )}
        </div>
      </motion.div>

      {/* Navigation arrows */}
      <button onClick={prev} className="absolute top-1/2 -left-0.5 -translate-y-1/2 bg-white shadow scale-70 rounded-full p-2">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={next} className="absolute top-1/2 -right-0.5 -translate-y-1/2 bg-white shadow scale-70 rounded-full p-2">
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
