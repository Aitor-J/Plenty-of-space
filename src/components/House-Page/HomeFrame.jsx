import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HomeDescription from "./HomeDescription";
import house from "../../house";
import NavPlanet from "../Planet-Page/components/NavPlanet";

function HomeFrame() {
  const { planetId } = useParams();
  const [houseDescription, setHouseDescription] = useState([]);
  const getHousePics = () => {
    setHouseDescription(
      house.find((theHouse) => theHouse.planetId === parseInt(planetId, 10))
    );
  };

  useEffect(() => {
    getHousePics();
  }, [planetId]);

  return (
    <div className="relative h-screen overflow-hidden">
      {houseDescription.img &&
        houseDescription.name &&
        houseDescription.desc && <HomeDescription {...houseDescription} />}

      <NavPlanet />
    </div>
  );
}

export default HomeFrame;
