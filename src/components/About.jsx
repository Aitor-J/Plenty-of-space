import React from "react";
import { Link } from "react-router-dom";

import NavAbout from "./Planet-Page/components/NavAbout";

import video from "../assets/videos/Particles_323.mp4";

const about = () => {
  return (
    <div>
      <Link
        to="/homebody"
        className="duration-1000 ease-in-out -translate-x-1/2  hover:text-white "
      >
        <div className="absolute text-lg text-white pb-[80vh] center content-center text-center  ml-[3vw] z-50 opacity-60 duration-700 ease-in-out -translate-x-1/2 l-0 hover:tracking-widest hover:text-white ">
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
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-30 content-center font-secondary ">
          <div className="pl-48  ">
            <div className=" opacity-70 w-1/2 h-screen text-lg font-bold text-white rounded-3xl ml-vh30 bg-slate-600 ">
              <div className="pt-10 pl-20">
                <h2> ABOUT US</h2>
              </div>

              <div>
                <div className="pt-6 text-xs ml-vh2 pr-9 pl-9">
                  <p>
                    The plenty of space is a space real estate agency
                    abbreviated as POS, is a space agency placed in low Earth
                    orbit, permanently occupied
                    <br /> by an international crew dedicated to scientific
                    research in the space environment. . It extends over 110 m
                    in length, 74 m in width and 30 m in height and has a mass
                    of around 420 tonnes in 2019. <br />
                    It comprises around fifteen pressurized modules, four of
                    which are devoted to scientific experiments, representing a
                    volume of pressurized space of around 900 m3, of which 400
                    m3 is habitable. The solar panels, covering an area
                    <br />
                    of 2500m2 provide 110 kW of electricity. The Station moves
                    around the Earth at an altitude maintained around 330-420
                    kilometers. It has been permanently occupied since the year
                    2000, first by three people, then by six from November
                    <br /> 2009, and seven since 2021. Each of the seven
                    astronauts, during their stay lasting from 3 to 6 months,
                    divides his working time between assembly, <br />
                    maintenance and scientific tasks. Scientific work focuses on
                    biology – in particular the adaptation of human beings to
                    the absence of gravity – as well as on materials science and
                    astronomy.
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
