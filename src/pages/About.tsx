import { PageShell } from "../components/PageShell";
import { about } from "../data/content";
import "./About.css";

export function About() {
  return (
    <PageShell>
      <div className="about anim-fade-up">
        <p className="about__label">About</p>
        <h1 className="about__headline">{about.headline}</h1>

        <div className="about__body">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>

        <section className="about__section">
          <h2>Experience</h2>
          <div className="about__jobs">
            {about.experience.map((job) => (
              <article key={`${job.title}-${job.org}`} className="about__job">
                <header className="about__job-header">
                  <h3 className="about__job-title">
                    {job.title}
                    <span className="about__job-org"> | {job.org}</span>
                  </h3>
                  <p className="about__job-dates">{job.dates}</p>
                </header>
                <ul>
                  {job.points.map((point) => (
                    <li key={point.slice(0, 40)}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="about__section">
          <h2>Skills</h2>
          <p className="about__skills">{about.skills}</p>
        </section>
      </div>
    </PageShell>
  );
}
