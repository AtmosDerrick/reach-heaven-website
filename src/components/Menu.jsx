import React from "react";
import { Link } from "react-router-dom";

function Menu({ menu, setMenu }) {
  return (
    <div className="relative  bg-gray-900">
      {" "}
      <div className="text-white   ">
        <div className="w-5/6 mx-auto  relative  ">
          <div className="absolute text-left mr-0 text-base w-full  bg-gray-900 md:w-3/4  lg:w-2/4 px-2 py-2  shadow-lg font-medium  z-20 leading-10 ">
            <ul className=" font-serif tracking-wider">
              <Link to="/">
                <li
                  className="block lg:hidden py-2"
                  onClick={() => {
                    setMenu(false);
                  }}>
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li
                  className="block lg:hidden py-2"
                  onClick={() => {
                    setMenu(false);
                  }}>
                  About
                </li>
              </Link>
              <Link to="/conferenceandevent">
                <li
                  className="block lg:hidden py-2"
                  onClick={() => {
                    setMenu(false);
                  }}>
                  Event
                </li>
              </Link>
              <Link to="/ministry">
                <li
                  className="block lg:hidden py-2"
                  onClick={() => {
                    setMenu(false);
                  }}>
                  Ministries
                </li>
              </Link>

              <Link to="/giving">
                <li
                  className="block lg:hidden py-2"
                  onClick={() => {
                    setMenu(false);
                  }}>
                  Giving
                </li>
              </Link>
              <a href="#footer">
                <li
                  className="block lg:hidden py-2"
                  onClick={() => {
                    setMenu(false);
                  }}>
                  Contact
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
