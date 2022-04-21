import React from "react";

const footerInfo = () => {
  return (
    <div className="absolute w-2/3 text-white bottom-[5vh] left-1/3 ">
      <ul className="flex justify-between space-x-40 ">
        <li className="w-15 font-secondary">
          EXOSPHERE
          <p className="py-2 font-mono text-xs text-gray-400">blabla</p>
        </li>

        <li className="w-15 font-secondary">
          CLIMAT{" "}
          <p className="py-2 font-mono text-xs text-gray-400">
            bonne météo frérot
          </p>
        </li>
        <li className=" w-15 pr-[10vh] font-secondary">
          PHYSICAL
          <p className="py-2 font-mono text-xs text-gray-400">blabla</p>
        </li>
      </ul>
    </div>
  );
};

export default footerInfo;
