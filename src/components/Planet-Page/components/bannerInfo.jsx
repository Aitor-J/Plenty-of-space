import React from "react";

const Banner = () => {
  return (
    <div className="absolute top-0 flex items-center justify-center w-full h-full ">
      <div className="w-[25vw] h-screen p-[2vw] text-white mr-[20vw] shadow-lg text-align-start backdrop-blur-sm bg-white/10 border border-gray-800">
        <h1 className="pt-[10vh] text-base text-center font-title">Mars</h1>
        <p className="flex pt-[5vh] text-xms text-gray-300 font-secondary">
          Bored of earth ? Red is the new blue
        </p>
        <p className="flex text-sm"> </p>
        <p className="flex pt-[5vh] pb-16 font-mono text-xsms text-gray-400 ">
          if luxuriants forests, bluesky and birds singings are not your cup of
          tea but instead 14 miles high trecks and red sand, then you are into
          the right spot!
        </p>
      </div>
    </div>
  );
};

export default Banner;
