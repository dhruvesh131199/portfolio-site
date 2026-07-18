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
          <ul>
            {about.experience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="about__section">
          <h2>Skills</h2>
          <p className="about__skills">{about.skills}</p>
        </section>
      </div>
    </PageShell>
  );
}
