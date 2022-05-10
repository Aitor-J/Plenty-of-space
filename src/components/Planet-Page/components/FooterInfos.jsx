import "../../../App.css";
import PropTypes from "prop-types";
import utils from "../../../lib/utils";

const footerInfo = ({
  graviteGravityMS2,
  diametreDiameterKm,
  atmosphericComposition,
  temperatureMaxHighestTemperatureDegc,
  temperatureMinLowestTemperatureDegc,
  typeDAstreTypeOfPlanet,
  temperatureMoyenneMeanTemperatureDegc,
}) => {
  return (
    <div className="absolute w-2/3 text-white bottom-[5vh] left-1/3 ">
      <ul className="flex justify-between space-x-40 translate-y-10 ">
        <li className="w-15 font-secondary text-shadow-lg ">
          EXOSPHERE
          <div className="flex flex-col py-2 text-xs text-white font-nunito text-shadow-lg">
            <div>
              <span className="font-bold tracking-wider text-gray-400 underline ">
                {" "}
                Atmospheric:
              </span>{" "}
              {atmosphericComposition}
            </div>
            <div>
              <span className="font-bold tracking-wider text-gray-400 underline">
                Gravity:
              </span>{" "}
              {graviteGravityMS2} N
            </div>
          </div>
        </li>
        <li className="w-15 font-secondary">
          CLIMATE
          {temperatureMaxHighestTemperatureDegc &&
          temperatureMinLowestTemperatureDegc ? (
            <div className="flex flex-col py-2 text-xs text-white font-nunito text-shadow-lg">
              <div>
                <span className="font-bold tracking-wider text-gray-400 underline">
                  Max:
                </span>
                {temperatureMaxHighestTemperatureDegc}°C
              </div>
              <div>
                <span className="font-bold tracking-wider text-gray-400 underline">
                  Min:
                </span>
                {temperatureMinLowestTemperatureDegc}°C
              </div>
            </div>
          ) : (
            <div className="py-2 text-xs text-white font-nunito text-shadow-lg ">
              <div>
                <span className="font-bold tracking-wider text-gray-400 underline">
                  Moy:
                </span>
                {temperatureMoyenneMeanTemperatureDegc}°C
              </div>
            </div>
          )}
        </li>
        <li className=" w-15 pr-[10vh] font-secondary">
          PHYSICAL
          <div className="flex flex-col py-2 text-xs text-white font-nunito text-shadow-lg">
            <div>
              <span className="font-bold tracking-wider text-gray-400 underline">
                Diameter:
              </span>
              {diametreDiameterKm} km
            </div>
            <div>
              <span className="font-bold tracking-wider text-gray-400 underline">
                Type:
              </span>
              {typeDAstreTypeOfPlanet &&
                utils.splitType(typeDAstreTypeOfPlanet)}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

footerInfo.propTypes = {
  graviteGravityMS2: PropTypes.string.isRequired,
  diametreDiameterKm: PropTypes.string.isRequired,
  atmosphericComposition: PropTypes.string.isRequired,
  temperatureMaxHighestTemperatureDegc: PropTypes.string.isRequired,
  temperatureMinLowestTemperatureDegc: PropTypes.string.isRequired,
  typeDAstreTypeOfPlanet: PropTypes.string.isRequired,
};

export default footerInfo;
