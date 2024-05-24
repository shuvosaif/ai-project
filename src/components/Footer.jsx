import React from "react";
import Logo from "../assets/logo-2.png";
import Paragraph from "./ui/Paragraph";

const Footer = () => {
  return (
    <div className="bg-blue-500 ">
      <div className=" max-w-7xl mx-auto text-white ">
        <div className="upperPart p-10 flex flex-col lg:flex-row justify-between items-start gap-10 ">
          <div className="w-full  lg:w-1/3">
            <div>
              <img src={Logo} alt="" className="" />
            </div>
            <div>
              <Paragraph>
                Unlock the power of AI technology to revolutionize your software
                development process
              </Paragraph>
            </div>
          </div>
          <div className="w-full  lg:w-1/3 flex flex-row ">
            <div className="w-1/2">
              <ul>
                <li>About</li>
                <li>Features</li>
                <li>Our Process</li>
                <li>Benefits</li>
              </ul>
            </div>
            <div className="w-1/2">
              <ul>
                {" "}
                <li>Blog</li>
                <li>Contact</li>
                <li>Hiring</li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col  lg:flex-row justify-between  items-center gap-2 ">
            <input
              className="rounded h-8 w-2/3"
              placeholder="  jane@example.com"
            ></input>
            <button className="rounded block w-1/3 border-1 bg-black text-white p-1 m-1 ">
              Get Started
            </button>
          </div>
        </div>
        <div className="lowerPart p-10 ">
          <div className="w-full lg:w-1/3 text-xs ">
            <ul className="flex flex-row gap-3">
              <li>© 2024 SoftCraft. All rights reserved.</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
