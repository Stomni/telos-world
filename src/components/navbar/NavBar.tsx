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
          <Link to="/">Glossar</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
      </ul>
    </nav>
  );
}
