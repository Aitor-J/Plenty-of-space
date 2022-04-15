// import React from "react";
import PropTypes from "prop-types";

const HomeBody = ({ image }) => {
  return (
    <div>
      <div
        className={`${image} bg-bottom py-80 top-0 left-0 flex items-center justify-center bg-cover cursor-auto`}
      >
        <div className="w-1/2">
          <p className="text-lg text-center text-white font-title">
            First Range
          </p>
          <input
            type="range"
            className="w-full h-2.5 p-0 appearance-none bg-white rounded outline-none form-range  "
          />
          <p className="text-lg text-center text-white font-title">
            Second Range
          </p>
          <input
            type="range"
            className="w-full h-2.5  appearance-none rounded p-0  outline-none "
          />
          <p className="text-lg text-center text-white accent-stone-600 font-title">
            Third Range
          </p>
          <input
            type="range"
            className="w-full h-2.5 form-range appearance-none rounded p-0 bg-white outline-none "
          />
          <p className="text-lg text-center text-white font-title">
            Fourth Range
          </p>
          <input
            type="range"
            className="w-full h-2.5 form-range appearance-none rounded p-0 bg-white outline-none "
          />
        </div>
      </div>
    </div>
  );
};

HomeBody.propTypes = {
  // text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default HomeBody;
