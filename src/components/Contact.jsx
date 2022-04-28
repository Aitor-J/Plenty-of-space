import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <Link
        to="/homebody"
        className="duration-1000 ease-in-out -translate-x-1/2 l-0"
      >
        {" "}
        <div className="absolute text-lg text-white pb-96 center content-center text-center mt-0 ml-[2vw] z-50 opacity-60">
          {"<"}
        </div>{" "}
      </Link>

      <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="./src/assets/videos/TheSunInTheSpace.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-30 grid grid-cols-12 font-secondary opacity-60 ">
          <div className="min-h-screen col-span-4 font-sans font-bold text-white bg-black pl-20">
            <div className="relative grid items-center min-h-screen grid-flow-col grid-rows-6  justify-items-start">
              <div className="row-span-4 row-start-2 text-xs">
                <div className="pt-10 pr-20 ">
                  <label htmlFor="name_input" className="font-sans text-sm ">
                    Name
                    <input
                      type="text"
                      name="username"
                      placeholder="Write your Name"
                      className="w-full px-12 py-3 font-sans text-xs text-center border border-gray-500 rounded shadow opacity-60  text-black"
                      for="grid-password"
                    />
                  </label>
                </div>
                <div className="pt-2 pr-20 text-">
                  <label
                    htmlFor="email_input"
                    className="font-sans text-sm font-medium text-white "
                    for="grid-password"
                  >
                    Email
                    <input
                      type="email"
                      name="email"
                      placeholder="Write your email"
                      className="w-full px-12 py-3 font-sans text-xs text-center border border-gray-500 rounded shadow  opacity-60 hover text-black"
                    />
                  </label>
                </div>
                <div className="pt-2 pr-20 ">
                  <label
                    htmlFor="message_input"
                    className="font-sans text-sm font-medium text-white"
                    for="grid-password"
                  >
                    Message
                    <input
                      type="text"
                      name="text"
                      placeholder="Write your message"
                      className="w-full px-12 py-20 font-sans text-xs text-center border border-gray-500 rounded shadow  opacity-60 text-black"
                    />
                  </label>
                </div>
                <div className="w-full pt-8 pr-20 font-sans text-sm font-medium">
                  <button
                    type="button"
                    className="w-full py-4 text-center text-white rounded-md bg-gray-900 hover:bg-sky-900"
                  >
                    SEND
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Contact;
