import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import HeroImage from "../assets/heroImage.png";
import cang from "../assets/vicky.png";
import mil from "../assets/MIL.jpg";
import { Link } from "react-scroll";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";

const LogBook = () => {
  return (
    <div
      name="LogBook"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Production Log Book
          </h2>
      <form className="w-full max-w-lg">
      
          <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-9">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                Area
              </label>
              <div className="relative">
                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option>Dispensing</option>
                  <option>Mixing Semi Solid</option>
                  <option>Mixing Liquid</option>
                  <option>Filling Semi Solid</option>
                  <option>Filling Liquid</option>
                  <option>Secondary Packaging</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                NAME
              </label>
              <input disabled className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="VICKY FADILLA YULIAWAN" />
              <p className="text-gray-600 text-xs italic">Automatic Fullfiled</p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                TEMPERATURE
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="CELCIUS" />
              <p className="text-gray-600 text-xs italic">Input Actual Suhu</p>
            </div>
          </div>
          <NavLink to={"/success"}>
            <button type="button" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Submit          
            </button>
          </NavLink>
          <div className="flex flex-wrap -mx-3 mb-2">
        </div>
      </form>


      </div>
    </div>
  );
};

export default LogBook;
