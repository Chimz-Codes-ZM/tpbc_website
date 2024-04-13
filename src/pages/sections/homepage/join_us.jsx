import React from "react";
import Link from "next/link";

const Join = () => {
  return (
    <div className="background-secondary flex flex-col gap-6 py-32 justify-center items-center text-primary text-center">
      <div>
        <h3>JOIN US FOR AN WORSHIP</h3>
        <span></span>
      </div>
      <h1 className="text-4xl">
        We gather each Sunday at 9:15am for pre-service prayers <br /> and
        10:00am for worship and would love for you to <br /> join with us!
      </h1>
      <p>
        We’ve been a church community for over 60 years. Our <br /> mission,
        throughout our history and looking to the future, is <br /> growing
        together for the glory of God.
      </p>
      <Link
        className="inline-flex items-center gap-2 background-primary px-8 py-3 text-white hover:bg-white transition-colors duration-100 delay-75 hover:text-[#443353] focus:outline-none focus:ring active:text-[#443353] w-fit"
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
        <span className="h-10 border-[#4D3C5B] border"></span>
        <span className="text-md font-medium"> Join Now </span>
      </Link>
    </div>
  );
};

export default Join;
