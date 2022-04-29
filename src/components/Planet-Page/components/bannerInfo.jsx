import React from "react";
import PropTypes from "prop-types";
import "../../../App.css";
import { Link } from "react-router-dom";

const Banner = ({ name, subtitle, desc }) => {
  return (
    <div className="absolute top-0 flex items-center justify-center w-full h-full ">
      <Link to="/marshouses">
        {" "}
        <div className="bg-gray-400/10  z-10 h-screen px-[1vw] hover:px-[2vw] pt-[1vh]  hover:backdrop-blur-md backdrop-blur-sm hover:bg-white/60 duration-1000 ease-linear">
          {" "}
          <span className="z-50 text-red-600 opacity-100 text-xsms font-secondary">
            {" "}
            H <br />
            <br />O
            <br />
            <br /> U <br />
            <br />S
            <br />
            <br />E <br />
            <br />S <br />
          </span>
        </div>{" "}
      </Link>
      <div className="w-min h-screen p-[2vw] text-white mr-[20vw] shadow-lg text-align-start backdrop-blur-sm bg-white/10 border border-gray-800 drop-shadow-xl">
        <h1 className="pt-[5vh] text-base text-center font-title">{name}</h1>
        <p className="flex pt-[5vh] text-xms text-gray-300 font-secondary">
          {subtitle}
        </p>
        <p className="flex text-sm"> </p>
        <p className="flex pt-[5vh] pb-16 font-nunito text-xsms text-gray-400 text-shadow-lg">
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
