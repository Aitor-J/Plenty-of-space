/* eslint-disable camelcase */

const footerInfo = ({
  gravite_gravity_m_s2,
  diametre_diameter_km,
  atmospheric_composition,
  temperature_max_highest_temperature_degc,
  temperature_min_lowest_temperature_degc,
  type_d_astre_type_of_planet,
}) => {
  return (
    <div className="absolute w-2/3 text-white bottom-[5vh] left-1/3 ">
      <ul className="flex justify-between space-x-40 ">
        <li className="w-15 font-secondary">
          EXOSPHERE
          <p className="py-2 font-mono text-xs text-gray-400">
            Atmospheric composition: {atmospheric_composition} <br />
            Gravity: {gravite_gravity_m_s2}
          </p>
        </li>

        <li className="w-15 font-secondary">
          CLIMATE
          <p className="py-2 font-mono text-xs text-gray-400">
            Max temperature: {temperature_max_highest_temperature_degc} <br />
            Min temperature: {temperature_min_lowest_temperature_degc}
          </p>
        </li>
        <li className=" w-15 pr-[10vh] font-secondary">
          PHYSICAL
          <p className="py-2 font-mono text-xs text-gray-400">
            Diameter:{diametre_diameter_km} km <br />
            Planet type: {type_d_astre_type_of_planet}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default footerInfo;
