import React from "react";
import PropTypes from "prop-types";
import "../../../App.css";
import { Link } from "react-router-dom";

const Banner = ({ name, subtitle, desc, id, color }) => {
  return (
    <div className="absolute top-0 flex items-center justify-center w-full h-full ">
      <Link to={`/homeframe/${id}`}>
        {" "}
        <div
          style={{ borderColor: color }}
          className="bg-transparent border-l-4 shadow-md z-10 h-screen mb-[60vw] rounded-bl-full px-[0.5vw] text-transparent hover:text-stone-300 hover:px-[1.5vw] pt-[30vw]  hover:backdrop-blur-3xl backdrop-blur-lg duration-300 ease-linear animate-pulse hover:animate-none"
        >
          <span className="z-50 opacity-100 text-xsms font-secondary">
            {/* horrible */} H
            <br />O
            <br /> U
            <br />S
            <br />E
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
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Banner;
