import React, { useState } from "react";
import Navbar from "./Navbar";
import { useContext } from "react";
import {HomeContext} from '../../Conexts/Contexts'

// icons and imgs
// import DashBoardIcon from "../../assets/icons/Home/dashboard.gif"; 


import { DashBoardIcon, TimeTrackIcon, GoalIcon, DocsIcon, ProjectIcon } from "../../assets/imgs";
import { Home } from "lucide-react";


const Hero = () => {


  const {openModal} = useContext(HomeContext)




  return (
    <section className="bg-gradient-to-b from-white to-gray-50 text-center ">

      {/* Hero Content */}
      <div className="mt-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Work Smarter: Fast, Simple, Secure with ToDo Tock
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Now with Chat, powered by AI. One place for teams of all sizes to
          communicate and get work done.
        </p>
        <button onClick={openModal} className="bg-gradient-to-r mt-16 from-orange-400 to-orange-600 text-white py-3 px-8 rounded-full text-lg">
          Get Started. Now →
        </button>
        <span className="block mt-2 text-gray-500">Free Forever</span>




        {/* Bottom Icon Menu */}
        <div className="flex justify-center mt-20 space-x-16">
          <div className="text-center w-36 h-36 transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-lg rounded-md p-2 border border-gray-300 hover:border-orange-400 flex flex-col items-center justify-center">
            <img
              src={DashBoardIcon}
              alt="Dashboard"
              className="w-12 h-12 mx-auto transition-opacity duration-200 hover:opacity-80"
            />
            <span className="text-gray-700">Dashboard</span>
          </div>
          <div className="text-center w-36 h-36 transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-lg rounded-md p-2 border border-gray-300 hover:border-orange-400 flex flex-col items-center justify-center">
            <img
              src={DocsIcon}
              alt="Docs"
              className="w-12 h-12 mx-auto transition-opacity duration-200 hover:opacity-80"
            />
            <span className="text-gray-700">Docs</span>
          </div>
          <div className="text-center w-36 h-36 transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-lg rounded-md p-2 border border-gray-300 hover:border-orange-400 flex flex-col items-center justify-center">
            <img
              src={TimeTrackIcon}
              alt="Time Tracking"
              className="w-12 h-12 mx-auto transition-opacity duration-200 hover:opacity-80"
            />
            <span className="text-gray-700">Time Tracking</span>
          </div>
          <div className="text-center w-36 h-36 transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-lg rounded-md p-2 border border-gray-300 hover:border-orange-400 flex flex-col items-center justify-center">
            <img
              src={ProjectIcon}
              alt="Projects"
              className="w-12 h-12 mx-auto transition-opacity duration-200 hover:opacity-80"
            />
            <span className="text-gray-700">Projects</span>
          </div>
          <div className="text-center w-36 h-36 transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-lg rounded-md p-2 border border-gray-300 hover:border-orange-400 flex flex-col items-center justify-center">
            <img
              src={GoalIcon}
              alt="Goal"
              className="w-12 h-12 mx-auto transition-opacity duration-200 hover:opacity-80"
            />
            <span className="text-gray-700">Goal</span>
          </div>
          {/* Add more icons as needed */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
