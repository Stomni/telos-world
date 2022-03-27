import "./NavBar.css";

export function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Continents</a>
        </li>
        <li>
          <a href="/">Glossar</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
    </nav>
  );
}
