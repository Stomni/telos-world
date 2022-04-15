import { Routes, Route } from "react-router-dom";

import "./App.css";
import DemoraMap from "./components/demoramap/DemoraMap";

import { NavBar } from "./components/navbar/NavBar";
import { Glossar } from "./pages/Glossar";
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
        <Route path="glossar" element={<Glossar/>}/>
      </Routes>
    </>
  );
}

export default App;
