import React from "react";
import PropTypes from "prop-types";
import NavBar from "./NavBar";
import FooterBar from "./FooterBar";

import jup from "../assets/images/Jupiter.png";
import mars from "../assets/images/Mars.png";
import mercure from "../assets/images/Mercure.png";
import venus from "../assets/images/Venus.png";
import saturne from "../assets/images/saturne.png";
import terre from "../assets/images/Terre.png";
import uranus from "../assets/images/Uranus.png";
import neptune from "../assets/images/Neptune.png";

const background = {
  text: "Wormhole",
  image: "bg-[url('./src/assets/images/stars.png')]",
};

const HomeBody = ({ image }) => {
  return (
    <div className={background.image}>
      <NavBar />

      <div className="flex content-around flex-row py-[2vh] w-full z-50 mt-[25vh] ">
        <div className="flex-initial">
          {" "}
          <a href="/" className="flex justify-center">
            <img
              className="w-1/2 duration-700 ease-in-out animate-spinslow hover:w-3/4"
              src={mercure}
              alt="logo plenty of space"
            />
          </a>
        </div>
        <div className="flex-initial ">
          <a href="/" className="flex justify-center">
            <img
              className="w-1/2 duration-700 ease-in-out animate-spinslow hover:w-3/4"
              src={venus}
              alt="logo plenty of space"
            />
          </a>
        </div>
        <div className="flex-initial">
          <a href="/" className="flex justify-center">
            <img
              className="flex justify-center w-1/2 duration-700 ease-in-out animate-spinslow hover:w-3/4"
              src={terre}
              alt="logo plenty of space"
            />
          </a>
        </div>
        <div className="flex-initial">
          <a href="/" className="flex justify-center">
            <img
              className="flex justify-center w-1/2 duration-700 ease-in-out animate-spinslow hover:w-3/4"
              src={mars}
              alt="logo plenty of space"
            />
          </a>
        </div>
        <div className="flex-initial">
          <a href="/" className="flex justify-center">
            <img
              className="flex justify-center w-1/2 duration-700 ease-in-out animate-spinslow hover:w-3/4"
              src={jup}
              alt="logo plenty of space"
            />
          </a>
        </div>
        <div className="flex-initial">
          <a href="/" className="flex justify-center">
            <img
              className="flex justify-center w-1/2 duration-700 ease-in-out animate-spinslow hover:w-3/4"
              src={saturne}
              alt="logo plenty of space"
            />
          </a>
        </div>
        <div className="flex-initial">
          <a href="/" className="flex justify-center">
            <img
              className="flex justify-center w-1/2 duration-700 ease-in-out animate-spinslow hover:w-3/4"
              src={uranus}
              alt="logo plenty of space"
            />
          </a>
        </div>
        <div className="flex-initial">
          <a href="/" className="flex justify-center">
            <img
              className="flex justify-center w-1/2 duration-700 ease-in-out animate-spinslow hover:w-3/4"
              src={neptune}
              alt="logo plenty of space"
            />
          </a>
        </div>
      </div>

      <div
        className={`${image} bg-bottom py-40 top-0 left-0 flex items-center justify-center flex-col bg-cover cursor-auto`}
      >
        <p className="text-sm text-center text-white font-secondary mb-vh20">
          SET YOUR PREFERENCES AND FIND YOUR DREAM PLANET{" "}
        </p>
        <div className="w-1/2">
          <p className="text-sm text-center text-gray-400 font-secondary">
            TEMPERATURE
          </p>
          <input
            type="range"
            className="w-full h-2.5 p-0 appearance-none bg-white rounded outline-none form-range  "
          />
          <p className="text-sm text-center text-gray-400 font-secondary">
            GRAVITY
          </p>
          <input
            type="range"
            className="w-full h-2.5  appearance-none rounded p-0  outline-none "
          />
          <p className="text-sm text-center text-gray-400 accent-stone-600 font-secondary">
            REVOLUTION
          </p>
          <input
            type="range"
            className="w-full h-2.5 form-range appearance-none rounded p-0 bg-white outline-none "
          />
          <p className="text-sm text-center text-gray-400 font-secondary">
            DAYTIME
          </p>
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
