import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import SliderItem from "./SliderItem";
// import { ArrowLeftIcon,ArrowRightIcon } from '@heroicons/react/24/solid'

// import Test from "./Test";

const Slideshow = () => {
	//Array of Images
	const images = [
		{"src": "images/image1.jpg", "text": "Mükemmelliğe Açılan Kapılar"},
		{"src": "images/image2.jpg", "text": "Detaylarda Saklı Estetik"},
		{"src": "images/image3.jpg", "text": "Evinizin İmzası Kapı ve Pencere Detayları"},
		{"src": "images/image4.jpg", "text": "Pencerenizin Gizli Kahramanları"},
		{"src": "images/image5.jpg", "text": "Pencerelerde İnce Zevk"},
		{"src": "images/image6.jpg", "text": "Kapılarınızda ve Pencerelerinizde Ustalık İzleri"},
		{"src": "images/image7.jpg", "text": "Kapı ve Pencere Aksesuarlarında Güvenilir Adres"},
		{"src": "images/image8.jpg", "text": "Kapı ve Pencere Aksesuarlarında Eşsiz Çözümler"},
		{"src": "images/image9.jpg", "text": ""},
		{"src": "images/image10.jpg", "text": ""},
		{"src": "images/image11.jpg", "text": ""},
	];


    // alternative carousel link:
    // https://tailwind-elements.com/docs/standard/components/carousel/

	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		scale: 0.9,
		duration: 3000,
		transitionDuration: 900,
		infinite: true,
        easing: "ease",
		prevArrow: (
			<div className="ml-10 top-40 md:top-72 hidden">
				{/* <ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer" /> */}
			</div>
		),
		nextArrow: (
				<div className="mr-10 top-40 md:top-72 hidden">
				   {/* <ArrowRightIcon className="h-8 w-8 text-white cursor-pointer" /> */}
			    </div>
		),
	};
	return (
		<div className="w-full h-screen">
			<Zoom {...zoomInProperties}>
				{images.map((item, index) => (
					// <div key={index} className="flex justify-center md:items-center items-start w-screen h-[42rem] relative">
					// 	<img
					// 		className="w-4/5"
					// 		src={each}
					// 	/>
                    //     <h1 className="absolute md:top-60 top-24 inset-x-1/4 text-center z-10 md:text-6xl text-4xl bold text-white">Ben AG7</h1>
                    //     <p className="absolute md:top-80 top-40 inset-x-1/4 text-center z-10 md:text-2xl text-xl bold text-white">"Ağır taştır altında kalırsın."</p>
					// </div>

					<SliderItem key={index} image={item.src} text={item.text}/>
				))}
                {/* <Test text={'test component1'}/>
                <Test text={'test component2'}/>
                <Test text={'test component3'}/> */}

			</Zoom>
		</div>
	);
};

export default Slideshow;