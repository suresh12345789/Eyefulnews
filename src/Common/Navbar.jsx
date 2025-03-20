import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import logo from "../Asstes/images/hmslogo.png.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (hash) => {
    return location.hash === hash ? "text-[#CA3A03]" : "";
  };

  const handleScroll = (hash) => {
    setIsMenuOpen(false);

    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        const navbarHeight = document.querySelector("header").offsetHeight;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navbarHeight - 20,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <header className="bg-white shadow-lg w-full z-10 sticky top-0">
      <div className="flex items-center justify-between md:py-4 py-2 px-5 md:px-10">
        <div>
          <a href="/">
            <img
              src={logo}
              alt="logo"
              className="md:w-[120px] md:h-[80px] w-[90px] h-[65px] object-cover"
            />
          </a>
        </div>

        <nav className="items-center hidden lg:space-x-12 space-x-4 md:flex text-lg font-semibold">
          <HashLink smooth to="#" className={`group w-max ${isActive("#")}`}>
            Home
          </HashLink>

          <HashLink
            smooth
            to="#About"
            className={`group w-max duration-700 ${isActive("#About")}`}
            onClick={() => handleScroll("#About")}
          >
            About Us
          </HashLink>

          <HashLink
            smooth
            to="#HowitsWorks"
            className={`group w-max ${isActive("#HowitsWorks")}`}
            onClick={() => handleScroll("#HowitsWorks")}
          >
            How it works
          </HashLink>
          <HashLink
            smooth
            to="#Contact"
            className={`group w-max  bg-customRed rounded-lg ${isActive(
              "#Contact"
            )}`}
            onClick={() => handleScroll("#Contact")}
          >
            Contact Us
          </HashLink>

          <HashLink
            smooth
            to="#Download"
            className={`group bg-orange-500 text-customwhite rounded-3xl px-5 py-2 w-max duration-700 ${isActive(
              "#Download"
            )}`}
            onClick={() => handleScroll("#Download")}
          >
            Book a Demo
          </HashLink>
        </nav>

        <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
          <IoMenu className="text-4xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 text-black font-semibold text-xl transition-transform transform ${
          isMenuOpen
            ? "translate-x-0 duration-700"
            : "translate-x-full duration-700"
        } md:hidden`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className="absolute right-0 w-full h-full text-xl bg-primary text-center p-5 transition-transform transform shadow-lg bg-darkGrey text-tan"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute text-tan focus:outline-none top-4 right-7"
          >
            <MdClose size={30} />
          </button>

          <nav className="mt-8 space-y-10 text-xl flex flex-col items-center">
            <HashLink
              smooth
              to="#"
              className={`${isActive("#")}`}
              onClick={() => handleScroll("#")}
            >
              Home
            </HashLink>

            <HashLink
              smooth
              to="#HowitsWorks"
              className={`${isActive("#HowitsWorks")}`}
              onClick={() => handleScroll("#HowitsWorks")}
            >
              How it works
            </HashLink>

            <HashLink
              smooth
              to="#About"
              className={`${isActive("#About")}`}
              onClick={() => handleScroll("#About")}
            >
              About Us
            </HashLink>

            <HashLink
              smooth
              to="#Contact"
              className={`${isActive("#Contact")}`}
              onClick={() => handleScroll("#Contact")}
            >
              Contact Us
            </HashLink>

            <HashLink
              smooth
              to="#Download"
              className={`group bg-red-800 text-customwhite rounded-3xl px-3 py-2 w-max duration-700 ${isActive(
                "#Download"
              )}`}
              onClick={() => handleScroll("#Download")}
            >
              Book a Demo
            </HashLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
