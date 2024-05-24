import React from "react";
import google from "../assets/Google_logo.png";
import netflix from "../assets/netflix_logo.png";
import microsoft from "../assets/microsoft_logo.png";
import aws from "../assets/amazonaws_logo.png";
import apple from "../assets/apple.png";

const AdvBanner = () => {
  return (
    <div className="bg-amber-50 ">
      <div className=" mx-auto max-w-7xl ">
        <div className="text-center text-2xl  py-5">
          <span className="">
            Trusted by industry-leading companies around the globe
          </span>
        </div>
        <div className="py-2">
          <ul className="flex flex-col lg:flex-row mx-52 lg:mx-0 justify-around ">
            <li>
              <img src={apple} />
            </li>
            <li>
              <img src={google} />
            </li>
            <li>
              <img src={microsoft} />
            </li>
            <li>
              <img src={aws} />
            </li>
            <li>
              <img src={netflix} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdvBanner;
