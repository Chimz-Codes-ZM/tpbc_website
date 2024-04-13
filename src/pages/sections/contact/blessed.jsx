import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const Blessed = () => {
  return (
    <div className="flex flex-col gap-10 px-4 lg:px-28 mb-12 sm:mb-0">
      <div className="flex flex-col gap-4">
        <h1 className="text-8xl font-bold">Get Blessed With Us!</h1>
        <p className="text-2xl font-semibold">
          Thank you to all the faithful god lovers. You will have motivation to
          keep my love for god is alive. Leave a mail & keep in touch with us.
        </p>
      </div>

      <div className="flex gap-8 items-center text-2xl">
        <div className="p-6 border-2 border-[#4d3c5b] rounded-full">
          <IoMdMail />
        </div>

        <div>
          <h3 className="font-bold">Mail</h3>
          <p>twinpalmbaptist@gmail.com</p>
        </div>
      </div>
      <div className="flex gap-8 items-center text-2xl">
        <div className="p-6 border-2 border-[#4d3c5b] rounded-full">
        <FaPhone />
        </div>

        <div>
          <h3 className="font-bold">Phone</h3>
          <p>123 456 789</p>
        </div>
      </div>
      <div className="flex gap-8 items-center text-2xl">
        <div className="p-6 border-2 border-[#4d3c5b] rounded-full">
        <IoLocationSharp />
        </div>

        <div>
          <h3 className="font-bold">Location</h3>
          <p>
            Baptist theological Serminary (Ibex Hill), Lusaka, Zambia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blessed;
