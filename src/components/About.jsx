import React from "react";
import { Link } from "react-router-dom";
import NavAbout from "./Planet-Page/components/NavAbout";

const about = () => {
  return (
    <div>
      <Link
        to="/homebody"
        className="duration-1000 ease-in-out -translate-x-1/2 "
      >
        <div className="absolute text-lg text-white pb-[80vh] center content-center text-center mt-0 ml-[2vw] z-50 opacity-60">
          {"<"}
        </div>
      </Link>

      <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="./src/assets/videos/Particles_323.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-30 font-secondary opacity-50 content-center ">
          <div className=" pl-48">
            <div className="w-1/2 rounded-3xl h-screen text-lg font-bold ml-vh30   bg-slate-600 text-white  ">
              <div className="pl-20 pt-16">
                <h2> ABOUT US</h2>
              </div>

              <div>
                <div className="text-xs ml-vh2 pt-6  pr-9 pl-9">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    perspiciatis iusto molestiae debitis <br></br>veritatis
                    natus quos sunt? Impedit soluta fugit nam unde
                    <br /> eius blanditiis accusantium facilis modi rem
                    obcaecati! Corporis! Lorem ipsum dolor sit, amet consectetur
                    <br /> adipisicing elit.Corrupti aliquid ducimus iusto
                    dignissimos laudantium facilis aspernatur aut nihil.
                    Doloremque est consequuntur illum dignissimos minima
                    explicabo,<br></br> quo ullam nulla quam laboriosam. Lorem
                    ipsum dolor, sit amet consectetur <br></br>adipisicing elit.
                    Velit, qui ducimus et sequi dignissimos minima maiores
                    possimus rem debitis! Placeat, eaque ad repellendus debitis
                    fugiat consequatur quod. Esse, quam corrupti? Lorem ipsum
                    dolor sit amet consectetur <br></br>adipisicing elit.
                    Quibusdam cum accusantium quis corrupti architecto deleniti
                    adipisci possimus pariatur commodi nobis odit animi
                    molestiae, voluptates fugit aliquam natus nemo officia
                    rerum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavAbout />
      </header>
    </div>
  );
};

export default about;
