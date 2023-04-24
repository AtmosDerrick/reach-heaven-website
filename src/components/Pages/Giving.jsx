import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

//import image
import momo from "../../images/allnet.jpg";

function Giving() {
  return (
    <div>
      <Navbar />
      <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 h-auto ">
        <div className="  w-full px-2 xl:px-0 xl:w-3/4 mx-auto py-4 text:lg md:text-xl uppercase  flex items-center font-sans font-bold text-white drop-shadow-md text-lg ">
          <div>
            Give generously and cheerfully to support the work of our church and
            further God's kingdom.
          </div>
        </div>
      </div>
      <div className="w-full xl:w-3/4 mx-auto mt-4 md:mt-8 h-auto">
        <div className="w-full  md:px-2 md:w-1/2 mx-auto bg-white rounded-lg shadow-xl  h-auto">
          <div className="flex justify-center ">
            <img
              src="./images/RHCI_logo.png"
              alt="RHCI logo"
              className="w-[7rem]"
            />
          </div>

          <div>
            <ul className="list-disc text-lg mt-4">
              <li>
                <div className="w-full text-center">
                  <div className="w-3/4 lg:w-1/2  mx-auto uppercase font-bold  bg-blue-500 text-white drop-shadow-md px-4 rounded-md py-2 ">
                    MTN Mobile Money
                  </div>

                  <span className="text-3xl text-red-500 font-bold">
                    059 - 145 - 9526
                  </span>
                </div>
                <div className="w-3/4 lg:w-1/2 text-center  mx-auto uppercase font-bold  bg-blue-500 text-white drop-shadow-md px-4 rounded-md py-2 ">
                  Bank Transfer
                </div>

                <div className="w-full text-center">
                  <span className="uppercase font-bold">Prudential bank</span>
                  <br></br>
                  <span className="text-3xl text-red-500 font-bold">
                    013 - 500 - 011 - 001 - 0
                  </span>
                </div>
              </li>
            </ul>

            <div>
              <img src={momo} alt="momo" />
            </div>
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
