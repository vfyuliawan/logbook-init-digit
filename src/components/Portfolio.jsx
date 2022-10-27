import React from "react";
import lbkprod from "../assets/portfolio/lbkprod.jpg";
import lbkeng from "../assets/portfolio/lbkeng.jpg";
import lbkwh from "../assets/portfolio/lbkwh.jpg";
import lbkqc from "../assets/portfolio/lbkqc.jpg";
import lbkpdv from "../assets/portfolio/lbkpdv.jpg";
import lbkqa from "../assets/portfolio/lbkqa.jpg";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import usestate from "../assets/portfolio/usestate.jpg";
import reacthooks from "../assets/portfolio/React-Hooks.png";
import mgi from "../assets/portfolio/mgi.jpg";
import { NavLink } from "react-router-dom";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: lbkprod,
    },
    {
      id: 2,
      src: lbkeng,
    },
    {
      id: 3,
      src: lbkqc,
    },
    {
      id: 4,
      src: lbkwh,
    },
    {
      id: 5,
      src: lbkpdv,
    },
    {
      id: 6,
      src: lbkqa,
    }

  ];

  return (
    <div
      name="logbook"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white mb-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Logbook
          </p>
          <p className="py-6"></p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-12">
          {portfolios.map(({ id, src }) => (
            
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <NavLink to={"/tabel"}>
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Write
                </button>
              </NavLink>
              <NavLink to={"/tabelhasil"}>
                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                  Result
                </button>
              </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
