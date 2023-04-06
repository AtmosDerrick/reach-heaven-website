import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Giving() {
  return (
    <div>
      <Navbar />
      <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 h-auto ">
        <div className="  w-full px-4 xl:px-0 xl:w-3/4 mx-auto py-4 text:lg md:text-xl uppercase  flex items-center font-mono font-bold text-white drop-shadow-md ">
          <div>
            Give generously and cheerfully to support the work of our church and
            further God's kingdom.
          </div>
        </div>
      </div>
      <div className="w-full xl:w-3/4 mx-auto mt-4 md:mt-8 h-auto">
        <div className="mw-full px-2 md:px-0 md:w-1/2 mx-auto bg-gray-50 h-auto">
          <div className="flex justify-center ">
            <img
              src="./images/RHCI_logo.png"
              alt="RHCI logo"
              className="w-[7rem]"
            />
          </div>

          <div className="text-lg text-center mt-4 font-semibold">
            If you would like to give an offering to support the work of our
            church, we offer two convenient options:
          </div>

          <div>
            <ul className="list-disc text-lg mt-4">
              <li>
                <span className="font-bold text-yellow-500">Mobile Money:</span>{" "}
                You can send your offering to{" "}
                <span className="text-xl text-red-500 font-bold">
                  0241732689{" "}
                </span>
                through mobile money.
              </li>
              <li>
                <span className="font-bold text-yellow-500">
                  Bank Transfer:
                </span>{" "}
                You can also make a transfer to our church's bank account
                number:{" "}
                <span className="text-xl text-red-500 font-bold">
                  0241732689{" "}
                </span>
              </li>
            </ul>
          </div>

          <div className="text-center text-lg mt-4 italic">
            May God richly bless you as you give to support the work of God.
            Thank you for your generosity!
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Giving;
