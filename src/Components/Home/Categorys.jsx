import React from "react";
import { FaBriefcase, FaLandmark } from "react-icons/fa";
import { IoBusinessOutline, IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineMovieFilter, MdOutlineSportsBaseball } from "react-icons/md";
import { RiHealthBookLine } from "react-icons/ri";
import { TfiWorld } from "react-icons/tfi";

const Categorys = () => {
  const categories = [
    {
      title: "News",
      desc: "Easily share breaking news with friends and family instantly.",
      icon: <IoNewspaperOutline />,
    },
    {
      title: "Business",
      desc: "Explore a curated collection of digital magazines across various genres.",
      icon: <IoBusinessOutline />,
    },
    {
      title: "Health",
      desc: "Browse news from multiple categories to stay informed on different topics.",
      icon: <RiHealthBookLine />,
    },
    {
      title: "Sports",
      desc: "Reduce eye strain with a comfortable dark theme for late-night reading.",
      icon: <MdOutlineSportsBaseball />,
    },
    {
      title: "World News",
      desc: "Enjoy an interactive reading experience with smooth flipping animations.",
      icon: <TfiWorld />,
    },
    {
      title: "Politics",
      desc: "Engage in community discussions and vote on trending topics.",
      icon: <FaLandmark title="Government" />,
    },
    {
      title: "Movies",
      desc: "Discover the hottest and most viral news stories of the day.",
      icon: <MdOutlineMovieFilter />,
    },
    {
      title: "Jobs",
      desc: "Save articles and access them anytime in your personalized reading list.",
      icon: <FaBriefcase />,
    },
  ];

  return (
    <div
      id="Categorys"
      className="px-5 md:px-8  lg:px-0 md:max-w-5xl lg:max-w-7xl  lg:mx-auto mt-10"
    >
      <h2 className="text-4xl font-semibold text-center mb-10 ">
        Categories
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative p-10 border border-transparent  shadow-xl text-center hover:scale-105 duration-500 hover:shadow-xl group"
          >
            <div className=" bg-white/30 "></div>

            <div className="relative">
              <button className="text-4xl font-semibold text-iconscolors group-hover:text-blue-500 transition-colors duration-300">
                {category.icon}
              </button>
              <h3 className="text-xl font-semibold mb-2 hover:text-white">
                {category.title}
              </h3>
              <p className=" ">{category.desc}</p>
            </div>

            <div className="absolute inset-0 flex items-center justify-center bg-black/70  opacity-0 group-hover:opacity-100 group-hover:text-white duration-700 "></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorys;
