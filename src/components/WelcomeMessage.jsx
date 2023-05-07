import React from "react";
import { Link } from "react-router-dom";

function WelcomeMessage() {
  return (
    <div className="w-3/4 mx-auto  h-[20rem] py-4 flex justify-center items-center">
      <div>
        <div className="w-full text-center text-6xl  font-bold text-sans font-bold bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700  inline-block text-transparent bg-clip-text">
          Heaven is Real
        </div>
        <p className="w-full  px-2 md:px-0  xl:w-3/4 text-base text-gray-700 text-center mx-auto py-4">
          Discover the Reality of Heaven at Reach Heaven Church International -
          A Place to Experience God's Presence
        </p>
        <div className="flex justify-center">
          <Link
            to="/about"
            className="bg-blue-500 text-white font-medium drop-shadow-lg px-4 py-2 rounded-full ">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WelcomeMessage;
