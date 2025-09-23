import React from "react";

import logo from "../assets/logo-footer.png";

const Footer = () => {
  return (
    <div className=" mt-10 max-w-[1200px] mx-auto bg-gray-900 text-white">
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
            <div className=" flex relative bg-gray-200 rounded-2xl text-gray-500">
              <input
                className="  p-1 rounded-l-xl outline-none"
                type="text"
                placeholder="enter your email"
              />
              <button className=" absolute end-0 p-1 rounded-r-xl   bg-linear-to-r/longer from-indigo-900 to-teal-300 text-white font-bold cursor-pointer">
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
