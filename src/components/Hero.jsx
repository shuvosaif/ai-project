import React from "react";
import ShortBanner1 from "../assets/Group_4(1).png";
import Avatar1 from "../assets/avatar.png";
import Avatar2 from "../assets/avatar1.png";
import CheckIcon from "../assets/check-icon.png";
import SectionHeading from "./ui/SectionHeading";

const Hero = () => {
  return (
    <div className="bg-amber-50  ">
      <div className=" max-w-7xl mx-auto items-center flex flex-col lg:flex-row  gap-20">
        {/* leftpart */}
        <div className="w-full  lg:w-1/2  p-5 lg:p-0 mx-10">
          {/* first-section */}
          <div className="flex flex-col lg:flex-row   items-center justify-items-start gap-20">
            {/* card */}
            <div className="bg-amber-50 rounded  p-2">
              {/* card div */}
              <div className="flex bg-white w-[180px] rounded p-4 ">
                <div className="w-1/2">
                  <ul>
                    <li className="text-xs">Total Employment</li>
                    <h2 className="text-xl">220</h2>
                    <p className="text-xs text-gray-600">120 Men</p>
                    <p className="text-xs text-gray-600">96 Women</p>
                  </ul>
                </div>
                <div className="w-full">
                  <img src={ShortBanner1} alt="" className=" " />
                  <span className=" bg-amber-100 rounded text-xs">
                    +2% Past month
                  </span>
                </div>
              </div>
              {/* card div */}
              <div>
                <img src="" alt="" className="round" />
                <p></p>
              </div>
            </div>
            {/* card */}
            {/* Avatar With Text */}
            <div className="bg-amber-50 flex justify-between items-center gap-5">
              {/* Avatar */}
              <div>
                <img src={Avatar1} className="rounded " />
              </div>
              {/* Avatar */}
              {/* Text */}
              <div className="">
                <p>Lila Doe</p>
                <p>CTO, ABC Company</p>
              </div>
              {/* Text */}
            </div>
            {/* Avatar With Text */}
          </div>
          {/* second Section*/}
          <div className="bg-white ml-12 p-2 rounded-xl ">
            {/* item-one */}
            <div className="flex flex-row gap-2  ">
              <img src={CheckIcon} alt="" />
              <span> Unleash your creativity and bring ideas to life.</span>
            </div>
            {/* item-2 */}
            <div className="flex flex-row gap-2">
              <img src={CheckIcon} alt="" />
              <span> Unleash your creativity and bring ideas to life.</span>
            </div>
            {/* item-3 */}
            <div className="flex flex-row gap-2">
              <img src={CheckIcon} alt="" />
              <span> Unleash your creativity and bring ideas to life.</span>
            </div>
          </div>
          {/* second Section*/}

          {/* third-section */}
          <div className=" flex flex-col lg:flex-row-reverse  items-center justify-items-start gap-20">
            {/* card */}
            <div className="bg-amber-50 rounded  p-2">
              {/* card div */}
              <div className="flex bg-white w-[300px] rounded  p-4 ">
                <div className="">
                  <ul>
                    <li className="text-xl">Total Employment</li>
                    <h2 className="text-4xl">220</h2>
                    <p className="text-xs text-gray-600">120 Men</p>
                    <p className="text-xs text-gray-600">96 Women</p>
                  </ul>
                </div>
                <div className="">
                  <img src={ShortBanner1} alt="" className=" " />
                  <span className=" bg-amber-100 rounded text-xs">
                    +2% Past month
                  </span>
                </div>
              </div>
              {/* card div */}
              <div>
                <img src="" alt="" className="round" />
                <p></p>
              </div>
            </div>
            {/* card */}
            {/* Avatar With Text */}
            <div className="bg-amber-50 flex justify-between items-center gap-5">
              {/* Avatar */}
              <div>
                <img src={Avatar2} className="rounded " />
              </div>
              {/* Avatar */}
              {/* Text */}
              <div className="">
                <p>Lila Doe</p>
                <p>CTO, ABC Company</p>
              </div>
              {/* Text */}
            </div>
            {/* Avatar With Text */}
          </div>
        </div>
        {/* leftpart */}

        {/* rightpart */}
        <div className="w-full lg:w-2/5 p-5 lg:p-0  my-6">
          <SectionHeading>
            Unlock the Power of AI with SoftCraft's Cutting-Edge Features
          </SectionHeading>
          <p className="text-sm my-5 w-3/5">
            Experience seamless software creation with SoftCraft's innovative
            technology. Our AI-driven platform simplifies complex processes,
            empowering you to bring your ideas to life.
          </p>
          <div className="my-10">
            <butoon className=" text-blue-500 p-3 border ">See More</butoon>
          </div>
        </div>
        {/* rightpart */}
      </div>
    </div>
  );
};

export default Hero;
