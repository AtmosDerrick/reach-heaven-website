import React from "react";
import "../style/missedchurchstyle.css";

function MissedChurch() {
  return (
    <div className="shadow-lg bg-gray-100 mt-4">
      <div className=" relative w-3/4 mx-auto flex justify-between pt-12">
        <div className="uppercase text-black  font-bold w-full text-center pt-12 ">
          <div className="text-center text-2xl bg-gray-900 text-white py-2 px-8">
            Join our
          </div>
          <div className=" ">
            <span className="text-[7rem] font-bold text-yellow-500 drop-shadow-lg">
              Online{" "}
            </span>{" "}
            <br></br>
            <span className="text-5xl font-meduim">Streaming </span>
            <br></br>
            <span className="text-4xl font-meduim">Service</span>
          </div>
          <div className="w-full mx-auto flex justify-center mt-4">
            <div className="flex justify-center text-yellow-500 mr-4">
              <div className="mx-2 px-2">
                <i class="fa-brands fa-facebook fa-2x drop-shadow-lg"></i>
              </div>
              <div>
                <i class="fa-brands fa-youtube fa-2x drop-shadow-lg"></i>
              </div>
            </div>
            <div>Reach Heaven Church Int. Or @reachheavenchurchint.</div>
          </div>
        </div>
        <div className="w-full flex justify-center sentencecase">
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
