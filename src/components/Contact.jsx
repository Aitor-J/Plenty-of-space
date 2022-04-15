import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-screen bg-[url('./src/assets/images/space.jpg')]">
      <div className="bg-no-repeat bg-cover bg-center">
        <div className="text-center">
          <form className=" mx-auto  rounded-md p-16 flex flex-col sm:flex-row sm:justify-evenly">
            <div className="p-16 flex flex-col h-full w-full bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100 ">
              <h1 className="text-lg sm:text-4xl font-semibold tracking-wide mb-2">
                CONTACT US
              </h1>
              <div>
                <div>
                  <input
                    type="text"
                    placeholder="Firstname"
                    className="   rounded-xl  border-red-100 opacity-40 placeholder:text-center text-black placeholder:text-lg focus:outline-none  text-2xl p-2 mt-3 "
                  />
                </div>
                <input
                  type="text"
                  placeholder="Laststname"
                  className=" rounded-xl  border-red-100 opacity-40 placeholder:text-center text-black placeholder:text-lg focus:outline-none  text-2xl p-2 mt-3 "
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className=" rounded-xl  border-red-100 opacity-40 placeholder:text-center text-black placeholder:text-lg focus:outline-none  text-2xl p-2 mt-3 "
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Latitude"
                  className=" rounded-xl  border-red-100 opacity-40 placeholder:text-center text-black placeholder:text-lg focus:outline-none  text-2xl p-2 mt-3  "
                />
                <div>
                  <input
                    type="password"
                    placeholder="Longitude"
                    className=" rounded-xl  border-red-100 opacity-40 placeholder:text-center text-black placeholder:text-lg focus:outline-none  text-2xl p-2 mt-3 "
                  />
                </div>
              </div>
              <button
                type="submit"
                className="  bg-white opacity-30 hover:bg-blue-900 text-black text-2xl p-2 rounded-xl mt-3"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
