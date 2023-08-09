import React from "react";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 mr-16 md:mb-0">
            <a href="#" className="flex items-center mb-8">
              <img src="images/logo.jpg" className="w-12 rounded-full" alt="agel logo" />
              <span className="self-center mx-2 text-lg font-semibold whitespace-nowrap ">AGEL Alüminyum</span>
            </a>
            <p className="text-gray-400 text-sm underline mb-2">Sosyal Medya</p>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="https://www.facebook.com/agelaluminyum" target="_blank" className="text-gray-500 hover:text-gray-900">
                <BsFacebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/agelaluminyum/" target="_blank" className="text-gray-500 hover:text-gray-900">
                <BsInstagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/agel-al%C3%BCmi%CC%87nyum/" target="_blank" className="text-gray-500 hover:text-gray-900">
                <BsLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6">
          <div className="mb-6 md:mb-0 md:mr-16 hidden md:block">
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase "></h2>
                  
              </div>
            <div className="mb-6 md:mb-0 md:mr-16">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Ürün Grupları</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">Pencere sistemleri</a>
                </li>
                <li className="mb-4">
                  <a href="https://tailwindcss.com/" className="hover:underline">Kapı Sistemleri</a>
                </li>
                <li className="mb-4">
                  <a href="https://tailwindcss.com/" className="hover:underline">Pencere Aksesuarları</a>
                </li>
                <li className="mb-4">
                  <a href="https://tailwindcss.com/" className="hover:underline">Kapı Aksesuarları</a>
                </li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0 md:mr-16">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">İletişim</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline"><span className="font-bold">Adres: </span>Yeni Mahalle D-100 Karayolu Caddesi 414/A, Düzce/Merkez</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline"><span className="font-bold">Telefon: </span>+90 850 309 1994</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline"><span className="font-bold">Mail: </span>destek@agelaluminyum.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500 sm:text-center">
            © 2023 <a href="#" className="hover:underline">AGEL Aliminyum</a>. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-500 sm:text-center">
            Created by <a href="https://www.tarikozturk.ca/" target="_blank" className="hover:underline"><span className="font-bold">Tarik Ozturk</span></a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
