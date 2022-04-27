import React from "react";
import mars from "../../../assets/images/3-mars.png";
import marsb from "../../../assets/images/3-mars-blur.png";

const Background = () => {
  return (
    <div className="flex min-h-screen bg-black ">
      <div className="translate-y-[25vh] -translate-x-[30vh]">
        <img src={marsb} alt="Marsgauche" />
      </div>
      <div className="flex flex-col content-center scale-75">
        <img src={mars} alt="Marsdroite" className=" animate-spinveryslow" />
      </div>
    </div>
  );
};

export default Background;
