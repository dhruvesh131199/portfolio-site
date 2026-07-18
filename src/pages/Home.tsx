import { Link } from "react-router-dom";
import { PageShell } from "../components/PageShell";
import { nav, site } from "../data/content";
import "./Home.css";

export function Home() {
  return (
    <PageShell showHome={false} className="home">
      <div className="home__layout">
        <div className="home__bio anim-fade-up" style={{ animationDelay: "0.15s" }}>
          <img
            className="home__photo"
            src={`${import.meta.env.BASE_URL}profile/profile.png`}
            alt={site.name}
          />
          <h1 className="home__name">{site.name}</h1>
          <p className="home__tagline">
            Master’s student at Rutgers — Computer &amp; Information Sciences —
            building AI systems and full-stack products. Seeking Fall 2026
            co-op / internship opportunities and full-time roles.
          </p>
        </div>

        <nav className="home__nav" aria-label="Primary">
          <ul>
            {nav.map((item, i) => (
              <li
                key={item.label}
                className="anim-fade-up"
                style={{ animationDelay: `${0.2 + i * 0.08}s` }}
              >
                {"external" in item && item.external ? (
                  <a
                    className="home__nav-link"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link className="home__nav-link" to={item.to}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </PageShell>
  );
}
