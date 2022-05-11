import React from "react";
import { Link } from "react-router-dom";
import NavContact from "./NavContact";
import images from "../assets/images/123.png";

const Contact = () => {
  return (
    <div className="bg-cover h-screen w-full">
      <div style={{ backgroundImage: `url(${images})` }} className="h-screen">
        <Link to="/homebody" className="duration-1000">
          <div className="absolute text-lg text-white center content-center text-center -mb-vh30 ml-[2vw] z-50 opacity-60 duration-700 ease-in-out -translate-x-1/2 l-0 hover:tracking-widest hover:text-white">
            {"<"}
          </div>
        </Link>

        <form className="w-1/3 backdrop-blur-2xl h-full flex flex-col items-center justify-center font-secondary">
          <div className=" pt-2 w-4/5 ">
            <label
              htmlFor="name_input"
              className="font-sans text-sm text-white "
            >
              Name
              <input
                type="text"
                name="username"
                required
                placeholder="Write your Name"
                className="w-full px-12 py-3 font-sans text-xs text-center text-black border  border-gray-500 rounded shadow opacity-60  "
              />
            </label>
          </div>
          <div className="w-4/5">
            <label
              htmlFor="email_input"
              className="font-sans text-sm font-medium text-white "
            >
              Email
              <input
                type="email"
                name="email"
                required
                placeholder="Write your email"
                className="w-full px-12 py-3 font-sans text-xs text-center text-black border border-gray-500 rounded shadow opacity-60 hover"
              />
            </label>
          </div>
          <div className="pt-2 w-4/5 ">
            <label
              htmlFor="message_input"
              className="font-sans text-sm font-medium text-white "
            >
              Message
              <textarea
                rows="5"
                cols="33"
                type="text"
                name="text"
                required
                placeholder="Write your message"
                className="w-full resize-none font-sans text-xs  text-center pt-16 text-black border border-gray-500 rounded shadow opacity-60 "
              />
            </label>
          </div>

          <div className="w-2/3 pt-12 font-sans text-sm font-medium pb-0">
            <button
              type="submit"
              className="w-full py-4 text-center text-white bg-gray-900 rounded-md hover:bg-sky-900 transition"
            >
              SEND
            </button>

            <div className="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" />
          </div>
        </form>
      </div>
      <NavContact />
    </div>
  );
};

export default Contact;
