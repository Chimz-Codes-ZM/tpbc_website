import React from "react";
import Link from "next/link";
import { navLinks } from "../data";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full p-2 px-10 py-10 flex justify-between relative z-10 text-[#443353]">
      <div className="text-xl">
        <Link href="/">Logo here</Link>
      </div>
      {/* Hamburger menu for mobile screens */}
      <button
        className="md:hidden flex items-center text-xl focus:outline-none focus:ring"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </>
          )}
        </svg>
      </button>
      {/* Navigation links */}
      <div
        className={`flex items-center text-xl md:flex-row md:gap-14 transition duration-300 ease-in-out ${
          isOpen ? "flex flex-col" : "hidden md:flex"
        }`}
      >
        <ul className="flex gap-14">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.href}>{link.linkText}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Link
          className="inline-flex items-center gap-2 bg-[#443353] px-8 py-3 text-white hover:bg-white transition-colors duration-100 delay-75 hover:text-[#443353] focus:outline-none focus:ring active:text-[#443353]"
          href="/contact"
        >
          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
          <span className="h-10 border"></span>
          <span className="text-md font-medium"> Join Now </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
