import { Routes, Route } from "react-router-dom";

import "./App.css";
import DemoraMap from "./components/DemoraMap";

import "./components/DemoraMap.css";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="demora" element={<DemoraMap/>}/>

      </Routes>
    </>
  );
}

export default App;
