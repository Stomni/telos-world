import { Link } from "react-router-dom";

import "./NavBar.css";

export function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/demora">Continents</Link>
        </li>
        <li>
          <Link to="/glossar">Glossar</Link>
        </li>
        <li>
          <Link to="/timeline">Timeline</Link>
        </li>
      </ul>
    </nav>
  );
}
