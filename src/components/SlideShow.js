import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import SliderItem from "./SliderItem";
// import { ArrowLeftIcon,ArrowRightIcon } from '@heroicons/react/24/solid'
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

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
		scale: 0.5,
		duration: 3000,
		transitionDuration: 900,
		infinite: true,
        easing: "ease",
		prevArrow: (
			<div className="ml-10 top-40 md:top-72 ">
				<HiArrowLeft className="h-8 w-8  cursor-pointer text-gray-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" />
			</div>
		),
		nextArrow: (
				<div className="mr-10 top-40 md:top-72 ">
				   <HiArrowRight className="h-8 w-8 text-gray-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] cursor-pointer" />
			    </div>
		),
	};
	return (
		<div id="anasayfa" className="w-full md:h-screen h-fit">
			<Zoom {...zoomInProperties} canSwipe autoplay>
				{images.map((item, index) => (
				
					<SliderItem key={index} image={item.src} text={item.text}/>
				))}
			</Zoom>
		</div>
	);
};

export default Slideshow;