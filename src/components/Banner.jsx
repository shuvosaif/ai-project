import React from "react";
import Banner1 from "../assets/image.png";
import ShortBanner1 from "../assets/Group_4.png";
import ShortBanner2 from "../assets/Group_4(1).png";
import Paragraph from "./ui/Paragraph";
import Heading from "../components/ui/Heading";

const Banner = () => {
  return (
    <div className="bg-amber-50 border-2 border-red-500 ">
      <div className=" max-w-7xl  flex flex-col-reverse lg:flex-row mx-auto items-center gap-32  border-2 border-red-500">
        <div className=" w-full lg:w-7/12 border-2 border-red-500">
          <Heading className={"border-2 border-red-500"}>
            <span className="text-black ">
              Discover the Power of SoftCraft's
            </span>
            AI Platform
          </Heading>
          <Paragraph>
            Experience the versatility and ease of use with SoftCraft's
            cutting-edge AI-driven platform. Unlock the potential of AI
            technology for software creation.
          </Paragraph>
          <button className="bg-blue-500 rounded p-1 m-2 text-white">
            Get 14 days free trial
          </button>
        </div>
        <div className="w-5/12 mx-10  relative flex flex-col-reverse ">
          <div>
            <img src={Banner1} className="py-10" />
          </div>
          {/* Card One */}
          <div className="bg-white -left-1/3 rounded p-5 flex absolute bottom-20 ">
            <div className=" w-1/3 lg:w-1/2 mx-auto">
              <p>Total Employee</p>
              <h1 className="text-4xl">216</h1>
              <p className="text-xs text-gray-600">120 Men</p>
              <p className="text-xs text-gray-600">96 Women</p>
            </div>
            <div className="w-1/3 lg:w-1/2">
              <img src={ShortBanner1} alt="" className="w-30 " />

              <span className="bg-amber-100 p-1 rounded text-sm">
                +2% Past month
              </span>
            </div>
          </div>
          {/* Card One */}
          {/* Card Two */}
          <div className=" bg-white -right-14 rounded  p-2 flex absolute bottom-36 ">
            <div className="">
              <p className="text-xs">Total Employee</p>
              <h1 className="text-xl">216</h1>
              <p className="text-xs text-gray-600">120 Men</p>
              <p className="text-xs text-gray-600">96 Women</p>
            </div>
            <div className="">
              <img src={ShortBanner2} alt="" className=" " />
              <span className="bg-amber-100 p-1 rounded text-xs">
                +2% Past month
              </span>
            </div>
          </div>
          {/* Card Two */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
