import React from "react";
import Image from "next/image";
import Link from "next/link";

const Ministry = () => {
  return (
    <div className="flex flex-col py-20 items-center gap-12 text-secondary">
      <div className="background-quaternary p-10 grid grid-cols-2 gap-4">
        <div className="relative border">
          <Image
            src="/beliefs.jpg"
            alt="ministry image"
            layout="fill"
            objectFit="cover"
            className=" transition-opacity opacity-0 duration-[1.2s]"
            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
          />
        </div>
        <div className="flex flex-col gap-4 p-2 pr-10">
          <h3 className="text-3xl">Saturday - 7pm to 9pm</h3>
          <h1 className="text-5xl font-semibold">Children&apos;s Ministry</h1>
          <p className="text-xl">
            We believe that every member of our congregation has unique gifts
            and talents.
          </p>

          <Link
                className="inline-flex items-center gap-2 bg-white px-8 py-3 text-secondary hover:text-white hover:bg-[#443353] transition-colors duration-100 delay-75 focus:outline-none focus:ring active:text-[#443353] w-fit h-fit"
                href="/ministries"
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
                <span className="text-md font-medium">More Details</span>
              </Link>
        </div>
      </div>
    </div>
  );
};

export default Ministry;
