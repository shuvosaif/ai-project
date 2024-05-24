import React from "react";
import Google from "../assets/Google_logo.png";
import Microsoft from "../assets/microsoft_logo.png";
import Netflix from "../assets/netflix_logo.png";
import ProPic from "../assets/avatar5.png";
import ProPic1 from "../assets/avatar4.png";
import ProPic2 from "../assets/avatar2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";

const SlidingCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <div className="bg-amber-50  ">
      <div className="  max-w-7xl mx-auto  ">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="logo-text w-1/3 bg-white m-2">
              <img src={Netflix} alt="" />
              <p className="pt-2">
                SoftCraft has revolutionized our software development process.
                Their AI-driven platform has significantly increased our
                productivity and efficiency, allowing us to deliver high-quality
                products to our clients in record time.
              </p>
              <div className="owner-profile flex justify-start items-center gap-5 pt-4">
                <div>
                  <img src={ProPic2} className="rounded" alt="" />
                </div>
                <div>
                  <p className="text-xl">John Doe</p>
                  <p>CTO, ABC Company</p>
                </div>
              </div>
            </div>
            <div className="logo-text w-1/3 bg-white m-2">
              <img src={Microsoft} alt="" />
              <p className="pt-2">
                SoftCraft has revolutionized our software development process.
                Their AI-driven platform has significantly increased our
                productivity and efficiency, allowing us to deliver high-quality
                products to our clients in record time.
              </p>
              <div className="owner-profile flex justify-start items-center gap-5 pt-4">
                <div>
                  <img src={ProPic1} className="rounded" alt="" />
                </div>
                <div>
                  <p className="text-xl">John Doe</p>
                  <p>CTO, ABC Company</p>
                </div>
              </div>
            </div>
            <div className="logo-text w-1/3 bg-white m-2">
              <img src={Google} alt="" />
              <p className="pt-2">
                SoftCraft has revolutionized our software development process.
                Their AI-driven platform has significantly increased our
                productivity and efficiency, allowing us to deliver high-quality
                products to our clients in record time.
              </p>
              <div className="owner-profile flex justify-start items-center gap-5 pt-4">
                <div>
                  <img src={ProPic} className="rounded" alt="" />
                </div>
                <div>
                  <p className="text-xl">John Doe</p>
                  <p>CTO, ABC Company</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SlidingCard;
