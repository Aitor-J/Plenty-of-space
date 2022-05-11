import React from "react";
import { Link } from "react-router-dom";
import images from "../assets/images/black_hole.jpg";
import NavAbout from "./Planet-Page/components/NavAbout";

const about = () => {
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${images})` }}
      >
        <Link
          to="/homebody"
          className="duration-1000 ease-in-out -translate-x-1/2 hover:text-white "
        >
          <div className="absolute text-lg text-white pb-[80vh] center content-center text-center  ml-[3vw] z-50 opacity-60 duration-700 ease-in-out -translate-x-1/2 l-0 hover:tracking-widest hover:text-white ">
            {"<"}
          </div>
        </Link>

        <div className="relative z-30 content-center font-secondary ">
          <div className="pl-48 ">
            <div className="w-1/2 h-screen text-lg font-bold text-white bg-black  opacity-70 rounded-3xl ml-vh30">
              <div className="pt-10 pl-20">
                <h2> ABOUT US</h2>
              </div>

              <div>
                <div className="text-xs leading-8 tracking-wider text-center pt-9 ml-vh2 pr-9 pl-9 ">
                  <p>
                    The plenty of space is a space real estate agency
                    abbreviated as POS, is a space agency placed in low Earth
                    orbit, permanently occupied by an international crew
                    dedicated to scientific research in the space environment. .
                    It extends over 110 m in length, 74 m in width and 30 m in
                    height and has a mass of around 420 tonnes in 2019. It
                    comprises around fifteen pressurized modules, four of which
                    are devoted to scientific experiments, representing a volume
                    of pressurized space of around the seven astronauts, during
                    their stay lasting from 3 to 6 months, divides his working
                    time between assembly, maintenance and scientific tasks.
                    Scientific work focuses on biology – in particular the
                    adaptation of human beings to the absence of gravity – as
                    well as on materials science and astronomy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavAbout />
    </div>
  );
};

export default about;
