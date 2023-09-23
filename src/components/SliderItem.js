import React from "react";

const SliderItem = ({ image, text }) => {
  return (
    <div className=" flex justify-center md:items-center items-start w-screen md:h-[42rem] md:mb-16 h-fit relative">
      <img
        className="w-full md:h-auto h-[30rem] object-cover"
        src={image}
        alt="Slider Image"
      />
      <h1 className="absolute md:top-60 top-28 inset-x-1/4 text-center z-10 md:text-6xl text-2xl font-bold text-gray-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        {text}
      </h1>
    </div>
  );
};

export default SliderItem;
