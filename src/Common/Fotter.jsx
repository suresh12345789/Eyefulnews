import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const Fotter = () => {
  return (
    <div className="bg-primary text-customblack font-semibold ">
      <div className="mx-5 mt-10 p-5 md:p-10 md:flex md:justify-around flex-col md:flex-row">
        <ul className=" mb-6 md:mb-0">
          <li>
            <a href="#home" className="text-[20px] md:text-2xl font-semibold">
              Hostel Management System
            </a>
          </li>
          <span className=" mt-1 text-[13px]">MANAGE RENT EASY</span>
        </ul>

        <ul className=" leading-10  text-md  mb-6 md:mb-0">
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="#HowitsWorks">How it Works</a>
          </li>
          <li>
            <a href="#About">Abouts Us</a>
          </li>
          <li>
            <a href="#Download">Download</a>
          </li>

          <li>
            <a href="#Contact">Contact Us</a>
          </li>
        </ul>

        <ul className="leading-10">
          <li className="flex  items-center gap-2 mb-2">
            <button>
              <AiOutlineMail size={25} />
            </button>
            <a href="mailto:shivakumar@cresolinfoserv.com">
              shivakumar@cresolinfoserv.com
            </a>
          </li>

          <li className="flex  gap-2">
            <button>
              <FiPhoneCall size={25} />
            </button>
            <a href="tel:+919948333447">+91 9948333447</a>
          </li>
        </ul>
      </div>

      <div className="text-center bg-secondary text-customblack py-3">
        <span className="">&#169; 2024 Hms. All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Fotter;
