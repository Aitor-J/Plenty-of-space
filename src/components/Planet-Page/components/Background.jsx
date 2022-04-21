import React from "react";
import mars from "../../../assets/images/3-mars.png";
import marsb from "../../../assets/images/3-mars-blur.png";

const Background = () => {
  return (
    <div className="flex min-h-screen bg-black ">
      <div className="translate-y-[25vh] -translate-x-[30vh]">
        <img src={marsb} alt="Marsgauche" />
      </div>
      <div className="w-2/3 mt-[10vh] flex flex-col center">
        <img src={mars} alt="Marsdroite" />
      </div>
    </div>
  );
};

export default Background;
