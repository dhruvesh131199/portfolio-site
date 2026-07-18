import { useState } from "react";
import { PageShell } from "../components/PageShell";
import { ProjectDetailCard } from "../components/ProjectDetailCard";
import { projects, type Project } from "../data/content";
import "./Projects.css";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <PageShell>
      <div className="projects anim-fade-up">
        <header className="projects__header">
          <h1 className="projects__title">PROJECTS</h1>
          <p className="projects__intro">
            A selection of projects across AI agents and full-stack products —
            systems I built to solve concrete problems.
          </p>
        </header>

        <ul className="projects__list">
          {projects.map((project, i) => {
            const clickable = project.hasDetail;
            return (
              <li
                key={project.id}
                className={`projects__item anim-fade-up${clickable ? " projects__item--clickable" : ""}`}
                style={{ animationDelay: `${0.12 + i * 0.06}s` }}
                onClick={() => {
                  if (clickable) setActive(project);
                }}
                onKeyDown={(event) => {
                  if (!clickable) return;
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActive(project);
                  }
                }}
                role={clickable ? "button" : undefined}
                tabIndex={clickable ? 0 : undefined}
              >
                <h2 className="projects__item-title">
                  {project.title}
                  {project.date && (
                    <span className="projects__item-date">{project.date}</span>
                  )}
                </h2>
                <p className="projects__item-blurb">{project.blurb}</p>
              </li>
            );
          })}
        </ul>
      </div>

      {active && (
        <ProjectDetailCard project={active} onClose={() => setActive(null)} />
      )}
    </PageShell>
  );
}
