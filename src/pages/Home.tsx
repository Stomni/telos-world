import { Footer } from "../components/footer/Footer";
import { Recap } from "../components/recap/recap";
import "./Home.css";

export function Home() {
  return (
    <section className="home-screen">
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
      <Footer/>
    </section>
  );
}
