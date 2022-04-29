import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "./components/Planet-Page/components/Loading";

// import HomeBody from "./components/HomeBody";
const HomeBody = React.lazy(() => import("./components/HomeBody"));
// import HomePage from "./components/HomePage";
const HomePage = React.lazy(() => import("./components/HomePage"));
// import Contact from "./components/Contact";
const Contact = React.lazy(() => import("./components/Contact"));
// import About from "./components/About";
const About = React.lazy(() => import("./components/About"));
// import PlanetFrame from "./components/Planet-Page/PlanetFrame";
const PlanetFrame = React.lazy(() =>
  import("./components/Planet-Page/PlanetFrame")
);

function App() {
  return (
    <div className="bg-black">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homebody" element={<HomeBody />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/homebody/:planetName" element={<PlanetFrame />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
