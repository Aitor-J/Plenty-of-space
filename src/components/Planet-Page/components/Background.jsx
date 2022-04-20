import React from "react";

const Background = () => {
  return (
    <div className="absolute flex justify-end min-h-screen bg-black">
      <div className="mt-32 -ml-40">
        <img
          src="./src/assets/images/mars-background2.png"
          alt="erer"
          className="mt-32 -ml-40 scale-90 "
        />
      </div>
      <div>
        <img
          src="./src/assets/images/Mars1.png"
          alt="erer"
          className="mt-32 scale-11 "
        />
      </div>
    </div>
  );
};

export default Background;
