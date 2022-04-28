import React from "react";
import { Link } from "react-router-dom";
import video from "../assets/videos/Particles_323.mp4";

const about = () => {
  return (
    <div>
      <Link
        to="/homebody"
        className="duration-1000 ease-in-out -translate-x-1/2 l-0"
      >
        {" "}
        <div className="absolute text-lg text-white pb-[80vh] center content-center text-center mt-0 ml-[2vw] z-50 opacity-60">
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
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-30 content-center opacity-50 font-secondary ">
          <div className="pl-48 ">
            <div className="w-1/2 h-screen text-lg font-bold text-white rounded-3xl ml-vh30 bg-slate-600 ">
              <div className="pt-16 pl-20">
                <h2> ABOUT US</h2>
              </div>

              <div>
                <div className="pt-6 text-xs ml-vh2 pr-9 pl-9">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    perspiciatis iusto molestiae debitis <br />
                    veritatis natus quos sunt? Impedit soluta fugit nam unde
                    <br /> eius blanditiis accusantium facilis modi rem
                    obcaecati! Corporis! Lorem ipsum dolor sit, amet consectetur
                    <br /> adipisicing elit.Corrupti aliquid ducimus iusto
                    dignissimos laudantium facilis aspernatur aut nihil.
                    Doloremque est consequuntur illum dignissimos minima
                    explicabo,
                    <br /> quo ullam nulla quam laboriosam. Lorem ipsum dolor,
                    sit amet consectetur <br />
                    adipisicing elit. Velit, qui ducimus et sequi dignissimos
                    minima maiores possimus rem debitis! Placeat, eaque ad
                    repellendus debitis fugiat consequatur quod. Esse, quam
                    corrupti? Lorem ipsum dolor sit amet consectetur <br />
                    adipisicing elit. Quibusdam cum accusantium quis corrupti
                    architecto deleniti adipisci possimus pariatur commodi nobis
                    odit animi molestiae, voluptates fugit aliquam natus nemo
                    officia rerum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default about;
