import React from "react";

const HomeFrame = ({ name, desc, img }) => {
  console.log(name);
  return (
    <div className={`${img} bg-no-repeat bg-cover bg-center`}>
      <div className="h-full  bg-gray-50/50 w-80 mx-72 contrast-200">
        <div className="p-6 space-y-6">
          <h1 className="text-5xl font-bold text-center text-white shadow-current ">
            {name}
          </h1>
        </div>

        <div className="p-6 space-y-6">
          <p className="my-10 text-base font-medium leading-relaxed text-white drop-shadow-md ">
            Characteristic
          </p>
          <p className="text-base leading-relaxed text-white drop-shadow-2xl ">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeFrame;
