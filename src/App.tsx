import { Routes, Route } from "react-router-dom";

import "./App.css";
import DemoraMap from "./components/demoramap/DemoraMap";

import { NavBar } from "./components/navbar/NavBar";
import { Home } from "./pages/Home";
import { Timeline } from "./pages/Timeline";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="demora" element={<DemoraMap/>}/>
        <Route path="timeline" element={<Timeline/>}/>
      </Routes>
    </>
  );
}

export default App;
