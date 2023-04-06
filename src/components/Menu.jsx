import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="text-white w-full mt-4  ">
      <div className="w-3/4 mx-auto flex justify-end relative ">
        <div className="absolute text-left mr-8 text-2xl bg-gray-800 w-full md:w-3/4  lg:w-2/4 px-2 py-2  shadow-lg font-medium h-auto z-20 leading-10 rounded-lg">
          <ul className="tracking-wider font-serif">
            <Link to="/">
              <li className="py-4 shadow-lg px-4 block lg:hidden">Home</li>
            </Link>
            <Link to="/about">
              <li className="py-4 shadow-lg px-4 block lg:hidden">
                Who we are
              </li>
            </Link>
            <Link to="/about">
              <li className="py-4 shadow-lg px-4">Our Story</li>
            </Link>
            <Link to="/conferenceandevent">
              <li className="py-4 shadow-lg px-4">Conference and Event</li>
            </Link>
            <Link to="/ministry">
              <li className="py-4 shadow-lg px-4">Ministries</li>
            </Link>
            <a href="#footer">
              <li className="py-4 shadow-lg px-4 block lg:hidden">Contact</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
