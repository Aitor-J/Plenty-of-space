import React from "react";

const Banner = () => {
  return (
    <div className="relative flex items-center justify-center ">
      <div className="w-1/5 h-screen p-10 text-white mr-[15vw] shadow-lg text-align-start backdrop-blur-sm bg-white/10 ">
        <h1 className="pt-20 text-base text-center pt- font-title">Mars</h1>
        <p className="flex pt-16 text-xs text-gray-300 font-secondary">
          Bored of earth ? Red is the new blue
        </p>
        <p className="flex text-sm"> </p>
        <p className="flex pt-16 pb-16 font-mono text-xs text-gray-400 ">
          if luxuriants forests, bluesky and birds singings are not you'r cup of
          tea but instead 14 miles high trecks and red sand, then you are into
          the right spot!
        </p>
        <button
          type="button"
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-gray-100 via-gray-300 to-gray-500 group-hover:from-gray-200 group-hover:via-gray-300 group-hover:to-gray-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:focus:ring-gray-300"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            TODAY OFFERS
          </span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
