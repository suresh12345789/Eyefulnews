import React from "react";
import novel from "../../Asstes/images/novel.png";
import novel1 from "../../Asstes/images/novel1.png";
import novel2 from "../../Asstes/images/novel2.png";
import novel3 from "../../Asstes/images/novel3.png";

const Novels = () => {
  const books = [
    {
      img: novel,
      title: "Where Are You",
    },
    {
      img: novel3,
      title: "Every Visible Thing",
    },
    {
      img: novel1,
      title: "The primal of blood and bone",
    },
    {
      img: novel2,
      title: "What's Done In Darkness",
    },
  ];

  return (
    <>
      <div className="mx-5 md:mx-10 lg:mx-20 mt-5 md:mt-10">
        <hr className="mb-10" />
        <h1 className="text-center text-3xl md:text-4xl mb-5 md:mb-10 font-semibold  ">
          Novels
        </h1>

        <div id="Novels" className="md:flex items-center  gap-10">
          <div className="md:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/handsome-young-man-reading-magazine-standing-front-book-shelf_23-2147936796.jpg?ga=GA1.1.756816216.1739273136&semt=ais_hybrid"
              className="rounded-lg w-full"
              alt=""
            />
          </div>

          <div className="md:w-1/2 mt-5 md:mt-0">
            <h1 className="text-2xl md:text-3xl text-iconscolors lg:text-5xl font-semibold">
              Trending News-Based Novels
            </h1>
            <p className="text-lg mt-5 md:mt-10">
              {" "}
              Bring real-world events to life through compelling storytelling.
              These novels are inspired by current affairs, politics, history,
              and social issues, offering readers a deeper understanding of
              global events. Whether it's a gripping political thriller, a
              thought-provoking social commentary, or a historical retelling,
              these books bridge the gap between fact and fiction. Explore the
              latest in news-inspired literature and immerse yourself in stories
              that reflect the world around us.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <div className="">
            <h1 className="text-3xl md:text-4xl font-semibold">Top picks</h1>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
            {books.map((novels, index) => (
              <div key={index} className="bg-white shadow-md">
                <img src={novels.img} alt="" className="w-full h-60 object-cover rounded-lg" />
                <h1 className="p-2 text-xl font-semibold text-iconscolors">
                  {novels.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
        <hr className="mt-10" />
      </div>
    </>
  );
};

export default Novels;
