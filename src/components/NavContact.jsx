import React from "react";
import { Link } from "react-router-dom";

const NavContact = () => {
  return (
    <div>
      <div className=" z-30 absolute w-1/4 text-white top-[5vh] right-[10vw]  ">
        <ul className="flex justify-between space-x-40 ">
          <li className="font-secondary"></li>
          <li className=" font-secondary">
            <Link
              className="absolute duration-700 ease-in-out -translate-x-1/2 l-0
              hover:tracking-widest hover:text-white"
              to="/homebody"
            >
              _HOME
            </Link>
          </li>
          <li className=" font-secondary">
            <Link
              className="absolute duration-700 ease-in-out -translate-x-1/2 l-0
              hover:tracking-widest hover:text-white"
              to="/about"
            >
              {" "}
              _ABOUT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavContact;
