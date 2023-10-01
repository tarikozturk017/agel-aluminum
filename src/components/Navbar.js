import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import LinkNavbar from "./LinkNavbar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // if (pathname) console.log(`current route: ${pathname}`);

  return (
    <div className=" bg-gradient-to-tr from-gray-950  via-gray-900 to-black">
      {/* <nav className="mt-4 mb-4 "> */}
      <nav className="pt-4 pb-4 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className=" flex flex-shrink-0">
                <img
                  className=" w-12 md:w-16 shadow-2xl shadow-gray-400 rounded-full"
                  src="images/logo.jpg"
                  alt="agel logo"
                />
                <p className=" my-auto text-gray-200 font-bold ml-4 text-lg">
                  AGEL Alüminyum
                </p>
              </div>
            </div>
            <div className="-mr-2 flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <LinkNavbar />
                {/* <Link
                  to="anasayfa" // Replace with the actual ID of your section
                  smooth={true}
                  duration={500}
                  className=" relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red-800 after:w-full after:scale-x-0 after:hover:scale-x-90 after:transition after:duration-300 after:origin-left
                  hover:cursor-pointer text-gray-200 hover:text-red-700 px-3 py-2 rounded-md  font-medium transition-colors"
                >
                  Anasayfa
                </Link> */}
                {pathname == "/" && (
                  <Link
                    to="urunler" // Replace with the actual ID of your section
                    smooth={true}
                    duration={500}
                    className=" relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red-800 after:w-full after:scale-x-0 after:hover:scale-x-90 after:transition after:duration-300 after:origin-left
                  hover:cursor-pointer text-gray-200 hover:text-red-700 px-1 lg:px-3  py-2 rounded-md  font-medium transition-colors"
                  >
                    Ürünler
                  </Link>
                )}
                {pathname == "/" && (
                  <Link
                    to="markalar" // Replace with the actual ID of your section
                    smooth={true}
                    duration={500}
                    className=" relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red-800 after:w-full after:scale-x-0 after:hover:scale-x-90 after:transition after:duration-300 after:origin-left
                  hover:cursor-pointer text-gray-200 hover:text-red-700 px-1 lg:px-3 py-2 rounded-md  font-medium transition-colors"
                  >
                    Markalar
                  </Link>
                )}
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="md:hidden  inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <LinkNavbar />
                {/* <Link
                  to="anasayfa" // Replace with the actual ID of your section
                  smooth={true}
                  duration={500}
                  className="text-gray-200 hover:text-red-700  block px-3 py-2 rounded-md text-base font-medium"
                >
                  Anasayfa
                </Link> */}
                {pathname == "/" && (
                  <Link
                    to="urunler" // Replace with the actual ID of your section
                    smooth={true}
                    duration={500}
                    className="text-gray-200  hover:text-red-700 hover: block px-1 py-2 rounded-md text-base font-medium"
                  >
                    Ürünler
                  </Link>
                )}
                {pathname == "/" && (
                  <Link
                    to="markalar" // Replace with the actual ID of your section
                    smooth={true}
                    duration={500}
                    className="text-gray-200  hover:text-red-700 hover: block px-1 py-2 rounded-md text-base font-medium"
                  >
                    Markalar
                  </Link>
                )}
                {/* <Link
                  to="about" // Replace with the actual ID of your section
                  smooth={true}
                  duration={500}
                  className="text-gray-200  hover:text-red-700 hover: block px-3 py-2 rounded-md text-base font-medium"
                >
                  Hakkımızda
                </Link>
                <Link
                  to="iletisim" // Replace with the actual ID of your section
                  smooth={true}
                  duration={500}
                  className="text-gray-200  hover:text-red-700 hover: block px-3 py-2 rounded-md text-base font-medium"
                >
                  Bize Ulaşın
                </Link> */}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Navbar;
