import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import HeroImage from "../assets/heroImage.png";
import cang from "../assets/vicky.png";
import mil from "../assets/MIL.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Menarini Indria Laboratories
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          At Menarini Asia-Pacific, we are dedicated to improving people's lives. We believe that good health empowers people to unlock their full potential. Strengthened by Menarini's illustrious heritage since 1886 and a network of global partners, Menarini Asia-Pacific today serves over 13 key markets in the region - invigorating lives of the people and communities where we serve.
          Menarini Asia-Pacific is a wholly owned subsidiary of leading Italian pharmaceutical company Menarini Group. We combine the strengths of our global resources with local customer insights to bring the best medical innovations to hospitals and healthcare providers.
 
          </p>
          <div>
            <Link
              to="logbook"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Log Books
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={mil}
            alt="my profile"
            className="rounded-3xl mx-auto w-2/3 md:w-full mb-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
