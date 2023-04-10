import React from "react";
import "../style/random.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { deviceType } from "react-device-detect";
function Event() {
  console.log(deviceType);
  return (
    <div className="xl:w-3/4  xl:mx-auto w-full pt-4 px-2 xl:px-0  ">
      <div className="grid lg:grid-cols-4 md:gap-2 md:grid-cols-2 xl:gap-4">
        <div className="w-full  h-[auto] md:h-auto lg:h-[16rem] 2xl:h-[16rem] mx-2 shadow-lg  rounded-lg mb-2 md:mb-0 ">
          <img src=".\images\rchi-church.jpg" alt="Reach heaven Church Int." />
          <div className="w-full flex justify-center hidden lg:block px-2 py-2">
            <div className="font-bold mt-4 text-base  ">Church Service</div>
          </div>
        </div>
        <div className="w-full  h-[auto] md:h-auto lg:h-[16rem] 2xl:h-[16rem] mx-2 shadow-lg  rounded-lg mb-2 md:mb-0 ">
          <img src=".\images\rchi-prayer.jpg" alt="Reach heaven Church Int." />
          <div className="w-full flex justify-center hidden lg:block px-2 py-2">
            <div className="font-bold mt-4 text-base  ">Prayer Day</div>
          </div>
        </div>

        <div className="w-full  h-[auto] md:h-auto lg:h-[16rem] 2xl:h-[16rem] mx-2 shadow-lg  rounded-lg mb-2 md:mb-0 ">
          <img src="./images\rchi-event2.jpg" alt="Reach heaven Church Int." />
          <div className="w-full flex justify-center hidden lg:block px-2 py-2">
            <div className="font-bold mt-4 text-base  ">Worship Night</div>
          </div>
        </div>

        <div className="w-full  h-[auto] md:h-auto lg:h-[16rem] 2xl:h-[16rem] mx-2 shadow-lg  rounded-lg mb-2 md:mb-0  ">
          <img src=".\images\rhci-event3.jpg" alt="Reach heaven Church Int." />
          <div className="w-full flex justify-center hidden lg:block px-2 py-2">
            <div className="font-bold mt-4 text-base  ">Bible Studies</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
