import React from 'react'
import forbussiness from '../../Asstes/images/for.png'

const ForBusinesses = () => {
  return (
    <>
    
    <div className="flex flex-col mx-5 md:mx-0 lg:max-w-7xl mt-10 lg:mx-auto md:flex-row items-center justify-between  bg-gray-100 ">
      <div className="md:w-1/2 text-left">
        <h4 className="text-green-700 font-bold text-sm uppercase">For Businesses</h4>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
        Elevate Your Brand with <span className="text-green-600">Eye Full News</span> 
        </h2>
        <p className="text-gray-600 mt-4">
        Connect with millions of engaged users as they explore the latest news and trending stories. Eye Full News offers visually captivating native ad placements that seamlessly integrate with the content audiences already love. Boost your brand visibility, attract new customers, and create meaningful interactions on a dynamic, news-driven platform designed to make an impact.
        </p>
        <button className="mt-6 bg-green-700 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-800">
          Get Started
        </button>
      </div>
      
      <div className=" flex justify-center mt-5 md:mt-0 lg:mt-10 ">
        <div className="bg-black rounded-lg shadow-lg w-[335px] h-[50vh] relative">
          <img 
            src={forbussiness}
            alt="Mockup Ad" 
            className="absolute inset-0 w-full h-[50vh] object-cover rounded-lg opacity-60" 
          />
         
        </div>
      </div>
    </div>
 
    
    
    </>
  )
}

export default ForBusinesses