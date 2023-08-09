import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="mt-1 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="  flex-shrink-0">
                <img className=" w-12 md:w-16" src="https://cdn-icons-png.flaticon.com/512/1209/1209950.png?w=900&t=st=1691539831~exp=1691540431~hmac=77b98c09314a67826b01defdfa2f3e2627304f060f7fd263081c9e62b04bcc77" alt="" />
              </div>
            </div>
            <div className="-mr-2 flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                
                <Link
                  to="anasayfa" // Replace with the actual ID of your section
                  smooth={true}
                  duration={500}
                  className="hover:cursor-pointer text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-lg font-medium transition-colors"
                >
                  Anasayfa
                </Link>
                <Link
                  to="urunler" // Replace with the actual ID of your section
                  smooth={true}
                  duration={500}
                  className="hover:cursor-pointer text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-lg font-medium transition-colors"
                >
                  Ürünler
                </Link>
                
                <Link
                  to="about" // Replace with the actual ID of your section
                  smooth={true}
                  duration={500}
                  className="hover:cursor-pointer text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-lg font-medium transition-colors"
                >
                  Hakkımızda
                </Link>
                <Link
                  to="iletisim" // Replace with the actual ID of your section
                  smooth={true}
                  duration={500}
                  className="hover:cursor-pointer text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-lg font-medium transition-colors"
                >
                  Bize Ulaşın
                </Link>
                
                {/* <a
                  href="#"
                  className="text-gray-900  hover:text-blue-500 hover: px-3 py-2 rounded-md text-lg font-medium"
                >
                  Reports
                </a> */}
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
                <a
                  href="#"
                  className="hover:text-blue-500  block px-3 py-2 rounded-md text-base font-medium"
                >
                  Anasayfa
                </a>
                <a
                  href="#"
                  className="text-gray-900  hover:text-blue-500 hover: block px-3 py-2 rounded-md text-base font-medium"
                >
                  Ürünler
                </a>
                <a
                  href="#"
                  className="text-gray-900  hover:text-blue-500 hover: block px-3 py-2 rounded-md text-base font-medium"
                >
                  Kurumsal
                </a>
                <a
                  href="#"
                  className="text-gray-900  hover:text-blue-500 hover: block px-3 py-2 rounded-md text-base font-medium"
                >
                  Blog
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Navbar;
