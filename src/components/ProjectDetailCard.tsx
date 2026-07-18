import { useEffect, useRef, useState } from "react";
import type { Project, ProjectPoint } from "../data/content";
import "./ProjectDetailCard.css";

type ProjectDetailCardProps = {
  project: Project;
  onClose: () => void;
};

function pointKey(point: ProjectPoint, index: number) {
  if (typeof point === "string") return point.slice(0, 48);
  return `${index}-${point.map((p) => p.text).join("").slice(0, 48)}`;
}

function renderPoint(point: ProjectPoint) {
  if (typeof point === "string") return point;
  return point.map((part, i) =>
    part.bold ? <strong key={i}>{part.text}</strong> : <span key={i}>{part.text}</span>,
  );
}

export function ProjectDetailCard({ project, onClose }: ProjectDetailCardProps) {
  const [visible, setVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeTimeout = useRef<number | null>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  function requestClose() {
    setVisible(false);
    videoRef.current?.pause();
    if (closeTimeout.current) window.clearTimeout(closeTimeout.current);
    closeTimeout.current = window.setTimeout(() => onCloseRef.current(), 280);
  }

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setVisible(false);
        videoRef.current?.pause();
        if (closeTimeout.current) window.clearTimeout(closeTimeout.current);
        closeTimeout.current = window.setTimeout(() => onCloseRef.current(), 280);
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      if (closeTimeout.current) window.clearTimeout(closeTimeout.current);
    };
  }, []);

  const videoSrc = project.video
    ? `${import.meta.env.BASE_URL}${project.video}`
    : undefined;

  return (
    <div
      className={`project-card ${visible ? "project-card--open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-card-title"
    >
      <button
        type="button"
        className="project-card__backdrop"
        aria-label="Close project details"
        onClick={requestClose}
      />

      <div className="project-card__panel">
        <button
          type="button"
          className="project-card__close"
          aria-label="Close"
          onClick={requestClose}
        >
          ×
        </button>

        <h2 id="project-card-title" className="project-card__title">
          {project.title}
          {project.date && (
            <span className="project-card__date">{project.date}</span>
          )}
        </h2>

        {videoSrc && (
          <div className="project-card__media">
            <video
              ref={videoRef}
              src={videoSrc}
              controls
              playsInline
              autoPlay
              muted
              loop
            />
          </div>
        )}

        {project.points && project.points.length > 0 && (
          <ul className="project-card__points">
            {project.points.map((point, index) => (
              <li key={pointKey(point, index)}>{renderPoint(point)}</li>
            ))}
            {project.skills && (
              <li>
                <strong>Skills:</strong> {project.skills}
              </li>
            )}
          </ul>
        )}

        {(project.links.github || project.links.live) && (
          <div className="project-card__links">
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
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
