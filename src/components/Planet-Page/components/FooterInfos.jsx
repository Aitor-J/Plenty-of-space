import "../../../App.css";

const footerInfo = ({
  graviteGravityMS2,
  diametreDiameterKm,
  atmosphericComposition,
  temperatureMaxHighestTemperatureDegc,
  temperatureMinLowestTemperatureDegc,
  typeDAstreTypeOfPlanet,
}) => {
  return (
    <div className="absolute w-2/3 text-white bottom-[5vh] left-1/3 ">
      <ul className="flex justify-between space-x-40 translate-y-10 ">
        <li className="w-15 font-secondary text-shadow-lg ">
          EXOSPHERE
          <p className="py-2 text-xs text-white font-nunito text-shadow-lg ">
            <span className="font-bold tracking-wider text-gray-400 underline ">
              {" "}
              Atmospheric composition:
            </span>{" "}
            {atmosphericComposition} <br />
            <span className="font-bold tracking-wider text-gray-400 underline">
              Gravity:
            </span>{" "}
            {graviteGravityMS2}
          </p>
        </li>

        <li className="w-15 font-secondary">
          CLIMATE
          <p className="py-2 text-xs text-white font-nunito text-shadow-lg ">
            <span className="font-bold tracking-wider text-gray-400 underline">
              {" "}
              Max temperature:{" "}
            </span>
            {temperatureMaxHighestTemperatureDegc} <br />
            <span className="font-bold tracking-wider text-gray-400 underline">
              Min temperature:
            </span>{" "}
            {temperatureMinLowestTemperatureDegc}
          </p>
        </li>
        <li className=" w-15 pr-[10vh] font-secondary">
          PHYSICAL
          <p className="py-2 text-xs text-white font-nunito text-shadow-lg ">
            <span className="font-bold tracking-wider text-gray-400 underline">
              {" "}
              Diameter:
            </span>{" "}
            {diametreDiameterKm} km <br />
            <span className="font-bold tracking-wider text-gray-400 underline">
              {" "}
              Planet type:
            </span>{" "}
            {typeDAstreTypeOfPlanet}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default footerInfo;
