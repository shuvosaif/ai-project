import React from "react";
import Banner from "../assets/banner.png";
import SectionHeading from "./ui/SectionHeading";

const SlidingBanner = () => {
  return (
    <div className="bg-amber-50 ">
      <div className="max-w-7xl mx-auto ">
        <div className="">
          <img src={Banner} alt="" className="w-screen" />
        </div>
        <div>
          <div className=" flex flex-col lg:flex-row justify-center  gap-20 m-10">
            <div className="lg:w-7/12">
              <SectionHeading className={"text-blue-500"}>
                <h1 className="">
                  Unlock the Power of AI-Driven Software Creation with SoftCraft
                </h1>
              </SectionHeading>
            </div>
            <div className="lg:w-5/12">
              <span>
                SoftCraft is a cutting-edge platform that combines the latest
                advancements in artificial intelligence with user-friendly
                features, making it easy for businesses of all sizes to develop
                innovative software solutions. With SoftCraft, you can bring
                your ideas to life and stay ahead in the rapidly evolving tech
                landscape.
              </span>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SlidingBanner;
