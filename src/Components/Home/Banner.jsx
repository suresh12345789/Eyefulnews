import React from "react";
import playstore from "../../Asstes/images/download.png";
import apple from "../../Asstes/images/downlaod.png";
import banner from "../../Asstes/images/banner.png";

const Banner = () => {
  return (
    <>
      <div
        id="/"
        className="md:flex items-center md:gap-5 lg:gap-10 mx-5 md:mx-10 lg:mx-20 mt-10 bg-white rounded-lg   "
      >
        <div className="w-full md:w-1/2 ">
          <img src={banner} className="rounded-lg shadow-lg" alt="banner" />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-3xl lg:text-5xl font-extrabold mb-6 text-gray-900 drop-shadow-lg">
            "Stay Informed with Real-Time News Updates
          </h1>

          <p className="text-lg mb-8 text-gray-600 font-medium">
            Get the latest breaking stories, in-depth reports, and trending
            headlines—delivered straight to you as it happens."
          </p>

          <div className="flex gap-3">
            <a
              href="/"
              className="font-semibold  transition-all hover:scale-105"
            >
              <img
                src={playstore}
                className="w-[200px] md:w-40"
                alt="Play Store"
              />
            </a>

            <a
              href="/"
              className="md:text-lg transition-all hover:bg-gray-700 hover:scale-105 md:mt-0"
            >
              <img
                src={apple}
                className="w-[200px] md:w-40"
                alt="Apple Store"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
