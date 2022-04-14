// import React from "react";
import PropTypes from "prop-types";

const HomeBody = ({ image }) => {
  console.log(image);
  return (
    <div className="relative w-full h-screen">
      <div
        className={`${image} absolute top-0 left-0 flex items-center justify-center w-full h-full bg-top bg-cover cursor-auto bg-[url('https://img4.goodfon.com/original/1920x1080/d/df/planet-sci-fi-galaxy.jpg')]`}
      >
        <div className="w-full p-72">
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