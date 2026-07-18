import { Link } from "react-router-dom";
import "./HomeMark.css";

export function HomeMark() {
  return (
    <Link to="/" className="home-mark anim-fade-in">
      HOME
    </Link>
  );
}
