import React from "react";
import logo from "../assets/logo.png";
import dollerPng from "../assets/Currency.png";

const Navbar = ({ availableBalance }) => {
  return (
    <div className="navbar flex justify-between bg-base-100  p-2 max-w-[1200px] mx-auto">
      <div className="">
        <a className=" text-xl">
          <img className=" h-[60px]" src={logo} alt="" />
        </a>
      </div>

      <div className=" flex items-center gap-3">
        <ul className=" flex gap-4 text-gray-600">
          <li className=" cursor-pointer">Home</li>
          <li className=" cursor-pointer">Fixture</li>
          <li className=" cursor-pointer">Tearm</li>
          <li className=" cursor-pointer">Schedules</li>
        </ul>
        <p className=" flex gap-2 bg-lime-200 rounded-md p-1">
          {availableBalance} <img src={dollerPng} alt="" />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
