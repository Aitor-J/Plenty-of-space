import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import FooterBar from "./FooterBar";
import planetNav from "../planetNav";

const background = {
  text: "Wormhole",
  image: "bg-[url('./src/assets/images/stars.png')]",
};

const HomeBody = () => {
  const getPlanets = () => {
    axios
      .get(
        `https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=10&sort=-ordre_order&facet=ordre_order&facet=planete_planet&facet=distance_moyenne_average_distance_x10_6_km&facet=diametre_diameter_km&facet=masse_mass_x10_24_kg&facet=periode_de_revolution_an_orbital_period_year&facet=periode_de_rotation_rotation_period_h&facet=gravite_gravity_m_s2&facet=vitesse_orbitale_orbital_velocity_km_s&facet=temperature_moyenne_mean_temperature_degc`
      )
      .then((res) => {
        console.log(res.data.records[0].fields.planete_planet);
      });
  };
  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <div className={background.image}>
      <NavBar />
      <div className="flex content-around  justify-center py-[2vh] w-full z-50 mt-[25vh] ">
        {planetNav.map((planet) => (
          <Link to={planet.path}>
            <div className="flex justify-center w-1/2 transition duration-1000 ease-in-out hover:scale-150">
              <img
                className="justify-around object-cover w-full h-full my-auto animate-spinslow "
                src={planet.img}
                alt="logo plenty of space"
              />
            </div>
          </Link>
        ))}
      </div>
      <div
        className={` bg-bottom py-40 top-0 left-0 flex items-center justify-center flex-col bg-cover cursor-auto`}
      >
        <p className="text-sm text-center text-white font-secondary mb-vh20">
          SET YOUR PREFERENCES AND FIND YOUR DREAM PLANET{" "}
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
      </div>
      <FooterBar />
    </div>
  );
};

export default HomeBody;
