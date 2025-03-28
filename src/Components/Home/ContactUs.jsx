import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <div
        id="ContactUs"
        className="min-h-screen bg-black md:flex items-center justify-center p-6 relative overflow-hidden mt-10"
      >
        <div className="absolute inset-0  to-blue-500 opacity-30 blur-3xl"></div>

        <div className="mx-5 md:mx-10 lg:mx-36 w-full bg-white/5 backdrop-blur-2xl border border-white shadow-2xl rounded-2xl p-8 relative overflow-hidden">
          <h2 className="text-4xl font-extrabold text-white text-center mb-6 tracking-wide uppercase drop-shadow-lg">
            Get in Touch
          </h2>

          <div className="md:flex gap-10  text-white">
            <div className="space-y-6 md:w-1/2 md:mt-10">
              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg shadow-lg hover:scale-105 transition transform duration-300 cursor-pointer">
                <FaMapMarkerAlt className="text-red-400 text-2xl" />
                <p>
                  <a
                    href="https://www.google.com/maps?q=2nd+Floor,+Bansal+Pride+Building,+Madhapur,+Telangana+500081"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline"
                  >
                    2nd Floor, Bansal Pride Building, Madhapur, Telangana 500081
                  </a>
                </p>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg shadow-lg hover:scale-105 transition transform duration-300 cursor-pointer">
                <FaPhoneAlt className="text-2xl" />
                <p>
                  <a
                    href="tel:+917993561888"
                    className="text-blue-500 underline"
                  >
                    +91 79935 61888
                  </a>
                </p>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg shadow-lg hover:scale-105 transition transform duration-300 cursor-pointer">
                <FaEnvelope className="text-2xl" />
                <p>
                  <a
                    href="mailto:nareshtullibilli909@gmail.com"
                    className="text-blue-500 underline"
                  >
                    support@Eyefullnews.co.in, hr@anynews.co.in
                  </a>
                </p>
              </div>
            </div>

            <form className="bg-black/30 p-6 rounded-lg shadow-xl border md:w-1/2 mt-5 md:mt-0 lg:mt-0 ">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 mb-4 bg-transparent border-b focus:outline-none text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 mb-4 bg-transparent border-b  focus:outline-none text-white "
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 mb-4 bg-transparent border-b focus:outline-none text-white"
                rows="4"
              ></textarea>

              <button className="w-full py-3 bg-white text-black rounded-lg shadow-xl font-semibold  transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
