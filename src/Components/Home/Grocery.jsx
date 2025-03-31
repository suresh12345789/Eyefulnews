import React from "react";
import offers from '../../Asstes/images/d-mart.png'
import offers1 from '../../Asstes/images/d-mart1.png'
import offers2 from '../../Asstes/images/d-mart2.png'
import offers3 from '../../Asstes/images/d-mart3.png'
import offers4 from '../../Asstes/images/d-mart4.png'
import offers5 from '../../Asstes/images/d-mart5.png'

const Grocery = () => {
  const images = [
    {
      img: offers,
      head: 2,
      days: "days",
      offer: "D-mart Offers",
      from: "From:28/03/2025",
      expries: "Expires:05/04/2025",
    },
    {
      img: offers1,
      head: 2,
      days: "days",
      offer: "D-mart Offers",
      from: "From:28/03/2025",
      expries: "Expires:05/04/2025",
    },
    {
      img: offers2,
      head: 2,
      days: "days",
      offer: "D-mart Offers",
      from: "From:28/03/2025",
      expries: "Expires:05/04/2025",
    },
    {
      img:offers3,
      head: 2,
      days: "days",
      offer: "D-mart Offers",
      from: "From:28/03/2025",
      expries: "Expires:05/04/2025",
    },
    {
      img: offers4,
      head: 2,
      days: "days",
      offer: "D-mart Offers",
      from: "From:28/03/2025",
      expries: "Expires:05/04/2025",
    },
    {
      img: offers5,
      head: 2,
      days: "days",
      offer: "D-mart Offers",
      from: "From:28/03/2025",
      expries: "Expires:05/04/2025",
    },
  ];

  return (
    <>
      <h1 className="text-center mt-5 md:mt-10 text-4xl font-semibold ">
        Grocery Offers
      </h1>

      <div
        id="Grocery"
        className="grid md:grid-cols-2 lg:grid-cols-3 mx-5 md:mx-10 lg:mx-20 mt-5 md:mt-10 gap-10"
      >
        {images.map((value, index) => (
          <div key={index} className="bg-white shadow-md rounded-md relative">
            <img src={value.img} alt="" className="w-full rounded-md" />

            <div className="absolute top-0 right-2 rounded-b-md font-semibold  bg-white p-2 text-center text-iconscolors">
              <h1>{value.head}</h1>
              <h2>{value.days}</h2>
            </div>

            <div className="flex justify-between place-content-center items-center p-5 ">
              <h1 className="text-lg lg:text-xl font-semibold ">
                {value.offer}
              </h1>
              <div className="text-[12px] md:text-sm text-iconscolors">
                <p>{value.from}</p>
                <p>{value.expries}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Grocery;
