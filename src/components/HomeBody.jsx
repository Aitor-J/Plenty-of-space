import React from "react";
import PropTypes from "prop-types";
import NavBar from "./NavBar";
import FooterBar from "./FooterBar";

const background = {
  text: "Wormhole",
  image: "bg-[url('./src/assets/images/background.jpg')]",
};

const HomeBody = ({ image }) => {
  return (
    <div className={background.image}>
      <NavBar />
      <div
        className={`${image} bg-bottom py-80 top-0 left-0 flex items-center justify-center flex-col bg-cover cursor-auto`}
      >
        <p className="text-sm text-center text-white font-secondary mb-vh20">
          CHOOSE YOUR PLANET PREFERENCES RIGHT HERE WITH THE RANGE, AND FIND
          YOUR OWN{" "}
        </p>
        <div className="w-1/2">
          <p className="text-center text-white text-tiny font-title">
            TEMPERATURE
          </p>
          <input
            type="range"
            className="w-full h-2.5 p-0 appearance-none bg-white rounded outline-none form-range  "
          />
          <p className="text-center text-white text-tiny font-title">GRAVITY</p>
          <input
            type="range"
            className="w-full h-2.5  appearance-none rounded p-0  outline-none "
          />
          <p className="text-center text-white text-tiny accent-stone-600 font-title">
            REVOLUTION
          </p>
          <input
            type="range"
            className="w-full h-2.5 form-range appearance-none rounded p-0 bg-white outline-none "
          />
          <p className="text-center text-white text-tiny font-title">DAYTIME</p>
          <input
            type="range"
            className="w-full h-2.5 form-range appearance-none rounded p-0 bg-white outline-none "
          />
        </div>
      </div>
      <FooterBar />
    </div>
  );
};

HomeBody.propTypes = {
  // text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default HomeBody;
