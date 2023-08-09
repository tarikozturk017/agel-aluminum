import React from "react";
const SliderItem = ({image, text}) => {
    return ( 
        <div className="flex justify-center md:items-center items-start w-screen h-[42rem] relative">
            <img
                className="md:w-4/5 w-11/12"
                src={image}
            />
            <h1 className="absolute md:top-60 top-12 inset-x-1/4 text-center z-10 md:text-6xl text-2xl bold text-gray-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{text}</h1>
        </div>
    )
}

export default SliderItem;