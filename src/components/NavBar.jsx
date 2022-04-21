import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const NavBar = () => {
  return (
    <div className="z-10 w-full mt-0 ml-0 ">
      <div className="flex justify-center py-[2vh]">
        <a href="/" className="self-center h-16 mr-3">
          <img
            className="self-center h-16 mr-3"
            src={logo}
            alt="logo plenty of space"
          />
        </a>
        <h1 className="text-lg  text-white font-title px-[5vw] py-[5vh]">
          PLENTY OF SPACE
        </h1>
      </div>
      <div className="flex justify-center">
        {/* <div className="bg-white w-11/12 py-[0.1vh] "></div> */}
      </div>
      <nav className="text-slate-400">
        <ul className="flex flex-row justify-around py-[4vh]">
          <li className="relative text-sm font-secondary ">
            <Link
              className="absolute duration-700 ease-in-out -translate-x-1/2 l-0 hover:tracking-widest hover:text-white"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="relative text-sm font-secondary ">
            <Link
              className="absolute duration-700 ease-in-out -translate-x-1/2 l-0 hover:tracking-widest hover:text-white"
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="relative text-sm font-secondary ">
            <Link
              className="absolute duration-700 ease-in-out -translate-x-1/2 l-0 hover:tracking-widest hover:text-white"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
