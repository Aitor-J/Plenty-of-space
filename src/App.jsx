import "./App.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/FooterBar";
import HomeBody from "./components/HomeBody";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const background = {
    text: "Wormhole",
    image: "bg-[url('./src/assets/wormhole.jpg')]",
  };
  axios
    .get(
      `https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=10&sort=-ordre_order&facet=ordre_order&facet=planete_planet&facet=distance_moyenne_average_distance_x10_6_km&facet=diametre_diameter_km&facet=masse_mass_x10_24_kg&facet=periode_de_revolution_an_orbital_period_year&facet=periode_de_rotation_rotation_period_h&facet=gravite_gravity_m_s2&facet=vitesse_orbitale_orbital_velocity_km_s&facet=temperature_moyenne_mean_temperature_degc`
    )
    .then((res) => {
      console.log(res.data.records[0].fields.planete_planet);
    });

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeBody {...background} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
