import React from "react";
import PropTypes from "prop-types";

const HomeDescription = ({ name, desc, img }) => {
  return (
    <div>
      <img src={img} className="absolute w-full h-full bg-cover" alt="" />
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
