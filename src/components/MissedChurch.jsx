import React from "react";
import "../style/missedchurchstyle.css";

function MissedChurch() {
  return (
    <div className="shadow-lg bg-gray-100 mt-4" id="missed">
      <div className=" relative w-full px-4 xl:px-0 xl:w-3/4 mx-auto md:flex md:justify-between pt-12">
        <div className="uppercase text-gray-900  font-bold w-full text-center pt-12 ">
          <div className="text-center text-2xl bg-gradient-to-r from-sky-600 via-sky-900 to-sky-900 text-gray-100 py-2 px-8">
            Join our
          </div>
          <div className=" ">
            <span className="text-5xl md:text-[7rem] font-bold text-yellow-500 drop-shadow-lg">
              Online{" "}
            </span>{" "}
            <br></br>
            <span className="text-5xl font-meduim text-gray-900">
              Streaming{" "}
            </span>
            <br></br>
            <span className="text-4xl font-meduim text-gray-800">Service</span>
          </div>
          <div className="w-full mx-auto flex justify-center mt-4">
            <div className="flex justify-center text-yellow-500 mr-4">
              <div className="mx-2 px-2">
                <i class="fa-brands fa-facebook fa-2x drop-shadow-lg"></i>
              </div>
              <div>
                <i class="fa-brands fa-youtube fa-2x drop-shadow-lg text-gray-900"></i>
              </div>
            </div>
            <div className="text-xs md:text-sm">
              Reach Heaven Church Int. Or @reachheavenchurchint.
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
          className="w-full flex justify-center sentencecase">
          <img
            src="./images/phone1.png"
            alt="Reach Heaven Phone"
            className="w-[18rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default MissedChurch;
