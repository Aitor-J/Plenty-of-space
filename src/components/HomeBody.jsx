import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import utils from "../lib/utils";
import planetNav from "../planetNav";
import image from "../assets/images/stars.png";
// import NavBar from "./NavBar";
const NavBar = React.lazy(() => import("./NavBar"));
// import FooterBar from "./FooterBar";
const FooterBar = React.lazy(() => import("./FooterBar"));

const HomeBody = () => {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=10&sort=-ordre_order&facet=ordre_order&facet=planete_planet&facet=distance_moyenne_average_distance_x10_6_km&facet=diametre_diameter_km&facet=masse_mass_x10_24_kg&facet=periode_de_revolution_an_orbital_period_year&facet=periode_de_rotation_rotation_period_h&facet=gravite_gravity_m_s2&facet=vitesse_orbitale_orbital_velocity_km_s&facet=temperature_moyenne_mean_temperature_degc`
      )
      .then((res) => res.data.records)
      .then((data) => setPlanets(data.slice(1)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ backgroundImage: `url('${image}')` }}>
      <NavBar />

      <div className="items-center">
        <div className="flex text-center grid-flow-row  content-around  justify-center my-auto p-1/5 w-full z-50 mt-[20vh]  ">
          {planetNav.map((planet, index) => (
            <Link key={index} to={planet.path}>
              <div className="flex justify-around transition duration-1000 ease-in-out hover:brightness-150 white hover:scale-150">
                <img
                  className="justify-center w-1/2 h-full p-0 m-0 w-object-cover animate-spinslow "
                  src={planet.img}
                  alt="logo plenty of space"
                />
              </div>
            </Link>
          ))}
        </div>
        <h1>
          <div className="flex justify-around grid-cols-8 text-xs text-center text-white space-around font-secondary">
            {planets.map((planet, index) => (
              <div
                key={index}
                className="justify-center w-full gap-10 p-8 m-5 text-center align-middle p-1/5"
              >
                {utils.splitPlanet(planet.fields.planete_planet)}
              </div>
            ))}
          </div>
        </h1>
      </div>
      <div
        className={` bg-bottom py-40 top-0 left-0 flex items-center justify-center flex-col bg-cover cursor-auto`}
      >
        <p className="text-sm text-center text-white font-secondary mb-vh20">
          SET YOUR PREFERENCES AND FIND YOUR DREAM PLANET
        </p>
        <div className="w-1/2">
          <p className="text-sm text-center text-gray-400 font-secondary">
            TEMPERATURE
          </p>
          <input
            type="range"
            className="w-full h-2.5 p-0 appearance-none bg-white rounded outline-none form-range  "
          />
          <p className="text-sm text-center text-gray-400 font-secondary">
            GRAVITY
          </p>
          <input
            type="range"
            className="w-full h-2.5  appearance-none rounded p-0  outline-none "
          />
          <p className="text-sm text-center text-gray-400 accent-stone-600 font-secondary">
            REVOLUTION
          </p>
          <input
            type="range"
            className="w-full h-2.5 form-range appearance-none rounded p-0 bg-white outline-none "
          />
          <p className="text-sm text-center text-gray-400 font-secondary">
            DAYTIME
          </p>
          <input
            type="range"
            className="w-full h-2.5 form-range appearance-none rounded p-0 bg-white outline-none "
          />
        </div>
        <div className="relative duration-1000  ease-in-out z-30 bg-opacity-10 hover:bg-opacity-30 bg-transparent backdrop-blur-sm scroll-px-8 rounded-3xl mt-[8vh]">
          <button
            type="button"
            className="text-sm text-white font-secondary  px-[2vw] py-[1vh] hover:tracking-widest hover:text-red-600"
          >
            <Link
              to="/homebody"
              className="duration-1000 ease-in-out -translate-x-1/2 l-0"
            >
              DISCOVER
            </Link>
          </button>
        </div>
      </div>

      <FooterBar />
    </div>
  );
};

export default HomeBody;
