import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../Asstes/images/Logo.png.jpg"

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
        const elementPosition = element.offsetTop;

        window.scrollTo({
          top: elementPosition - navbarHeight - 20,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <header className="shadow-lg w-full bg-white z-10 sticky top-0">
      <div className="flex items-center justify-between md:py-4 px-5 lg:px-0 py-2 h-20 lg:max-w-7xl lg:mx-auto">
        <div>
         <a href="/">
          <img src={logo} alt="" className="" />
         </a>
        </div>

        <nav className="items-center hidden lg:space-x-5 space-x-3 md:flex text-md font-semibold">
          <HashLink smooth to="#" className={`group w-max ${isActive("#")}`}>
            Home
          </HashLink>

          <HashLink
            smooth
            to="#About"
            className={`group w-max ${isActive("#About")}`}
            onClick={() => handleScroll("#About")}
          >
            Language
          </HashLink>

          <HashLink
            smooth
            to="#Categorys"
            className={`group w-max ${isActive("#Categorys")}`}
            onClick={() => handleScroll("#Categorys")}
          >
            Category's
          </HashLink>

          

          <HashLink
            smooth
            to="#Contact"
            className={`group w-max ${isActive("#Contact")}`}
            onClick={() => handleScroll("#Contact")}
          >
            Careers
          </HashLink>

          <HashLink
            smooth
            to="#ContactUs"
            className={`group w-max ${isActive("#ContactUs")}`}
            onClick={() => handleScroll("#ContactUs")}
          >
            Contact Us
          </HashLink>

          <HashLink
            smooth
            to="https://play.google.com/store/apps/details?id=sun.way2sms.hyd.com"
            className={`group bg-black text-white px-3 duration-1000 py-2 rounded-lg ${isActive(
              "#Download"
            )}`}
            onClick={() => handleScroll("#Download")}
          >
            Get App Now
          </HashLink>
        </nav>

        <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
          <IoMenu className="text-4xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-transform transform ${
          isMenuOpen
            ? "translate-x-0 duration-700"
            : "translate-x-full duration-700"
        } md:hidden`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className="absolute right-0 w-full h-full bg-darkGrey text-tan p-5 transition-transform transform shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute text-tan top-4 right-7"
          >
            <MdClose size={30} />
          </button>

          <nav className="mt-8 space-y-10 text-xl flex flex-col items-center">
            <HashLink
              smooth
              to="#"
              className={isActive("#")}
              onClick={() => handleScroll("#")}
            >
              Home
            </HashLink>
            <HashLink
              smooth
              to="#HowitsWorks"
              className={isActive("#HowitsWorks")}
              onClick={() => handleScroll("#HowitsWorks")}
            >
              How it works
            </HashLink>
            <HashLink
              smooth
              to="#About"
              className={isActive("#About")}
              onClick={() => handleScroll("#About")}
            >
              About Us
            </HashLink>
            <HashLink
              smooth
              to="#Contact"
              className={isActive("#Contact")}
              onClick={() => handleScroll("#Contact")}
            >
              Contact Us
            </HashLink>
            <HashLink
              smooth
              to="#Download"
              className={`group bg-red-800 text-customwhite rounded-3xl px-3 py-2 w-max ${isActive(
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
