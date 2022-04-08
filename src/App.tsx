import { Routes, Route } from "react-router-dom";

import "./App.css";
import DemoraMap from "./components/demoramap/DemoraMap";

import { NavBar } from "./components/navbar/NavBar";
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
