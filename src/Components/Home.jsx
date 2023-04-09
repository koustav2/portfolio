import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Logo from "../assets/myphotos/pic4.jpg";

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
          <img
            src={Logo}
            alt=""
            style={{ width: "70px" }}
            className="ml-4 rounded-full"
          />
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]">
          I'm a Front-End Developer.
        </h2>
        <p className="text-[#6c6e74] py-4 max-w-[700px]">
          A Front-End developer and Technical enthusiastic specializing in
          building (and occasionally designing) exceptional digital experiences.
          Currently, I'm focused on building responsive Front-end web
          applications and E-Commarce website.
        </p>
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
