import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const FAQS = () => {
  const data = [
    {
      id: 1,
      title: "How do I download the news application?",
      text: "To download the news app, visit your device’s app store (Google Play Store for Android or App Store for iOS). Search for the app by name and click Download or Install",
      icon1: <MdKeyboardArrowUp />,
      icon2:<MdKeyboardArrowDown />,

    },
    {
      id: 2,
      title: "How can I log in to the news application?",
      text: "After downloading the app, open it and look for the Login or Sign In button. Enter your username/email and password, or use social media accounts to log in if available.",
      icon1: <MdKeyboardArrowUp />,
      icon2:<MdKeyboardArrowDown />,
    },
    {
      id: 3,
      title: "How can this application help me stay informed?",
      text: "The app provides real-time news updates, personalized news based on your interests, and notifications for breaking news. It helps you stay updated with local and global events quickly.",
      icon1: <MdKeyboardArrowUp />,
      icon2:<MdKeyboardArrowDown />,
    },
    {
      id: 4,
      title: "How do I change the news source or app in the application?",
      text: "Go to the app settings or preferences. Look for News Sources or Preferred News Outlets. From there, you can choose different news sources or adjust the types of news you want to see.",
      icon1: <MdKeyboardArrowUp />,
      icon2:<MdKeyboardArrowDown />,
    },
    {
      id: 5,
      title: "How do I set up news notifications?",
      text: "Open the app, go to settings, and select Notifications. Here, you can turn on or off alerts for breaking news, personalized updates, or specific topics of interest.",
      icon1: <MdKeyboardArrowUp />,
      icon2:<MdKeyboardArrowDown />,
    },
    {
      id: 6,
      title: "How do I customize the news feed?",
      text: "In the settings menu, find Feed Preferences or Customize Feed. You can select categories like sports, politics, entertainment, etc., to personalize the content you receive.",
      icon1: <MdKeyboardArrowUp />,
      icon2:<MdKeyboardArrowDown />,
    },
    {
      id: 7,
      title: "How do I manage my account in the news app?",
      text: "Go to the Account section in the app's settings. From there, you can update your profile, change your password, or adjust your subscription preferences.",
      icon1: <MdKeyboardArrowUp />,
      icon2:<MdKeyboardArrowDown />,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mt-5 md:mt-10 mx-5 md:mx-10 lg:mx-20">
      <h1 className="text-center text-2xl font-semibold">Need Information</h1>
      <h2 className="text-center text-3xl md:text-4xl font-semibold mt-3 text-iconscolors">
        See Our Frequently Asked Questions.
      </h2>
      <div className="md:flex items-center mt-10 gap-5 lg:gap-10">
          <div className="md:w-1/2">
            {data.map((service, index) => (
              <div
                key={service.id}
                className=" bg-white  shadow-lg hover:shadow-xl rounded-lg mb-4 h-fit"
              >
                <div
                  onClick={() => toggleAccordion(index)}
                  className=" cursor-pointer p-5 bg-blue-600 flex justify-between items-center rounded-t-lg"
                >
                  <span className="  lg:text-xl ">
                    {service.title}
                  </span>
                  <span className="transition-transform text-xl  font-bold duration-300">
                    {openIndex === index ? service.icon1 : service.icon2}
                  </span>
                </div>

                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    openIndex === index
                      ? "max-h-screen opacity-100 visible"
                      : "max-h-0 opacity-0 invisible"
                  }`}
                >
                  <div className="bg-gray-800 text-md px-5 pt-2 pb-1 rounded-b-lg">
                    {service.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

        <div className="md:w-1/2 ">
          <img
            src="https://img.freepik.com/premium-psd/3d-message-box-with-question-mark-icon-isolated_47987-11906.jpg?ga=GA1.1.756816216.1739273136&semt=ais_hybrid"
            alt="Mobile view"
            className=" w-full md:h-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQS;
