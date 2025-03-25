// import React from 'react';
// import lenguages from "../../src/Asstes/images/Languages.png";

// function Languages() {

//   const language = [
//     {
//       id: 1,
//       image: lenguages,
//       title: "Telugu",
//     },
//     {
//       id: 2,
//       image: lenguages,
//       title: "Slovenský",
//     },
//     {
//       id: 3,
//       image: lenguages,
//       title: "English",
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-56 mt-10">
//       {language.map((values) => (
//         <div key={values.id} className="relative overflow-hidden group w-full">
//           <div className="relative w-full h-full">
//             <img
//               src={values.image}
//               alt={values.title}
//               className="rounded-lg md:h-[450px] h-[300px] w-full object-cover transition-transform group-hover:scale-105"
//             />
//             <div className="absolute inset-0 flex items-center justify-center transition-all  group-hover:bg-green-500 group-hover:bg-opacity-60">
//               <h1 className=" text-2xl font-semibold transition-colors group-hover:text-red-500">
//                 {values.title}
//               </h1>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Languages;

import React from 'react';
import lenguages from "../../src/Asstes/images/Languages.png";

function Languages() {

  const language = [
    {
      id: 1,
      image: lenguages,
      title: "Telugu",
    },
    {
      id: 2,
      image: lenguages,
      title: "Slovenský",
    },
    {
      id: 3,
      image: lenguages,
      title: "English",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-56 mt-10">
      {language.map((values) => (
        <div key={values.id} className="relative overflow-hidden group w-full">
          <div className="relative w-full h-full">
            <img
              src={values.image}
              alt={values.title}
              className="rounded-2xl md:h-[450px] h-[300px]  w-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl transition-all group-hover:bg-green-500 group-hover:bg-opacity-60 bg-black opacity-50 ">
        
              <h1 className="text-white text-2xl font-semibold transition-colors group-hover:text-emerald-200 group-hover:bg-opacity-0 hover:bg-opacity-50 hover:bg-green-600 px-4 py-2 rounded-lg">
                {values.title}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Languages;
