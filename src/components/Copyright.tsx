import { site } from "../data/content";
import "./Copyright.css";

export function Copyright() {
  return (
    <p className="copyright" aria-hidden="true">
      © {site.year}
    </p>
  );
}
