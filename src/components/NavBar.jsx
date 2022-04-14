/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/images/logo.png";

const NavBar = () => {
  return (
    <div className="absolute z-10 w-full mt-0 ml-0 bg-transparent ">
      <div className="flex flex-row justify-center py-[2vh]">
        <a href="#" className="self-center h-16 mr-3">
          <img
            className="self-center h-16 mr-3"
            src={logo}
            alt="logo plenty of space"
          />
        </a>
        <h1 className="text-6xl  text-white font-title px-[5vw] py-[5vh]">
          PLENTY OF SPACE
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="bg-white w-11/12 py-[0.1vh] "></div>
      </div>
      <nav className="text-slate-400">
        <ul className="flex flex-row justify-around py-[4vh]">
          <li className="text-2xl duration-700 ease-in-out font-secondary hover:tracking-widest hover:text-white">
            <a href="#">&lt;Home&gt;</a>
          </li>
          <li className="text-2xl duration-700 ease-in-out font-secondary hover:tracking-widest hover:text-white">
            <a href="#"> &lt;About&gt;</a>
          </li>
          <li className="text-2xl duration-700 ease-in-out font-secondary hover:tracking-widest hover:text-white">
            <a href="#"> &lt;Contact&gt;</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
