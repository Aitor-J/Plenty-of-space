import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import utils from "../../lib/utils";
import Background from "./components/Background";
import Banner from "./components/bannerInfo";
import FooterInfo from "./components/FooterInfos";
import NavPlanet from "./components/NavPlanet";
import planetNav from "../../planetNav";

function PlanetFrame() {
  const { planetName } = useParams();
  const [planetInfo, setPlanetInfo] = useState([]);
  const [planetBackground, setPlanetBackground] = useState([]);

  const getPlanetPics = () => {
    setPlanetBackground(planetNav.find((planet) => planet.name === planetName));
  };
  useEffect(() => {
    axios
      .get(
        `https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=`
      )
      .then((res) => res.data)
      .then((data) => {
        const planetData = data.records.find((planet) => {
          return (
            utils
              .splitPlanet(planet.fields.planete_planet)[0]
              .toLowerCase()
              .trim() === planetName
          );
        });

        setPlanetInfo(planetData.fields);
      });
    getPlanetPics();
  }, [planetName]);

  return (
    <div className="relative h-screen overflow-hidden">
      {planetBackground.img && planetBackground.blur && (
        <Background {...planetBackground} />
      )}
      <Banner />
      <FooterInfo {...planetInfo} />
      <NavPlanet />
    </div>
  );
}

export default PlanetFrame;
