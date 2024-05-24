import React from "react";
import Banner from "../assets/avatae3.png";
import Logo1 from "../assets/icon1.png";
import Logo2 from "../assets/icon2.png";
import Logo3 from "../assets/icon3.png";

const SideBanner = () => {
  return (
    <div className="bg-amber-50  ">
      <div className="max-w-7xl mx-auto bg-amber-50 p-10 flex flex-col lg:flex-row justify-center items-center gap-40 ">
        <div className="relative ">
          <img src={Banner} alt="" />
          <div className="absolute bg-blue-200 rounded-lg p-2  left-14 top-36 w-40">
            <h1 className="text-xl">Job Open</h1>
            <h4 className="text-4xl">10</h4>
            <span className="text-sky-600">4 Active hiring</span>
          </div>
          {/*left-14 lg:
           left-36 lg: */}
          <div className="absolute bg-pink-100 rounded-lg p-2 left-56 top-56 w-40">
            <h1 className="text-xl">New Employees</h1>
            <h4 className="text-4xl">24</h4>
            <span className="text-pink-400">4 Departments</span>
          </div>
        </div>
        <div>
          <div>
            <img src={Logo2} alt="" />
            <h1 className="text-3xl py-3">Unlock Powerful Features Today</h1>
            <span>
              Discover the core functionalities of SoftCraft and unleash the
              potential of AI-driven software creation.
            </span>
          </div>
          <div className="pt-3">
            <img src={Logo3} alt="" />
            <h1 className="text-3xl py-3">Streamline Your Workflow</h1>
            <span>
              Experience seamless integration and innovative iconography that
              simplifies software development.
            </span>
          </div>
          <div className="pt-3">
            <img src={Logo1} alt="" />
            <h1 className="text-3xl py-3">Unleash Your Creativity</h1>
            <span>
              Embrace dynamic graphics and unleash your creativity with
              SoftCraft's AI-powered platform.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBanner;
