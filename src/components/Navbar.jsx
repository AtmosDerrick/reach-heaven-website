import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="w-full  bg-gradient-to-r from-sky-600 via-sky-900 to-sky-900">
      <nav className="relative text-white flex justify-between w-full px-2 xl:px-0 xl:w-3/4 xl:mx-auto ">
        <div className="py-2 flex justify-start w-3/4">
          <div>
            <img
              src="./images/RHCI_logo.png"
              alt="Reach Heaven Church Logo"
              className="w-16"
            />
          </div>
          <div className="text-white font-sans font-semibold text-xl py-4 ml-4  ">
            RHCI
          </div>
        </div>

        <div className="text-base font-medium w-full py-4 mx-2">
          <ul className="flex justify-evenly">
            <Link to="/">
              <li className="mx-4 hidden lg:block">Home</li>
            </Link>
            <Link to="/about">
              <li className="mx-4 hidden lg:block">About</li>
            </Link>
            <Link to="/conferenceandevent">
              <li className="mx-4 hidden lg:block">Event</li>
            </Link>
            <Link to="/ministry">
              <li className="mx-4 hidden lg:block">Ministries</li>
            </Link>

            <Link to="/giving">
              <li className="mx-4 hidden lg:block">Giving</li>
            </Link>
            <a href="#footer">
              <li className="mx-4 hidden lg:block ">
                <div className="border-2 border-gray-50 p-2 text-center">
                  Contact Us
                </div>
              </li>
            </a>
            <div
              className=" text-xl text-gray-100 lg:hidden"
              onClick={toggleMenu}>
              <i class="fa-solid fa-bars fa-2x"></i>
            </div>
          </ul>
        </div>
      </nav>
      {menu ? (
        <div>
          <Menu />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Navbar;
