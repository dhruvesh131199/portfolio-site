import { PageShell } from "../components/PageShell";
import { projects } from "../data/content";
import "./Work.css";

export function Work() {
  return (
    <PageShell>
      <div className="work anim-fade-up">
        <header className="work__header">
          <h1 className="work__title">WORK</h1>
          <p className="work__intro">
            A selection of projects across AI agents, full-stack products, and
            financial tooling — systems I built to solve concrete problems.
          </p>
        </header>

        <ul className="work__list">
          {projects.map((project, i) => (
            <li
              key={project.title}
              className="work__item anim-fade-up"
              style={{ animationDelay: `${0.12 + i * 0.06}s` }}
            >
              <div className="work__item-top">
                <h2 className="work__item-title">{project.title}</h2>
                <span className="work__item-role">{project.role}</span>
              </div>
              <p className="work__item-blurb">{project.blurb}</p>
              <div className="work__item-meta">
                <p className="work__item-skills">{project.skills.join(" · ")}</p>
                <div className="work__item-links">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
