import React from "react";

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
          src="./src/assets/videos/TheSunInTheSpace.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-30 grid grid-cols-12 font-secondary opacity-60 ">
        <div className="min-h-screen col-span-4 font-sans font-bold text-white bg-black pl-7">
          <div className="relative grid items-center min-h-screen grid-flow-col grid-rows-6  justify-items-start">
            <div className="row-span-4 row-start-2 text-xs">
              <div className="pt-10 pr-20 ">
                <label htmlFor="name_input" className="font-sans text-sm">
                  Name
                  <input
                    type="text"
                    name="username"
                    placeholder="Write your Name"
                    className="w-full px-12 py-3 font-sans text-xs text-center border border-gray-500 rounded shadow opacity-60 hover:"
                  />
                </label>
              </div>
              <div className="pt-2 pr-20">
                <label
                  htmlFor="email_input"
                  className="font-sans text-sm font-medium"
                >
                  Email
                  <input
                    type="password"
                    name="password"
                    placeholder="Write your email"
                    className="w-full px-12 py-3 font-sans text-xs text-center border border-gray-500 rounded shadow  opacity-60 hover:"
                  />
                </label>
              </div>
              <div className="pt-2 pr-20 ">
                <label
                  htmlFor="message_input"
                  className="font-sans text-sm font-medium"
                >
                  Message
                  <input
                    type="password"
                    name="password"
                    placeholder="Write your message"
                    className="w-full px-12 py-20 font-sans text-xs text-center border border-gray-500 rounded shadow  opacity-60 hover:"
                  />
                </label>
              </div>
              <div className="w-full pt-8 pr-20 font-sans text-sm font-medium">
                <button
                  type="button"
                  className="w-full py-4 text-center text-white rounded-md bg-sky-800 hover:bg-indigo-900"
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
