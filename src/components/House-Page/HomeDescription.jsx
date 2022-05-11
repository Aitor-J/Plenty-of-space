import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HomeDescription = ({ name, desc, img, link }) => {
  return (
    <div>
      <img src={img} className="absolute w-full h-full bg-cover" alt="" />
      <div>
        <Link
          to="/homebody"
          className="duration-1000 ease-in-out -translate-x-1/2  hover:text-white "
        >
          <div className="absolute text-lg text-white pb-[80vh] center content-center text-center  ml-[3vw] z-50 opacity-60 duration-700 ease-in-out -translate-x-1/2 l-0 hover:tracking-widest hover:text-white ">
            {link}
          </div>
        </Link>
      </div>

      <div className="pl-80 ">
        <div className="h-screen border-l border-r bg-white/10 w-min backdrop-blur-sm font-secondary">
          <div className="p-12 pt-5">
            <h1 className="font-semibold text-center text-stone-200 font-title text-tiny shadow-current ">
              {name}
            </h1>
          </div>

          <div className="p-6 space-y-2.5 pt-0.5 ">
            <p className="leading-relaxed text-stone-200 drop-shadow-md pt-[5vh] text-xms  font-secondary">
              Characteristics:
            </p>
            <p className="space-y-3 pt-[5vh] pb-16 font-nunito text-xsms text-gray-400 text-shadow-lg ">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

HomeDescription.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default HomeDescription;
