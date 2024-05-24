import React from "react";

import SubSectionHeader from "./ui/SubSectionHeader";
import carBannerData from "../constant/cardBanner.constant";
import Paragraph from "./ui/Paragraph";

const CardBanner = () => {
  return (
    <div className="bg-amber-50 ">
      <div className=" max-w-7xl mx-auto py-20 ">
        <div className="justify-center  items-center  lg:w-full mx-auto  ">
          <h1 className=" text-5xl text-center font-medium font-instrument max-w-2xl mx-auto my-10  ">
            Discover the Power of SoftCraft: A Step-by-Step Software Creation
            Process
          </h1>
        </div>
        <div className="  flex flex-col lg:flex-row justify-evenly  gap-10 ">
          {carBannerData.map((data) => (
            <div className="bg-white w-full p-2 ">
              <div>
                <img src={data.logo} alt="" />
              </div>
              <div>
                <SubSectionHeader>{data.title}</SubSectionHeader>
                <Paragraph className="mt-5">{data.paragraph}</Paragraph>
                <button className=" mt-5 p-2 rounded border border-blue-600 text-blue-500 font-serif font-bold">
                  See more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardBanner;
