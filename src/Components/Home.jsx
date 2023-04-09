import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";


function Home() {
  return (
    <div name="home" className=" h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-700 text-xl">
          Hi, <span className="wave">👋</span> my name is
        </p>
        <div className="flex">
          <h1 className="text-3xl sm:text-5xl font-bold text-[#ccd6f6] flex">
            Koustav Maity
          </h1>

        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]">
          I'm a Front-End Developer and
          Technical enthusiastic.
        </h2>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-bl-lg ">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
