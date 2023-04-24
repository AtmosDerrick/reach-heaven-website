import React from "react";
import "../style/random.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { deviceType } from "react-device-detect";

import sun from "../images/SUN.jpg";
import prayer from "../images/pray.jpg";
import worship from "../images/wed.jpg";
import teaching from "../images/TEACHING.jpg";

function Event() {
  console.log(deviceType);

  return (
    <div className=" w-full pt-4 px-2 xl:px-0   ">
      <div className="grid lg:grid-cols-4 md:gap-2 md:grid-cols-2 xl:gap-4">
        <div className="w-full  h-[auto] bg-gray-900  md:mx-2 shadow-lg  rounded-lg mb-2 md:mb-0 hover:opacity-50 ">
          <img
            src={sun}
            alt="Reach heaven Church Int."
            className="w-full h-[15rem]"
          />
          <div className="w-full  px-2 py-2">
            <div className="text-xl text-gray-100 uppercase w-full text-center font-bold">
              sunday Service : 8AM - 12AM
            </div>
          </div>
        </div>
        <div className="w-full  h-[auto]  bg-gray-900 md:mx-2 shadow-lg  rounded-lg mb-2 md:mb-0  hover:opacity-50">
          <img
            src={prayer}
            alt="Reach heaven Church Int."
            className="w-full h-[15rem]"
          />
          <div className="w-full flex justify-center lg:block px-2 py-2">
            <div className="text-xl text-gray-100 uppercase w-full text-center font-bold">
              WednessDay Mount of Prayer: 9am- 12pm
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-900  h-[auto]  md:mx-2 shadow-lg  rounded-lg mb-2 md:mb-0 hover:opacity-50 ">
          <img
            src={worship}
            alt="Reach heaven Church Int."
            className="w-full h-[15rem]"
          />
          <div className="w-full flex justify-center lg:block px-2 py-2">
            <div className="text-xl text-gray-100 uppercase w-full text-center font-bold">
              Friday Power Service: 6pm - 8pm
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-900  h-[auto]  md:mx-2 shadow-lg  rounded-lg mb-2 md:mb-0 hover:opacity-50 ">
          <img
            src={teaching}
            alt="Reach heaven Church Int."
            className="w-full h-[15rem]"
          />
          <div className="w-full flex justify-center lg:block px-2 py-2">
            <div className="text-xl text-gray-100 uppercase w-full text-center font-bold">
              Friday Bible Studies: 4pm - 6pm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
