import React from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="bg-amber-50 ">
      <div class="mx-auto max-w-7xl gap-4  flex flex-col lg:flex-row justify-between items-center  ">
        <div>
          <img src={Logo} className=" my-5" />
        </div>
        <div>
          <ul className="flex gap-6">
            <li>About</li>
            <li>Features</li>
            <li>Our Process</li>
            <li>Benefits</li>
          </ul>
        </div>
        <div className="flex gap-5   items-center">
          <h1 className="">Log In</h1>
          <button className="bg-blue-500 rounded p-1 text-white ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
