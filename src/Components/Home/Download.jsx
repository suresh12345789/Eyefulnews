import React from "react";
import playstore from "../../Asstes/images/downlaod.png";
import download from "../../Asstes/images/download.png";

const Download = () => {
  return (
    <>
      <div className="flex flex-col items-center p-5 lg:p-20">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide">
            Get The <span className="text-rose-900">EYE FULL NEWS</span> App
          </h2>
          <p className="text-sm md:text-md lg:text-lg mt-2 opacity-90">
            Stay updated with short and crisp news in your language.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <a
            href="/"
            className=" flex items-center"
          >
            <img src={playstore} alt="Apple Store" className="w-[130px] md:w-[150px] lg:w-[170px] mr-3" />

           
          </a>
          <a
            href="/"
            className=" flex items-center"
          >
            <img src={download} alt="Google Play" className="w-[130px] md:w-[150px] lg:w-[170px] mr-3" />

            
          </a>
        </div>
      </div>
    </>
  );
};

export default Download;
