import React from "react";
import telugu from "../../Asstes/images/telugu.png.png";
import English from "../../Asstes/images/english.png";

const Language = () => {
  const language = [
    {
      id: 1,
      image: telugu,
      title: "Telugu",
      text:"అ",
    },
    {
      id: 2,
      image: English,
      title: "English ",
      text:"A"
    },

    {
      id: 3,
      image: telugu,
      title: "Slovenský",
      text: "అ",
      
    },
  ];

  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl  font-semibold">Languages</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl lg:grid-cols-3 gap-8  lg:mx-56  mx-5 md:mx-10 mt-10">
        {language.map((values) => (
          <div
            key={values.id}
            className="relative overflow-hidden group w-full"
          >
            <div className="relative w-full h-full border-[5px] rounded-3xl  border-black">
              <img
                src={values.image}
                alt=""
                className="rounded-2xl md:h-[330px] h-[300px]    w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute  top-[70%] inset-0 flex items-center justify-center rounded-2xl transition-all  group-hover:bg-opacity-60  ">
                <h1 className="text-white text-3xl  transition-colors group-hover:text-iconscolors font-bold group-hover:bg-opacity-0 hover:bg-opacity-50  px-4 py-2 rounded-lg">
                  {values.title}
                </h1>
          
              </div>

              <div>
              <h1 className="text-3xl absolute top-[30%] text-[100px] font-bold flex items-center w-full justify-center text-white">{values.text}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
