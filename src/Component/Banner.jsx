import React from "react";
import bannerImg from "../assets/banner-main.png";
import bannerBgImage from "../assets/bg-shadow.png";

const Banner = () => {
  return (
    <div className=" relative flex justify-center items-center container mx-auto bg-gray-900 p-10 rounded-xl my-10 text-center">
      <div
        className=" absolute z-0  inset-0 rounded-xl"
        style={{ backgroundImage: `url(${bannerBgImage})` }}
      >
        overlay
      </div>
      <div className=" relative z-10 flex flex-col items-center space-y-3">
        <img src={bannerImg} alt="" />
        <h1 className=" font-bold text-3xl text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className=" text-gray-500">Beyond Boundaries Beyond Limits</p>
        <div>
          <button className="border border-lime-200 px-0.5 py-2 rounded-xl cursor-pointer">
            <span className="bg-lime-200 p-2 rounded-xl">
              Claim Free Credit
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
