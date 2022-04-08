import React from "react";
import logo from "../assets/images/logo.png";

const NavBar = () => {
  return (
    <div className="bg-black">
      <div>
        <img className="h-8 mr-3" src={logo} alt="logo plenty of space" />
        <h1 className="text-6xl text-center text-white font-title py-[5vh]">
          PLENTY OF SPACE
        </h1>
      </div>
      <nav className="text-white">
        <ul className="flex flex-row justify-center py-[2vh]">
          <li className="px-[15vw] text-2xl">Home</li>
          <li className="px-[15vw] text-2xl">About</li>
          <li className="px-[15vw] text-2xl">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
