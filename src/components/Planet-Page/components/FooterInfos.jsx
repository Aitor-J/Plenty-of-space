import "../../../App.css";

const footerInfo = (props) => {
  return (
    <div className="absolute w-2/3 text-white bottom-[5vh] left-1/3 ">
      <ul className="flex justify-between space-x-40 ">
        <li className="w-15 font-secondary text-shadow-lg ">
          EXOSPHERE
          <p className="py-2 text-xs text-white font-nunito text-shadow-lg ">
            <span className="font-bold tracking-wider text-gray-400 underline ">
              {" "}
              Atmospheric composition:
            </span>{" "}
            {props.atmospheric_composition} <br />
            <span className="font-bold tracking-wider text-gray-400 underline">
              Gravity:
            </span>{" "}
            {props.gravite_gravity_m_s2}
          </p>
        </li>

        <li className="w-15 font-secondary">
          CLIMATE
          <p className="py-2 text-xs text-white font-nunito text-shadow-lg ">
            <span className="font-bold tracking-wider text-gray-400 underline">
              {" "}
              Max temperature:{" "}
            </span>
            {props.temperature_max_highest_temperature_degc} <br />
            <span className="font-bold tracking-wider text-gray-400 underline">
              Min temperature:
            </span>{" "}
            {props.temperature_min_lowest_temperature_degc}
          </p>
        </li>
        <li className=" w-15 pr-[10vh] font-secondary">
          PHYSICAL
          <p className="py-2 text-xs text-white font-nunito text-shadow-lg ">
            <span className="font-bold tracking-wider text-gray-400 underline">
              {" "}
              Diameter:
            </span>{" "}
            {props.diametre_diameter_km} km <br />
            <span className="font-bold tracking-wider text-gray-400 underline">
              {" "}
              Planet type:
            </span>{" "}
            {props.type_d_astre_type_of_planet}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default footerInfo;
