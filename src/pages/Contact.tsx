import { PageShell } from "../components/PageShell";
import { site } from "../data/content";
import "./Contact.css";

export function Contact() {
  return (
    <PageShell>
      <div className="contact anim-fade-up">
        <h1 className="contact__title">CONTACT</h1>
        <p className="contact__intro">
          Open to Summer &amp; Fall 2026 co-op / internship conversations —
          product engineering, AI systems, or data-heavy applications.
        </p>

        <ul className="contact__list">
          <li>
            <span className="contact__label">Email</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li>
            <span className="contact__label">LinkedIn</span>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              linkedin.com/in/dhruveshchauhan
            </a>
          </li>
          <li>
            <span className="contact__label">GitHub</span>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              github.com/dhruvesh131199
            </a>
          </li>
        </ul>
      </div>
    </PageShell>
  );
}
