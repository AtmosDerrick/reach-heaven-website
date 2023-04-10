import React from "react";
import "../style/landingStyle.css";
import LandingNav from "./LandingNav";

function LandingPage() {
  return (
    <div className="w-full mx-auto h-[70vh] md:h-[90vh]" id="landingPage">
      <LandingNav />
      <div className="w-full px-4 lg:px-4 lg:w-3/4 mx-auto text-white   flex mt-8 md:mt-24  justify-center">
        <div
          className="uppercase font-medium text-center  "
          data-aos="fade-down">
          <h3 className="w-full md:w-3/4 lg:w-1/2 mx-auto italic border-t-4 border-b-4 border-blue-400 p-4">
            We welcome you to
          </h3>
          <h1 className="text-xl md:text-5xl  font-semibold mt-4 font-serif drop-shadow-lg">
            Reach Heaven Church
          </h1>
          <div className="w-full md:w-3/4 mx-auto  text-xs md:text-base text-center mt-2 md:mt-4 italic ">
            <p>
              Trust in the Lord with all your heart and lean not on your own
              understanding; in all your ways submit to him, and he will make
              your paths straight
            </p>
            <br></br>
            <span className="text-sm md:text-lg tracking-wide">
              Proverbs 3:5-6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
