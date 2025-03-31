import React from 'react'
import telugu from '../../Asstes/images/telugu.png'
import English from '../../Asstes/images/english.png'


const Language = () => {


  const language = [
    {
      id: 1,
      image: telugu ,
      title: "Telugu",
    },
    {
      id: 2,
      image: English,
      title: "English",
    },
    {
      id: 3,

   
      image: telugu,
      title: "Slovenský",
    },
  ];


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8 mx-56 mt-10">
      {language.map((values) => (
        <div key={values.id} className="relative overflow-hidden group w-full">
          <div className="relative w-full h-full border-[5px] rounded-3xl  border-iconscolors">
            <img
              src={values.image}
              alt=""
              className="rounded-2xl md:h-[450px] h-[300px]    w-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute  top-[70%] inset-0 flex items-center justify-center rounded-2xl transition-all  group-hover:bg-opacity-60  ">
        
              <h1 className="text-white text-2xl  transition-colors group-hover:text-iconscolors font-bold group-hover:bg-opacity-0 hover:bg-opacity-50  px-4 py-2 rounded-lg">
                {values.title}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


export default Language