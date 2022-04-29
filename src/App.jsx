import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeBody from "./components/HomeBody";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import About from "./components/About";
import PlanetFrame from "./components/Planet-Page/PlanetFrame";
import HomeFrame from "./components/House-Page/HomeFrame";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homebody" element={<HomeBody />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/homeframe" element={<HomeFrame />} />
        <Route path="/homebody/:planetName" element={<PlanetFrame />} />
      </Routes>
    </div>
  );
}

export default App;
