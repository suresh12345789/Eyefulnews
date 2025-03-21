import React from "react";
import playstore from '../../Asstes/images/download.png'
import apple from '../../Asstes/images/downlaod.png'

const Banner = () => {

  const data = [
    {
      title: "Politics",
    },
    {
      title: "Sports",
    },
    {
      title: "Tech",
    },
    {
      title: "Business",
    },
    {
      title: "World",
    },
  ];

  return (
    <section
      className="relative bg-gray-950 text-white text-center py-10 lg:py-[102px] px-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url('news-background.jpg')",
      }}
    >
      <div className="max-w-5xl mx-auto bg-gray-900 bg-opacity-80  p-12 rounded-lg shadow-xl border border-gray-800">
        <h1 className="text-2xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-md">
          Stay Updated with the Latest News
        </h1>

        <p className="text-lg mb-8 text-gray-300 font-medium">
          Explore real-time updates, breaking news, and insightful reports
          tailored just for you.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
          {data.map((categorys, index) => (
            <button
              key={index}
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3 px-6 rounded-lg shadow-md transition-all hover:scale-105 border border-blue-900"
            >
              {categorys.title}
            </button>
          ))}
        </div>

        <div className="md:flex justify-center items-center gap-6">
          <a
            href="/"
            className="text-gray-900 py-5 px-8 rounded-lg  lg:text-lg font-semibold shadow-lg transition-all hover:scale-105 border flex justify-center items-center m "
          >

            <img src={playstore} className="lg:w-40" alt="" />
          </a>


          <a
            href="/"
            className="bg-gray-800 hover:bg-gray-700 p-5 md:py-5 md:px-8 rounded-lg text-lg font-semibold shadow-lg transition-all hover:scale-105  border border-gray-700 flex justify-center items-center mt-5 md:mt-0"
          >
            <img src={apple} className="lg:w-40 flex justify-center items-center" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
