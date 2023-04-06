import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Copyright from "../Copyright";

function Conference() {
  return (
    <div>
      <Navbar />
      <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 h-[10vh] ">
        <div className="  w-full px-4 xl:px-0 xl:w-3/4 mx-auto py-4 text:lg md:text-xl uppercase  flex items-center font-mono font-bold text-white drop-shadow-md ">
          <div>Conference and Events</div>
        </div>
      </div>
      <div className="w-full mx-2 xl:w-3/4 xl:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div className="w-full h-[10rem] bg-gray-200 px-4 rounded-lg shadow-lg">
          <div>
            <span>
              <i class="fa-sharp fa-regular fa-calendar fa-2x"></i>
            </span>
            <span className="text-lg font-serif font-bold pl-4">
              1ST January 2024
            </span>
          </div>
          <div className="text-xl text-blue-500 font-bold">
            New Year Church Celebration
          </div>
          <div className="w-full py-2 px-4 text-center">
            <p className="text-base text-gray-800 italic">
              "Aliquip commodo tempor amet minim ad culpa enim laboris deserunt
              minim dolore dolore quis dolor."
            </p>
          </div>
        </div>
        <div className="w-full h-[10rem] bg-gray-200 px-4 rounded-lg shadow-lg">
          <div>
            <span>
              <i class="fa-sharp fa-regular fa-calendar fa-2x"></i>
            </span>
            <span className="text-lg font-serif font-bold pl-4">
              1ST January 2024
            </span>
          </div>
          <div className="text-xl text-blue-500 font-bold">
            New Year Church Celebration
          </div>
          <div className="w-full py-2 px-4 text-center">
            <p className="text-base text-gray-800 italic">
              "Aliquip commodo tempor amet minim ad culpa enim laboris deserunt
              minim dolore dolore quis dolor."
            </p>
          </div>
        </div>
        <div className="w-full h-[10rem] bg-gray-200 px-4 rounded-lg shadow-lg">
          <div>
            <span>
              <i class="fa-sharp fa-regular fa-calendar fa-2x"></i>
            </span>
            <span className="text-lg font-serif font-bold pl-4">
              1ST January 2024
            </span>
          </div>
          <div className="text-xl text-blue-500 font-bold">
            New Year Church Celebration
          </div>
          <div className="w-full py-2 px-4 text-center">
            <p className="text-base text-gray-800 italic">
              "Aliquip commodo tempor amet minim ad culpa enim laboris deserunt
              minim dolore dolore quis dolor."
            </p>
          </div>
        </div>
        <div className="w-full h-[10rem] bg-gray-200 px-4 rounded-lg shadow-lg">
          <div>
            <span>
              <i class="fa-sharp fa-regular fa-calendar fa-2x"></i>
            </span>
            <span className="text-lg font-serif font-bold pl-4">
              1ST January 2024
            </span>
          </div>
          <div className="text-xl text-blue-500 font-bold">
            New Year Church Celebration
          </div>
          <div className="w-full py-2 px-4 text-center">
            <p className="text-base text-gray-800 italic">
              "Aliquip commodo tempor amet minim ad culpa enim laboris deserunt
              minim dolore dolore quis dolor."
            </p>
          </div>
        </div>
        <div className="w-full h-[10rem] bg-gray-200 px-4 rounded-lg shadow-lg">
          <div>
            <span>
              <i class="fa-sharp fa-regular fa-calendar fa-2x"></i>
            </span>
            <span className="text-lg font-serif font-bold pl-4">
              1ST January 2024
            </span>
          </div>
          <div className="text-xl text-blue-500 font-bold">
            New Year Church Celebration
          </div>
          <div className="w-full py-2 px-4 text-center">
            <p className="text-base text-gray-800 italic">
              "Aliquip commodo tempor amet minim ad culpa enim laboris deserunt
              minim dolore dolore quis dolor."
            </p>
          </div>
        </div>
        <div className="w-full h-[10rem] bg-gray-200 px-4 rounded-lg shadow-lg">
          <div>
            <span>
              <i class="fa-sharp fa-regular fa-calendar fa-2x"></i>
            </span>
            <span className="text-lg font-serif font-bold pl-4">
              1ST January 2024
            </span>
          </div>
          <div className="text-xl text-blue-500 font-bold">
            New Year Church Celebration
          </div>
          <div className="w-full py-2 px-4 text-center">
            <p className="text-base text-gray-800 italic">
              "Aliquip commodo tempor amet minim ad culpa enim laboris deserunt
              minim dolore dolore quis dolor."
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}

export default Conference;
