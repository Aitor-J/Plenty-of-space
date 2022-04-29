import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div className="flex justify-center">
      <button
        type="button"
        className="flex justify-center text-sm text-white font-secondary  px-[2vw] py-[1vh] hover:tracking-widest hover:text-red-600"
      >
        <Link to="/homebody" className="duration-1000 ease-in-out ">
          TODAY OFFERS
        </Link>
      </button>
    </div>
  );
};

export default Button;
