import React from "react";
import Link from "next/link";
import { navLinks } from "../data";

const Navbar = () => {
  return (
    <div className="w-full p-2 px-10 py-10 flex justify-between relative z-10 text-[#443353]">
      <div className="text-xl">
        <Link href="/">Logo here</Link>
      </div>
      <div>
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
          <span className="text-sm font-medium"> Join Now </span>

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
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
