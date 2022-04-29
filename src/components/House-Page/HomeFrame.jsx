import React from "react";
import PropTypes from "prop-types";

const HomeFrame = ({ name, desc, image }) => {
  return (
    <div className={`${image} bg-no-repeat bg-cover bg-center`}>
      <div className="h-full bg-gray-50/50 w-80 mx-72 contrast-200">
        <div className="p-6 space-y-6">
          <h1 className="text-5xl font-bold text-center text-white shadow-current ">
            {name}
          </h1>
        </div>

        <div className="p-6 space-y-6">
          <p className="my-10 text-base font-medium leading-relaxed text-white drop-shadow-md ">
            Characteristic
          </p>
          <p className="text-base leading-relaxed text-white drop-shadow-2xl ">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

HomeFrame.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default HomeFrame;
