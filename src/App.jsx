import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeBody from "./components/HomeBody";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import About from "./components/About";
import PlanetFrame from "./components/Planet-Page/PlanetFrame";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homebody" element={<HomeBody />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/homebody/mars" element={<PlanetFrame />} />
      </Routes>
    </div>
  );
}

export default App;
