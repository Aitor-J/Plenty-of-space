import React from "react";
import PropTypes from "prop-types";

const Background = ({ img, blur }) => {
  return (
    <div className="flex min-h-screen bg-black ">
      <div className="translate-y-[25vh] -translate-x-[30vh]">
        <img src={blur} alt="Marsgauche" />
      </div>
      <div className="flex flex-col content-center scale-75">
        <img src={img} alt="Marsdroite" className=" animate-spinveryslow" />
      </div>
    </div>
  );
};
Background.propTypes = {
  img: PropTypes.string.isRequired,
  blur: PropTypes.string.isRequired,
};

export default Background;
