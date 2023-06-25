import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="relative">
      {" "}
      <div className="text-white w-full mt-2  ">
        <div className="w-3/4 mx-auto flex justify-end relative ">
          <div className="absolute text-left mr-8 text-base bg-gray-800 w-full md:w-3/4  lg:w-2/4 px-2 py-2  shadow-lg font-medium h-auto z-20 leading-10 ">
            <ul className=" font-serif tracking-wider">
              <Link to="/">
                <li className="mx-2 block lg:hidden py-2">Home</li>
              </Link>
              <Link to="/about">
                <li className="mx-2 block lg:hidden py-2">About</li>
              </Link>
              <Link to="/conferenceandevent">
                <li className="mx-2 block lg:hidden py-2">Event</li>
              </Link>
              <Link to="/ministry">
                <li className="mx-2 block lg:hidden py-2">Ministries</li>
              </Link>

              <Link to="/giving">
                <li className="mx-2 block lg:hidden py-2">Giving</li>
              </Link>
              <a href="#footer">
                <li className="mx-2 block lg:hidden py-2">Contact</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
