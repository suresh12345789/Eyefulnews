

import React, { useState, useEffect } from "react";
import { MdEmail } from "react-icons/md";

import { FaLocationDot } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

const Fotter = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" text-white  ">
      <div className=" mt-10 p-5 bg-black  md:p-10 grid  md:grid-cols-2 grid-cols-1  lg:grid-cols-3   ">
        <ul className=" mb-6 md:mb-0  ">
      
          <li className="mt-5">
            <a href="#home" className="text-lg md:text-2xl   font-semibold   ">
            EYE FULL NEWS.
            </a>
          </li>

          <li className="pt-3">
            <a href="https://maps.app.goo.gl/QCyNbRabUNhSDA5Q9" target="_blank">
              <div className="flex  gap-2 hover:text-iconscolors">
                <h1 className="text-2xl">
                  <FaLocationDot />
                </h1>
                <h1 className=" text-md md:text-lg ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos 
                </h1>
              </div>
            </a>
          </li>
        </ul>

        <ul className=" leading-10  text-md  mb-6 md:mb-0    md:pl-36   md:text-start">
          <li>
            <a href="/" className="hover:border-b-2 hover:border-iconscolors">
              Home
            </a>
          </li>

     
          <li>
            <a
              href="#About"
              className="hover:border-b-2 hover:border-iconscolors"
            >
              Abouts Us
            </a>
          </li>

          <li>
            <a
              href="#Language"
              className="hover:border-b-2 hover:border-orange-500"
            >
              Language
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:border-b-2 hover:border-iconscolors"
            >
             Category's
            </a>
          </li>

          <li>
            <a
              href="#Contact"
              className="hover:border-b-2 hover:border-iconscolors"
            >
              Contact Us
            </a>
          </li>
        </ul>

        <ul className="leading-10">
          <li className="flex  items-center gap-2 mb-2 hover:text-iconscolors md:text-lg text-md">
            <button className="">
              <MdEmail size={25} />
            </button>
            <a href="mailto:shivakumar@cresolinfoserv.com">
              Eyefull News.com
            </a>
          </li>

          <li className="flex  gap-2 hover:text-iconscolors ">
            <button className="">
              <FaPhoneVolume size={25} />
            </button>
            <a href="tel:+919948333447">+91 99 8888 7777</a>
          </li>

          <div className="mt-5">
            <h1 className="text-xl">Follow Us:</h1>

            <div className="flex text-3xl pt-3 gap-3 ">
              <li className=" hover:text-iconscolors">
                <a href="https://www.instagram.com/cresol_infoserv/?igshid=MzRlODBiNWFlZA%3D%3D">
                  <FaInstagramSquare />{" "}
                </a>
              </li>
              <li className="hover:text-iconscolors">
                {" "}
                <a href="https://www.linkedin.com/company/cresol-infoserv-pvt-ltd/">
                  <FaLinkedin />{" "}
                </a>{" "}
              </li>

              <h1 className="hover:text-iconscolors">
                {" "}
                <a href="https://www.facebook.com/cresolinfoservpvtltd/">
                  <FaFacebook />{" "}
                </a>{" "}
              </h1>
            </div>

            <div></div>
          </div>
        </ul>
      </div>

      <div className="text-center bg-iconscolors hover:text-black text-white py-3">
        <span className="">
          &#169; {year} EYE FULL NEWS. All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Fotter;
