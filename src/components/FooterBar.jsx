import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/LogoPlenty.png";

const Footer = () => {
  return (
    <footer className="bottom-0 z-10 w-full ml-0 ">
      <div className="md:flex md:justify-between md">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center">
            <img src={logo} className="h-16 mr-4" alt="Logo" />
            <Link to="/" className="">
              <span className="self-center text-sm font-semibold text-white font-title whitespace-nowrap">
                Plenty Of Space
              </span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 font-bold text-white uppercase text-ls dark:text-white">
              Resources
            </h2>
            <ul className="text-gray-400 dark:text-gray-400">
              <Link to="/" className="">
                <li className="mb-4">Plenty Of Space</li>
              </Link>
              <a href="https://tailwindcss.com/">Tailwind CSS</a>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 font-bold text-white uppercase text-ls dark:text-white">
              Follow us
            </h2>
            <ul className="text-gray-400 dark:text-gray-400">
              <a
                href="https://github.com/Aitor-J/Plenty-of-space"
                className="mb-4"
              >
                Github
              </a>
              <li>
                <a href="https://discord.com/">Discord</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 font-bold text-white uppercase text-ls dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-400 dark:text-gray-400">
              <li className="mb-4">Privacy Policy</li>
              <li>Terms &amp; Conditions</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-xs text-gray-400 sm:text-center dark:text-gray-400">
          © 2022 Plenty Of Space™ . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
