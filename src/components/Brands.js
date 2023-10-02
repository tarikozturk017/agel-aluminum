import React, { useState } from "react";
// import liste from "../pdfs/liste.pdf";

const Brands = () => {
  const images = [
    { src: "images/kayapen.png" },
    { src: "images/sinuwa.png" },
    { src: "images/soudal.png" },
    { src: "images/vorne.png" },
  ];

  return (
    <div
      id="markalar"
      className="bg-gradient-to-b from-gray-100  to-gray-200 py-12 p-8 md:p-12 lg:p-24 xl:px-36"
    >
      <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 text-center mb-10">
        Markalarımız
      </h1>
      <div className=" shadow-md shadow-gray-400 rounded-xl p-8">
        <div className=" flex ">
          <div className=" mx-auto grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-4 md:gap-10 lg:gap-12">
            {images.map((item, index) => (
              // <SliderItem key={index} image={item.src} />
              <div
                key={index}
                className=" xl:w-7/12 lg:w-5/6 w-10/12 shadow-2xl shadow-gray-700 mx-auto flex flex-col  bg-white"
              >
                <img
                  className=" w-full p-0 lg:p-2 xl:p-4 my-auto"
                  src={item.src}
                  alt=""
                />
              </div>
            ))}

            {/* <div className=" p-5 bg-black"></div>
        <div className=" p-5 bg-black"></div>
        <div className=" p-5 bg-black"></div>
        <div className=" p-5 bg-black"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
