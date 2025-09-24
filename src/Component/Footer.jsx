import React from "react";

import logo from "../assets/logo-footer.png";

const Footer = () => {
  return (
    <div className=" mt-20 container mx-auto bg-gray-900 text-white">
      <div className=" flex flex-col pb-10">
        <div className=" flex justify-center p-4">
          <img className=" h-[100px] " src={logo} alt="" />
        </div>

        <div className=" flex  justify-evenly">
          <div className="w-1/4 space-y-4 ">
            <h1>About</h1>
            <p className=" font-thin">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div className=" w-1/4 space-y-4">
            <h1 className=" ">Quick links</h1>
            <ul className=" list-disc font-thin space-y-4 ms-4">
              <li className="">Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="w-1/4 space-y-4">
            <h1>Subscribe</h1>
            <p className=" font-thin">
              Subscribe to our newsletter for the latest updates.
            </p>

            <div className="flex rounded-lg ">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow md:px-3 md:py-2 w-10 md:w-full text-gray-800 bg-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500 sm:text-sm"
              />
              <button className="md:px-4 md:py-2 text-sm font-thin  bg-red-500 text-white cursor-pointer md:font-bold rounded-r-lg hover:bg-red-600 transition duration-200 sm:px-3 sm:text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className=" text-center font-thin p-4 ">@2025 Copyright</p>
    </div>
  );
};

export default Footer;
