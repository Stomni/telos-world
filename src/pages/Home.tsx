import { Recap } from "../components/recap/recap";
import "./Home.css";

export function Home() {
  return (
    <div className="home-screen">
      <div id="title">
        <h1>
          Welcome to
          <br />
          Telos
        </h1>
        <h4>
          A Fanatasy World <br />
          created by
          <br />
          Stefan Jackisch
        </h4>
      </div>
      <Recap />
      <footer className="home-footer">
        <div className="footer-links">
          <a>Contact</a>
          <a>About</a>
          <a>Terms</a>
          <a>Report a bug</a>
        </div>
      </footer>
    </div>
  );
}
