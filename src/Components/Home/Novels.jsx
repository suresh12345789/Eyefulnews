import React from "react";

const Novels = () => {
  const books = [
    {
      img: "https://img.freepik.com/free-photo/portrait-young-redhead-bearded-male-holding-book-room-with-green-plants_613910-9858.jpg?ga=GA1.1.756816216.1739273136&semt=ais_hybrid",
      title: "",
    },
    {
      img: "https://img.freepik.com/free-photo/people-relaxing-countryside_23-2151335956.jpg?ga=GA1.1.756816216.1739273136&semt=ais_hybrid",
      title: "",
    },
    {
      img: "https://img.freepik.com/free-photo/pretty-handsome-young-man-laying-shirtless-his-bed-holding-coffee-tea-cup-while-reading-book_496169-813.jpg?ga=GA1.1.756816216.1739273136&semt=ais_hybrid",
      title: "",
    },
    {
      img: "https://img.freepik.com/free-photo/young-attractive-woman-cozy-red-sweater-is-reading-book-while-sitting-home-sofa-with-cup-drink_169016-12968.jpg?ga=GA1.1.756816216.1739273136&semt=ais_hybrid",
      title: "",
    },
  ];

  return (
    <>
      <div className="mx-5 md:mx-10 lg:mx-20 mt-10">
        <hr className="mb-10" />
        <div id="Novels" className="md:flex items-center gap-10">
          <div className="md:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/handsome-young-man-reading-magazine-standing-front-book-shelf_23-2147936796.jpg?ga=GA1.1.756816216.1739273136&semt=ais_hybrid"
              className="rounded-lg w-full"
              alt=""
            />
          </div>

          <div className="md:w-1/2 mt-5 md:mt-0">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-iconscolors">
              Trending News-Based Novels
            </h1>
            <p className="text-lg mt-10">
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
            <h1 className="text-4xl font-semibold">Top picks</h1>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
            {books.map((novels,index) => (
              <div key={index} className="bg-white shadow-md p-3">
                <img src={novels.img} alt="" className="w-full rounded-lg h-48"/>
                <h1 className="p-2 text-xl font-semibold text-iconscolors">The Wolf half</h1>
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
