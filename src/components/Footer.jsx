import React from "react";
import Map from "./Map";
import Form from "./Form";

function Footer() {
  return (
    <footer className="w-full h-auto pb-4 md:pb-0  bg-gray-900 mt-4 mx-auto  ">
      <div className="w-full  mx-4 xl:mx-0 xl:w-3/4 xl:mx-auto text-3xl text-white ">
        <div className=" mt-4">
          <ul className="flex justify-center md:justify-left pt-4 ">
            <li className="mx-4 text-gray-200">
              <i class="fa-brands fa-facebook"></i>
            </li>
            <li className="mx-4 text-gray-200">
              <i class="fa-brands fa-instagram"></i>
            </li>
            <li className="mx-4 text-gray-200">
              <i class="fa-brands fa-youtube"></i>
            </li>
          </ul>
          <div className="w-full grid grid-cols-1 md:grid-cols-3  ">
            <div>
              <div className="w-full text-xl text-blue-400 my-4 font-bold text-center">
                <div className="w-full border-l-4 border-l-yellow-500 px-2">
                  <i class="fa-solid fa-location-dot "></i>
                  <span> Location</span>
                </div>
                <div className="w-full text-gray-200 font-normal text-base">
                  Weija Block-Factory<br></br>
                  Along Accra Institute of Technology(AIT) Road
                </div>
              </div>
            </div>

            <div>
              <div className="w-full text-xl text-blue-400 my-4 font-bold text-center">
                <div className="w-full border-l-4 border-l-yellow-500 px-2">
                  <i class="fa-sharp fa-solid fa-clock"></i>
                  <span> Service Time</span>
                </div>
                <div className="w-full text-gray-200 font-normal text-base ">
                  Sunday Service - 8:00am to 12:00am
                </div>
              </div>
            </div>

            <div>
              <div className="w-full text-xl text-blue-400 my-4 font-bold text-center">
                <div className="w-full border-l-4 border-l-yellow-500 px-2">
                  <i class="fa-solid fa-messages"></i>
                  <span> Get in touch</span>
                </div>
                <div className="w-full text-gray-200 font-normal text-base ">
                  <span className="text-yellow-500">
                    <i class="fa-solid fa-envelope  pr-2"></i>
                  </span>
                  reachheavenchurch26@gmail.com<br></br>
                  <span className="text-yellow-500">
                    <i class="fa-solid fa-phone  pr-2"></i>
                  </span>
                  054 - 145 - 9526
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-2 h">
        <Map />
      </div>
    </footer>
  );
}

export default Footer;
