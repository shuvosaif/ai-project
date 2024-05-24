import React from "react";
import VideoImg from "../assets/video-thumbnail.png";
import TapButton from "../assets/Group_9.png";

const VideoBanner = () => {
  return (
    <div className="bg-amber-50 ">
      <div className="max-w-7xl mx-auto">
        {/* background-part */}
        <div className="w-full ">
          {/* bg-amber-part */}
          <div className="bg-amber-50 h-[172px]"></div>
          {/* bg-blue-part */}
          <div className="bg-blue-500 h-[450px] relative">
            <div className="absolute inset-20 flex justify-center -top-40">
              <img src={VideoImg} className="rounded-xl " />
            </div>

            <div className="absolute -inset-72 lg:inset-0 flex justify-center top-10">
              <img
                src={TapButton}
                className="absolute left-[550px] z-20 top-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
