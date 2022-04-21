import React from "react";

const about = () => {
  return (
    <div>
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

        <div className=" font-secondary flex flex-col justify-center items-center z-30 text-white text-base font-bold w-1/2 ml-vh10 ">
          <h2> ABOUT US</h2>

          <div className=" font-secondary flex flex-col justify-center items-center  z-30 text-white text-xs">
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
