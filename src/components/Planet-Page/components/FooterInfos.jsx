/* eslint-disable camelcase */

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
      <ul className="flex justify-between space-x-40 ">
        <li className="w-15 font-secondary">
          EXOSPHERE
          <p className="py-2 font-mono text-xs text-gray-400">
            Atmospheric composition: {atmosphericComposition} <br />
            Gravity: {graviteGravityMS2}
          </p>
        </li>

        <li className="w-15 font-secondary">
          CLIMATE
          <p className="py-2 font-mono text-xs text-gray-400">
            Max temperature: {temperatureMaxHighestTemperatureDegc} <br />
            Min temperature: {temperatureMinLowestTemperatureDegc}
          </p>
        </li>
        <li className=" w-15 pr-[10vh] font-secondary">
          PHYSICAL
          <p className="py-2 font-mono text-xs text-gray-400">
            Diameter:{diametreDiameterKm} km <br />
            Planet type: {typeDAstreTypeOfPlanet}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default footerInfo;
