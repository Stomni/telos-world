import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Squash as Hamburger } from "hamburger-react";

import "./NavBar.css";
import { useState } from "react";

export function NavBar() {
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const [isOpen, setOpen] = useState(false);

  return !isMobile ? (
    <nav className="nav-bar">
      <ul className="nav-links">
        <li
          onClick={() => {
            console.log("hello");
            setOpen(!isOpen);
          }}
        >
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link
            to="/demora"
            onClick={() => {
              setOpen(!isOpen);
            }}
          >
            Continents
          </Link>
        </li>
        <li>
          <Link
            to="/glossar"
            onClick={() => {
              setOpen(!isOpen);
            }}
          >
            Glossar
          </Link>
        </li>
        <li>
          <Link
            to="/timeline"
            onClick={() => {
              setOpen(!isOpen);
            }}
          >
            Timeline
          </Link>
        </li>
      </ul>
    </nav>
  ) : (
    <>
      {isOpen && (
        <div className="mobile-overlay">
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
        </div>
      )}
      <div className="mobile-menu-nav">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
      </div>
    </>
  );
}
