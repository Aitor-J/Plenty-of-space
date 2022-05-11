import React from "react";
import { Link } from "react-router-dom";
import Keyboard, { Cursor } from "react-mk";
import video from "../assets/videos/hpvideo.mp4";

const HomePage = () => {
  const audio = new Audio("./src/assets/sounds/sc2.mp3");
  const start = () => {
    audio.play();
  };
  return (
    <div>
      <header className="relative flex flex-col items-center justify-start h-screen mb-auto overflow-hidden">
        <div className="relative z-30 w-full mt-0 bg-opacity-10 scroll-px-8 rounded-xl bg-gradient-to-b from-black">
          <div className="relative z-30 bg-opacity-10 scroll-px-8 rounded-xl">
            <h1 className="text-lg text-center text-white font-title px-[5vw] mt-0 ">
              PLENTY OF SPACE
            </h1>
          </div>
        </div>

        <div className="relative z-30 items-center text-sm text-gray-100 backdrop-blur-md bg-white/10 font-terminal p-4 rounded-2xl w-[60] border-2 border-solidoutline-white text-center px-[2vw] py-[1vh] mt-[3vw]">
          <button className="pr-5 text-white focus:ring-4" type="button">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={start}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              />
            </svg>
          </button>
          <Keyboard sentenceDelayPerCharRange={[100, 200]}>
            {({ type }) =>
              type(
                1000,
                "Incoming transmission ...",
                300,
                "First real estate agency to colonise space"
              )
            }
          </Keyboard>
          <Cursor />
          <br />
        </div>
        <div className="absolute duration-1000 ease-in-out z-30 bg-opacity-10 hover:bg-opacity-30 bg-transparent backdrop-blur-sm scroll-px-8 rounded-3xl mt-[72vh]">
          <button
            type="button"
            className="text-sm text-white font-secondary  px-[2vw] py-[1vh] hover:tracking-widest hover:text-red-600"
          >
            <Link
              to="/homebody"
              className="duration-1000 ease-in-out -translate-x-1/2 l-0"
            >
              {" "}
              FIND A NEW HOME{" "}
            </Link>
          </button>
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none playsinline object-fit"
        >
          <source src={video} type="video/mp4" />
        </video>
      </header>
    </div>
  );
};

export default HomePage;
