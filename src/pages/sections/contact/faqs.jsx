import React, { useState } from "react";
import { questions } from "@/pages/data";

const FAQs = () => {
  const [isOpen, setIsOpen] = useState({});

  const updateOpenState = (id) => {
    setIsOpen((prevState) => {
      const newState = { ...prevState }; // Create a copy of the state
      // Close any other open questions
      Object.keys(newState).forEach((key) => {
        if (key !== id) {
          newState[key] = false;
        }
      });
      // Update clicked question's state
      newState[id] = !prevState[id] || false;
      return newState;
    });
  };
  
  return (
    <div className="mt-10 background-tertiary w-full flex flex-col gap-12 items-center p-16">
      <h1 className="text-center text-8xl font-bold">
        Frequently Asked <br /> Questions!
      </h1>

      <div className="flex flex-col gap-8 w-full items-center">
        {questions.map((question, index) => (
          <div
            className={`border border-[#4d3c5b] ${
              isOpen[question.id] ? "bg-[#4d3c5b] text-primary" : ""
            } p-4 cursor-pointer  w-2/3`}
            key={question.id}
            onClick={() => updateOpenState(question.id)}
          >
            <div className="text-3xl font-semibold ">
              {index + 1}. {question.q}
            </div>

            {isOpen[question.id] && (
              <div className="text-wrap text-2xl mt-6">{question.a}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
