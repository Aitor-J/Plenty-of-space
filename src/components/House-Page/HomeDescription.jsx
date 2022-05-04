import React from "react";
import PropTypes from "prop-types";

const HomeDescription = ({ name, desc, img }) => {
  return (
    <div>
      <img src={img} className="absolute bg-cover w-full h-full" alt="" />
      <div className="pl-80 ">
        <div className="h-screen bg-gray-50/50 w-80  contrast-200 font-secondary ">
          <div className="p-12 pt-5">
            <h1 className="text-tiny  font-bold text-center text-black shadow-current  ">
              {name}
            </h1>
          </div>
          <div className="p-6 space-y-2.5 pt-0.5 ">
            <p className=" text-sm font-medium leading-relaxed text-black drop-shadow-md">
              Characteristic
            </p>
            <p className="text-xs leading-relaxed text-black drop-shadow-2xl  space-y-3 ">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

HomeDescription.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default HomeDescription;
