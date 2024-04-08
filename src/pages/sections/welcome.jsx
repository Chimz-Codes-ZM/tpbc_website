import React from "react";

const Welcome = () => {
  return (
    <div id="about" className="bg-[#FAF9F6] flex flex-col items-center py-12 gap-12">
      <div>
        <h1 className="text-4xl">Welcome to Twin Palm Baptist Church</h1>
        <p className="">A place to call home</p>
      </div>

      <div className="flex w-full px-16">
        <div className="flex flex-col gap-4 w-96">
          <img
            src="https://images.pexels.com/photos/1343325/pexels-photo-1343325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="church"
            className="rounded-xl"
          />
          <h2 className=" font-semibold text-2xl">Our Ministry</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
            delectus ipsum repudiandae nulla harum impedit repellat, recusandae
            cum unde necessitatibus a. Praesentium dolor voluptatum eum?
          </p>
          <a href="#" className="hover:underline text-blue-700">Read more &gt;&gt;</a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
