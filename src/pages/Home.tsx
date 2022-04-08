import { Timeline } from "../components/Timeline";
import "./Home.css";


export function Home() {
  return (
    <div className="home-screen">
      <div id={"title"}>
        <h1>
          Welcome to
          <br />
          Telos
        </h1>
        <h4>A Fanatasy World <br/>created by<br/>Stefan Jackisch</h4>
      </div>
      <Timeline/>
    </div>
  );
}
