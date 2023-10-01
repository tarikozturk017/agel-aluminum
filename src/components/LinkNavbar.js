import Link from "next/link";

const LinkNavbar = () => {
  return (
    <>
      <Link
        className="  relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red-800 after:w-full after:scale-x-0 after:hover:scale-x-90 after:transition after:duration-300 after:origin-left
                  hover:cursor-pointer text-gray-200 hover:text-red-700 px-1 lg:px-3 py-2 rounded-md  font-medium transition-colors"
        href="/"
      >
        Anasayfa
      </Link>

      <Link
        className="  relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red-800 after:w-full after:scale-x-0 after:hover:scale-x-90 after:transition after:duration-300 after:origin-left
                  hover:cursor-pointer text-gray-200 hover:text-red-700 px-1 lg:px-3 py-2 rounded-md  font-medium transition-colors"
        href="/about"
      >
        Hakkımızda
      </Link>
      <Link
        className="  relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red-800 after:w-full after:scale-x-0 after:hover:scale-x-90 after:transition after:duration-300 after:origin-left
                  hover:cursor-pointer text-gray-200 hover:text-red-700 px-1 lg:px-3 py-2 rounded-md  font-medium transition-colors"
        href="/contact"
      >
        Bize Ulaşın
      </Link>
    </>
  );
};

export default LinkNavbar;
