import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] p-2">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8  flex flex-col justify-center h-full">
        <p className="text-pink-600 px-2 py-2">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Umesh bhagtani
        </h1>
        <span className="text-3xl sm:text-5xl font-bold text-[#8892b0]">
          <span>I am a</span>{" "}
          <TypeAnimation
            className="text-red-400"
            sequence={[
              "Full Stack developer",
              1000,
              "Gamer",
              1000,
              "Traveller",
              1000,
              "Fitness-enthusiast",
              1000,
            ]}
            repeat={Infinity}
          />
        </span>
        {/* <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2> */}
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;