import React from "react";
import PropTypes from "prop-types";

const Banner = ({ name, subtitle, desc }) => {
  return (
    <div className="absolute top-0 flex items-center justify-center w-full h-full ">
      <div className="w-min h-screen p-[2vw] text-white mr-[20vw] shadow-lg text-align-start backdrop-blur-sm bg-white/10 border border-gray-800">
        <h1 className="pt-[5vh] text-base text-center font-title">{name}</h1>
        <p className="flex pt-[5vh] text-xms text-gray-300 font-secondary">
          {subtitle}
        </p>
        <p className="flex text-sm"> </p>
        <p className="flex pt-[5vh] pb-16 font-mono text-xsms text-gray-400 ">
          {desc}
        </p>
      </div>
    </div>
  );
};
Banner.propTypes = {
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Banner;
