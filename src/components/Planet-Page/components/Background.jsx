import React from "react";
import PropTypes from "prop-types";

const Background = ({ img, blur, name, imgb }) => {
  return (
    <div className="flex min-h-screen bg-black ">
      <div
        className={
          name === "earth"
            ? "translate-y-[45vh] -translate-x-[20vh] scale-150"
            : "translate-y-[25vh] -translate-x-[30vh]"
        }
      >
        <img src={name === "saturn" ? "" : blur} alt="planetleftblur" />
      </div>
      <div
        className={
          name === "saturn"
            ? "absolute w-auto min-w-full min-h-full max-w-none z-0"
            : "flex flex-col content-center scale-75"
        }
      >
        <img
          src={name === "saturn" ? imgb : img}
          alt="planetright"
          className={
            name === "saturn" ? "animate-none" : "animate-spinveryslow"
          }
        />
      </div>
    </div>
  );
};
Background.propTypes = {
  img: PropTypes.string.isRequired,
  blur: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgb: PropTypes.string.isRequired,
};

export default Background;
