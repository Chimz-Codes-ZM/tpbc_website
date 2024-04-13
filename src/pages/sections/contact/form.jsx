import { useState } from "react";
import Link from "next/link";
import Blessed from "./blessed";

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContactForm({
      ...contactForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(contactForm);

    const sendData = async () => {
      const response = await fetch(`/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      });
      if (response.ok) {
        alert("Submitted successfully");

        setContactForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }

      if (response.status === 400) {
        console.log("Error:", response.status);
      }
    };

    sendData();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-10  w-full ">
      <Blessed />

      {/* Form Component */}
      <div className="p-2 text-2xl">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {/* Name */}
          <div className="flex flex-col gap-3 col-span-1">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="px-2 p-1 background-tertiary focus:outline-none"
              value={contactForm.name}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-3 col-span-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              className="px-2 p-1 background-tertiary focus:outline-none"
              value={contactForm.email}
              onChange={handleChange}
            />
          </div>

          {/* Phone Number */}

          <div className="flex flex-col gap-3 col-span-1">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="(012 345 6789)"
              className="px-2 p-1 background-tertiary focus:outline-none"
              value={contactForm.phone}
              onChange={handleChange}
            />
          </div>

          {/* Subject */}

          <div className="flex flex-col gap-3 col-span-1">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Our Church"
              className="px-2 p-1 background-tertiary focus:outline-none"
              value={contactForm.subject}
              onChange={handleChange}
            />
          </div>

          {/* Message */}

          <div className="flex flex-col gap-3 col-span-1 sm:col-span-2">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="5"
              rows="5"
              placeholder="Type your message here ..."
              className="p-2 background-tertiary focus:outline-none"
              value={contactForm.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div
            className="inline-flex items-center gap-2 bg-[#443353] px-8 py-3 text-white hover:bg-white border border-[#443353] transition-colors duration-100 delay-75 hover:text-[#443353] focus:outline-none focus:ring active:text-[#443353] w-fit h-fit cursor-pointer"
            onClick={handleSubmit}
          >
            <span className="text-md font-medium ">Send</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
