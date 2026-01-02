import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Agents for the Software Development Lifecycle",
    video: "videos/cgi.mp4",
    points: [
      <p>End-to-end pipeline: Jira → Intent → Semantic Search → Code Diff → GitHub</p>,
      <p>Multi-step LLM agents generate search queries and refactoring diffs</p>,
      <p>Safe deployment with manual approval before every commit</p>,
      <p><span className = "!font-bold">Skills: </span>Python, Streamlit, LLMs (Agentic Workflows), Semantic Search (ChromaDB), Neo4j, GitHub Automation, Jira API</p>,
      <p>
        <a href="https://github.com/dhruvesh131199/AI-automation-for-SDLC" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
            GitHub Repo
        </a>
      </p>,
    ],
  },
  {
    id: 2,
    title: "Options Strategy Recommender",
    video: "videos/optionStrategy.mp4",
    points: [
      <p>Built a full-stack Options Strategy Recommender using Spring Boot and React, with user inputs for ticker, strategy, expiry, and risk to suggest relevant options positions using Yahoo Finance data.</p>,
      <p>Deployed on Google Cloud Platform with basic CI/CD setup, demonstrating skills in web app development, cloud deployment, and financial data integration.</p>,
      <p><span className = "!font-bold">Skills: </span>Java, Spring Boot, React, Python, Bootstrap, CI/CD, Docker, GCP</p>,
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
    id: 3,
    title: "Automated Covered Call Backtesting Tool",
    video: "videos/backtesting.mp4",
    points: [
      <p>Built a Python-based backtester to simulate covered call options strategies on historical stock data.</p>,
      <p>Automated daily fetch of live stock and options prices; logged results to CSV for transparency.</p>,
      <p>Compared strategy returns with buy-and-hold baseline; visualized outcomes using Matplotlib.</p>,
      <p><span className = "!font-bold">Skills: </span>Python, Pandas, Github workflow, Automation</p>,
      <p>
        <a href="https://github.com/dhruvesh131199/covered_call_daily_update" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
            GitHub Repo
        </a>
      </p>,
    ],
  },
  {
    id: 4,
    title: "Stock Weekly Volatility Predictor",
    video: "videos/stockVolatilityPredictor.mp4",
    points: [
      <p>Built and deployed a full-stack machine learning web app to forecast weekly stock volatility using OHLCV data.</p>,
      <p>Engineered custom features from daily financial data and trained an XGBoost regression model.</p>,
      <p>Developed FastAPI backend to fetch live data, derive custom features, feed data to the model, and serve predictions via REST API.</p>,
      <p><span className = "!font-bold">Skills: </span>Python, XGBoost, FastAPI, Docker, CI/CD, React, Render</p>,
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

  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);
  const next = () => setIndex((i) => (i + 1) % projects.length);

  const project = projects[index];

  return (
    <div id = "projects" className="w-full px-10 mx-auto mb-25 relative">
    <h2 className = "text-5xl md:text-5xl lg:text-5xl mt-20 mb-10 text-white text-center font-bold">Projects</h2>
      {/* Content */}
      <motion.div
        key={project.id}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e, { offset, velocity }) => {
          if (offset.x < -100) {
            next(); // swipe left → next
          } else if (offset.x > 100) {
            prev(); // swipe right → previous
          }
        }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col md:flex-row gap-6 items-center md:items-start"
      >
        {/* Video */}
        <div className="w-full md:w-1/2">
          <video
            src={project.video}
            loop
            autoPlay
            muted
            playsInline
            className="rounded-2xl shadow-lg w-full"
          />
        </div>

        {/* Text */}
        <div className="w-full text-left md:w-1/2 space-y-4">
          <p className="text-2xl bg-gradient-to-r from-amber-400 to-amber-600 text-white text-center p-1 mr-2">{project.title}</p>

          <ul className="list-disc pl-5 space-y-2">
            {project.points.map((p, i) => (
              <li key={i} className="text-white font-light">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Navigation */}
      <button
        onClick={prev}
        className="absolute top-1/2 -left-0.5 -translate-y-1/2 bg-white shadow scale-70 rounded-full p-2"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 -right-0.5 -translate-y-1/2 bg-white shadow scale-70 rounded-full p-2"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
