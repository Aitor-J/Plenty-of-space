import React from "react";
import { Link } from "react-router-dom";

const about = () => {
  return (
    <div>
      <Link
        to="/homebody"
        className="duration-1000 ease-in-out -translate-x-1/2 l-0"
      >
        {" "}
        <div className="absolute text-lg text-white pb-[80vh] center content-center text-center mt-0 ml-[2vw] z-50">
          {"<"}
        </div>{" "}
      </Link>
      <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="./src/assets/video/Particles - 323.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="z-30 flex flex-col items-center justify-center w-1/2 text-base font-bold text-white font-secondary ml-vh10">
          <h2> ABOUT US</h2>

          <div className="z-30 flex flex-col items-center justify-center text-xs text-white font-secondary">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              perspiciatis iusto molestiae debitis veritatis natus quos sunt?
              Impedit soluta fugit nam unde
              <br /> eius blanditiis accusantium facilis modi rem obcaecati!
              Corporis! Lorem ipsum dolor sit, amet consectetur
              <br /> adipisicing elit.Corrupti aliquid ducimus iusto dignissimos
              laudantium facilis aspernatur aut nihil. Doloremque est
              consequuntur illum dignissimos minima explicabo, quo ullam nulla
              quam laboriosam.
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default about;
