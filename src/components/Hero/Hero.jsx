import React from "react";
import { Link } from "react-router-dom";
import HeroPng from "../../assets/logo.png";

const Hero = () => {
  return (
    <>
      <div className="min-h-[550px] sm:min-h-[600px] bg-[#1abc9c] flex justify-center items-center text-white">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                We provide the highest quality{" "}
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  className="bg-clip-text text-transparent bg-[#BF3131] font-[Poppins] tracking-wide"
                >
                  Medicine
                </span>{" "}
                in the city.
              </h1>
              <div data-aos="fade-up" data-aos-delay="400">
                <Link to="/cart/">
                <button className="bg-[#00CED1] border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full animate-pulse">
                  Health & Wellness Delivered
                </button>

                </Link>
              </div>
            </div>

            {/* Image section */}
            <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
              <img
                src={HeroPng}
                alt="biryani img"
                className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
