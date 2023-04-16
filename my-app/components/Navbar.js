import React from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false); // State to handle mobile menu open/close

  const handleNav = () => {
    setNav(!nav); // Function to toggle mobile menu
  };

  return (
    <div className="divide-y">
    
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4  ">
      

        <ul className="hidden sm:flex mr-20 text-[#282B3A]">
          <li className="p-4 ">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="/"
                width={100}
                height={66}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Link>
          </li>

          <li className="p-4">
            <Link href="/">What's New</Link>
          </li>
          <li className="p-4">
            <Link href="/">Designers</Link>
          </li>
          <li className="p-4">
            <Link href="/">Clothing</Link>
          </li>
          <li className="p-4">
            <Link href="/">Accessories</Link>
          </li>
          <li className="p-4">
            <Link href="/">Journal</Link>
          </li>
          <li className="p-4">
            <Link href="/">Gifts</Link>
          </li>
        </ul>

        <form className="flex items-center hidden sm:flex">
          <div className="relative w-fill">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <AiOutlineSearch className="text-gray-600" />
            </div>
            <input
              type="text"
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for 'Cashmere'"
              required
            />
          </div>
        </form>

        {/* Mobile Button */}

        <div onClick={handleNav} className="sm:block sm:hidden z-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Menu */}

        <Link
          href="/"
          className="flex items-center justify-center sm:block sm:hidden"
        >
          <Image src="/logo.png" alt="/" width={100} height={100} />
        </Link>

        <BsBag className="sm:block sm:hidden" size={20} />
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center eas-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center eas-in duration-300"
          }
        >
          <ul>
            <li className="p-4 text-2xl hover:text-gray-700">
              <Link href="/">What's New</Link>
            </li>
            <li className="p-4 text-2xl hover:text-gray-700">
              <Link href="/">Designers</Link>
            </li>
            <li className="p-4 text-2xl hover:text-gray-700">
              <Link href="/">Clothing</Link>
            </li>
            <li className="p-4 text-2xl hover:text-gray-700">
              <Link href="/">Accessories</Link>
            </li>
            <li className="p-4 text-2xl hover:text-gray-700">
              <Link href="/">Journal</Link>
            </li>
            <li className="p-4 text-2xl hover:text-gray-700">
              <Link href="/">Gifts</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Search Input */}
      <form className="flex items-center justify-center sm:block sm:hidden">
        <div className="relative w-fill">
          <div className="absolute inset-y-0 left-0 flex items-center pl-10 pointer-events-none">
            <AiOutlineSearch className="text-gray-600" size={20} />
          </div>
          <input
            type="text"
            id=""
            className="bg-gray-50 border border-gray-300 text-sm rounded-sm marker:w-full w-90 pl-20 p-2.5 m-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Search for 'Cashmere'"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Navbar;
