import React from "react";
import "../style/landingStyle.css";
import Navbar from "./Navbar";

function LandingPage() {
  return (
    <div className="w-full mx-auto h-[90vh]" id="landingPage">
      <Navbar />
      <div className="w-3/4 mx-auto text-white   flex  mt-32 justify-center">
        <div className="uppercase font-medium text-center ">
          <h3 className="w-1/2 mx-auto italic border-t-4 border-b-4 border-blue-400 p-4">
            We welcome you to
          </h3>

          <h1 className="text-5xl  font-semibold mt-4 font-serif drop-shadow-lg">
            Reach Heaven Church
          </h1>
          <div className="w-3/4 mx-auto text-center mt-4 italic ">
            <p>
              Cupidatat consectetur qui pariatur ex nulla deserunt et ipsum
              officia adipisicing laboris exercitation officia commodo.
            </p>
            <br></br>
            <span className="text-lg tracking-wide">Mattew 12 : 3</span>
          </div>

          <button className="bg-blue-500 shadow-lg text-lg text-center text-white py-2 px-8 font-medium rounded-full mt-4 hover:opacity-70 hover:shadow-md hover:transition-all">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
