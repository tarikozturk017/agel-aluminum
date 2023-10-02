import React from "react";
import liste from "../../src/pdfs/liste.pdf";

const Products = () => {
  return (
    <div id="urunler" className="pb-16  w-full bg-gray-100 md:mt-0 m-auto">
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
          <div className="flex flex-col justify-center items-center space-y-10">
            <div className="flex flex-col justify-center items-center space-y-2">
              <p className="text-xl leading-5 text-gray-600">2023 Katalog</p>
              <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800">
                Ürünlerimiz
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
              {/* Product 1 */}
              <a href={liste} target="_blank" rel="noreferrer">
                <div className="hover:cursor-pointer relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full transition duration-300 ease-in-out group-hover:opacity-75"
                    src="images/pencere.jpg"
                    alt="windows"
                  />
                  <div className="absolute inset-0 flex justify-center items-center hidden group-hover:flex transition duration-300 ease-in-out">
                    <div className="bg-gray-800 bg-opacity-60 p-4 text-white text-center rounded">
                      Lütfen katalogu görmek için tıklayınız
                    </div>
                  </div>
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white rounded p-1">
                    Pencere Aksesuarları
                  </button>
                </div>
              </a>

              {/* Product 2 */}
              <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                <a href={liste} target="_blank" rel="noreferrer">
                  <div className="hover:cursor-pointer relative group flex justify-center items-center h-full w-full">
                    <img
                      className="object-center object-cover h-full w-full transition duration-300 ease-in-out group-hover:opacity-75"
                      src="images/sineklik.png"
                      alt="windows"
                    />
                    <div className="absolute inset-0 flex justify-center items-center hidden group-hover:flex transition duration-300 ease-in-out">
                      <div className="bg-gray-800 bg-opacity-60 p-4 text-white text-center rounded">
                        Lütfen katalogu görmek için tıklayınız
                      </div>
                    </div>
                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white rounded p-1">
                      Sineklik Sistemleri
                    </button>
                  </div>
                </a>
                {/* Product 3 */}
                <a href={liste} target="_blank" rel="noreferrer">
                  <div className="hover:cursor-pointer relative group flex justify-center items-center h-full w-full">
                    <img
                      className="object-center object-cover h-full w-full transition duration-300 ease-in-out group-hover:opacity-75"
                      src="images/yapi-kimyasal1.png"
                      alt="doors"
                    />
                    <div className="absolute inset-0 flex justify-center items-center hidden group-hover:flex transition duration-300 ease-in-out">
                      <div className="bg-gray-800 bg-opacity-60 p-4 text-white text-center rounded">
                        Lütfen katalogu görmek için tıklayınız
                      </div>
                    </div>
                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white rounded p-1">
                      Yapı Kimyasalları
                    </button>
                  </div>
                </a>
              </div>

              {/* Product 4 */}
              <a href={liste} target="_blank" rel="noreferrer">
                <div className="hover:cursor-pointer relative group justify-center items-center h-full w-full hidden lg:flex">
                  <img
                    className="object-center object-cover h-full w-full transition duration-300 ease-in-out group-hover:opacity-75"
                    src="images/kapi.jpg"
                    alt="door"
                  />
                  <div className="absolute inset-0 flex justify-center items-center hidden group-hover:flex transition duration-300 ease-in-out">
                    <div className="bg-gray-800 bg-opacity-60 p-4 text-white text-center rounded">
                      Lütfen katalogu görmek için tıklayınız
                    </div>
                  </div>
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white rounded p-1">
                    Kapı Aksesuarları
                  </button>
                </div>
              </a>
              {/* Product 5 */}
              <a href={liste} target="_blank" rel="noreferrer">
                <div className="hover:cursor-pointer relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                  <img
                    className="object-center object-cover h-full w-full transition duration-300 ease-in-out group-hover:opacity-75"
                    src="images/kapi.jpg"
                    alt="door"
                  />
                  <div className="absolute inset-0 flex justify-center items-center hidden group-hover:flex transition duration-300 ease-in-out">
                    <div className="bg-gray-800 bg-opacity-60 p-4 text-white text-center rounded">
                      Lütfen katalogu görmek için tıklayınız
                    </div>
                  </div>
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white rounded p-1">
                    Kapı Aksesuarları
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
