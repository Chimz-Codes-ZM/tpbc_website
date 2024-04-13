import React from "react";
import Link from "next/link";
import { navLinks } from "../data";

const Footer = () => {
  return (
    <div className="w-full min-h-36 background-primary text-primary px-12 p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {/* Contact Information */}
      <div className="col-span-1 flex flex-col gap-6 p-4 ">
        <h1 className="text-center font-semibold text-3xl">Contact Us</h1>
        <div className="font-semibold">
          <h3 className="text-xl">Email</h3>
          <p>twinpalmbaptist@gmail.com</p>{" "}
        </div>

        <div className="font-semibold">
          <h3 className="text-xl">Phone</h3>
          <p>123 456 789</p>
        </div>

        <div className="font-semibold max-w-72">
          <h3 className="text-xl">Address</h3>
          <p>
            Twinpalm baptist theological Serminary (Ibex Hill), Lusaka, Zambia
          </p>
        </div>
      </div>

      {/* Social Media Information */}
      <div className="col-span-1"></div>

      {/* Navigation */}
      <div className="col-span-1 flex flex-col gap-6 p-4 ">
        <h1 className="text-center font-semibold text-3xl">Navigation</h1>
        {navLinks.map((link) => (
          <Link key={link.id} href={link.href}>
            {link.linkText}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
