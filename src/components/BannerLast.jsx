import React from "react";
import Logo from "../assets/AssistantMilano.png";
import Heading from "../components/ui/Heading";
import Paragraph from "./ui/Paragraph";

const BannerLast = () => {
  return (
    <div className=" bg-amber-50 ">
      <div className="max-w-7xl mx-auto py-10">
        <div className="bg-white mx-10 flex flex-col-reverse   lg:flex-row  gap-10 rounded-lg p-10">
          <div className="lg:w-10/12 ">
            <Heading>Create AI-driven software effortlessly</Heading>
            <Paragraph>
              Unlock the power of AI technology to revolutionize your software
              development process.
            </Paragraph>
            <button className="bg-blue-500 rounded p-2 m-2 text-white">
              Get 14 days free trial
            </button>
          </div>
          <div className="lg:w-2/12 ">
            <img src={Logo} alt="" className="h-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerLast;
