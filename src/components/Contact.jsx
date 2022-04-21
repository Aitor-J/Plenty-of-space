import React from "react";
import Banner from "./Planet-Page/components/bannerInfo";

const Contact = () => {
  return (
    <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source
          src="./src/assets/video/TheSunInTheSpace.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="font-secondary grid grid-cols-12 relative z-30 opacity-60 ">
        <div className="col-span-4 text-white font-sans font-bold bg-black min-h-screen pl-7">
          <div className=" relative grid grid-rows-6 grid-flow-col min-h-screen items-center justify-items-start">
            <div className="row-span-4 row-start-2 text-xs">
              <div className=" pt-10 pr-20 ">
                <label htmlFor="name_input" className="text-sm font-sans">
                  Name
                  <input
                    type="text"
                    name="username"
                    placeholder="Write your Name"
                    className="w-full opacity-60  text-center py-3 px-12 border hover: border-gray-500 rounded shadow text-xs font-sans"
                  />
                </label>
              </div>
              <div className="pt-2 pr-20">
                <label
                  htmlFor="email_input"
                  className="text-sm font-sans font-medium"
                >
                  Email
                  <input
                    type="password"
                    name="password"
                    placeholder="Write your email"
                    className=" w-full opacity-60  text-center py-3 px-12 border hover: border-gray-500 rounded shadow text-xs font-sans"
                  />
                </label>
              </div>
              <div className="pt-2 pr-20 ">
                <label
                  htmlFor="message_input"
                  className="text-sm font-sans font-medium"
                >
                  Message
                  <input
                    type="password"
                    name="password"
                    placeholder="Write your message"
                    className=" w-full opacity-60 text-center py-20 px-12 border hover: border-gray-500 rounded shadow text-xs font-sans"
                  />
                </label>
              </div>
              <div className="text-sm font-sans font-medium w-full pr-20 pt-8">
                <button
                  type="button"
                  className="text-center w-full py-4 bg-sky-800 hover:bg-indigo-900 rounded-md text-white"
                >
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Contact;
