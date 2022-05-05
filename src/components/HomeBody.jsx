import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "@mui/material/Slider";
import NavBar from "./NavBar";
import FooterBar from "./FooterBar";
import planetNav from "../planetNav";
import utils from "../lib/utils";
import images from "../assets/images/stars.png";

const HomeBody = () => {
  const [planets, setPlanets] = useState([]);
  const [minMax, setMinMax] = useState({
    temp: { min: 0, max: 0 },
    grav: { min: 0, max: 0 },
    revo: { min: 0, max: 0 },
    day: { min: 0, max: 0 },
  });
  const [filter, setFilter] = useState({
    day: { min: 5.784, max: 3957.168 },
    grav: { min: 3.7, max: 23.1 },
    revo: { min: 10, max: 4331 },
    temp: { min: -200, max: 490 },
  });

  const [planetsFiltered, setPlanetsFiltered] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=10&sort=-ordre_order&facet=ordre_order&facet=planete_planet&facet=distance_moyenne_average_distance_x10_6_km&facet=diametre_diameter_km&facet=masse_mass_x10_24_kg&facet=periode_de_revolution_an_orbital_period_year&facet=periode_de_rotation_rotation_period_h&facet=gravite_gravity_m_s2&facet=vitesse_orbitale_orbital_velocity_km_s&facet=temperature_moyenne_mean_temperature_degc`
      )
      .then((res) => res.data.records)
      .then((data) => {
        setMinMax({
          ...minMax,
          // set min max TEMPERATURE range slider
          temp: {
            max: Math.max(
              ...data.slice(1).map((planet) => {
                return (
                  planet.fields.temperature_max_highest_temperature_degc ||
                  planet.fields.temperature_moyenne_mean_temperature_degc
                );
              })
            ),
            min: Math.min(
              ...data.slice(1).map((planet) => {
                return (
                  planet.fields.temperature_min_lowest_temperature_degc ||
                  planet.fields.temperature_moyenne_mean_temperature_degc
                );
              })
            ),
          },
          // set min max GRAVITY range slider
          grav: {
            max: Math.max(
              ...data.slice(1).map((planet) => {
                return planet.fields.gravite_gravity_m_s2;
              })
            ),
            min: Math.min(
              ...data.slice(1).map((planet) => {
                return planet.fields.gravite_gravity_m_s2;
              })
            ),
          },
          revo: {
            // set min max REVOLUTION range slider PARSINT
            max: Math.max(
              ...data.slice(1).map((planet) => {
                return parseInt(
                  planet.fields.periode_de_revolution_jours_orbital_period_days,
                  10
                );
              })
            ),
            min: Math.min(
              ...data.slice(1).map((planet) => {
                return parseInt(
                  planet.fields.periode_de_revolution_jours_orbital_period_days,
                  10
                );
              })
            ),
          },
          day: {
            // set min max DAYTIME range slider
            max: Math.max(
              ...data.slice(1).map((planet) => {
                return (
                  planet.fields.periode_de_revolution_an_orbital_period_year *
                  24
                );
              })
            ),
            min: Math.min(
              ...data.slice(1).map((planet) => {
                return (
                  planet.fields.periode_de_revolution_an_orbital_period_year *
                  24
                );
              })
            ),
          },
        });

        setPlanets(data.slice(1));
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const planetFiltered = planets.filter(
      (planet) =>
        (planet.fields.temperature_max_highest_temperature_degc ||
          planet.fields.temperature_moyenne_mean_temperature_degc) <=
          filter.temp.max &&
        (planet.fields.temperature_min_lowest_temperature_degc ||
          planet.fields.temperature_moyenne_mean_temperature_degc) >=
          filter.temp.min &&
        planet.fields.gravite_gravity_m_s2 <= filter.grav.max &&
        planet.fields.gravite_gravity_m_s2 >= filter.grav.min &&
        Number(planet.fields.periode_de_revolution_jours_orbital_period_days) <=
          filter.revo.max &&
        Number(planet.fields.periode_de_revolution_jours_orbital_period_days) >=
          filter.revo.min &&
        planet.fields.periode_de_revolution_an_orbital_period_year * 24 <=
          filter.day.max &&
        planet.fields.periode_de_revolution_an_orbital_period_year * 24 >=
          filter.day.min
    );
    setPlanetsFiltered(planetFiltered);
  }, [filter]);
  return (
    <div style={{ backgroundImage: `url(${images})` }}>
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
        <p className="text-sm text-center text-gray-400 font-secondary">
          TEMPERATURE °C
        </p>
        <div className="w-1/2 text-white">
          <Slider
            defaultValue={[-200, 490]}
            color="secondary"
            valueLabelDisplay="auto"
            step={20}
            marks
            min={minMax.temp.min}
            max={minMax.temp.max}
            onChange={(e) =>
              setFilter({
                ...filter,
                temp: { min: e.target.value[0], max: e.target.value[1] },
              })
            }
          />
        </div>
        <p className="text-sm text-center text-gray-400 font-secondary">
          GRAVITY Newton/kg
        </p>
        <div className="w-1/2 text-white">
          <Slider
            defaultValue={[3, 25]}
            valueLabelDisplay="auto"
            color="secondary"
            step={1}
            marks
            min={minMax.grav.min}
            max={minMax.grav.max}
            onChange={(e) =>
              setFilter({
                ...filter,
                grav: { min: e.target.value[0], max: e.target.value[1] },
              })
            }
          />
        </div>
        <p className="text-sm text-center text-gray-400 font-secondary">
          REVOLUTION Days/Year
        </p>
        <div className="w-1/2 text-white ">
          <Slider
            defaultValue={[10, 4500]}
            color="secondary"
            valueLabelDisplay="auto"
            step={150}
            marks
            min={minMax.revo.min}
            max={minMax.revo.max}
            onChange={(e) =>
              setFilter({
                ...filter,
                revo: { min: e.target.value[0], max: e.target.value[1] },
              })
            }
          />
        </div>
        <p className="text-sm text-center text-gray-400 font-secondary ">
          DAYTIME Hours/Day
        </p>
        <div className="w-1/2 text-white transition duration-1000">
          <Slider
            defaultValue={[6, 4000]}
            color="secondary"
            valueLabelDisplay="auto"
            step={200}
            marks
            min={minMax.day.min}
            max={minMax.day.max}
            onChange={(e) =>
              setFilter({
                ...filter,
                day: { min: e.target.value[0], max: e.target.value[1] },
              })
            }
          />
        </div>

        <div className="relative duration-1000 flex ease-in-out z-30 bg-opacity-10 hover:bg-opacity-30 bg-transparent backdrop-blur-sm scroll-px-8 rounded-3xl mt-[8vh]">
          {planetsFiltered.length ? (
            planetsFiltered.map((planet) => (
              <button
                key={planet.recordid}
                type="button"
                className="text-sm text-white font-secondary  px-[2vw] py-[1vh] hover:tracking-widest hover:text-red-600"
              >
                <Link
                  to={`/homebody/${utils.splitPlanet(
                    planet.fields.planete_planet.toLowerCase()
                  )}`}
                  className="duration-1000 ease-in-out -translate-x-1/2 l-0"
                >
                  {utils.splitPlanet(planet.fields.planete_planet)}
                </Link>
              </button>
            ))
          ) : (
            <p className="text-white font-secondary">
              No result matches your search, try again.
            </p>
          )}
        </div>
      </div>
      <FooterBar />
    </div>
  );
};

export default HomeBody;
