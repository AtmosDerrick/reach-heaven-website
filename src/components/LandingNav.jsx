import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

function LandingNav() {
  const [menu, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div
      className={
        isScrolled
          ? "fixed z-50 w-full bg-gray-100  pt-2 shadow-md bg-opacity-60 backdrop-blur-sm "
          : "fixed z-50 w-full bg-gradient-to-r from-sky-600 via-sky-900 to-sky-900 pt-2 shadow-md "
      }>
      <nav
        className={
          isScrolled
            ? "text-sky-600 flex justify-between w-full px-2 xl:px-0 xl:w-3/4 xl:mx-auto "
            : "text-white flex justify-between w-full px-2 xl:px-0 xl:w-3/4 xl:mx-auto "
        }>
        <div className="py-2 flex justify-start w-full lg:w-3/4 items-center ">
          <div>
            <img
              src="./images/RHCI_logo.png"
              alt="Reach Heaven Church Logo"
              className="w-8 md:w-10 lg:w-16"
            />
          </div>
          <div className="font-sans font-semibold md:font-bold text-lg md:text-3xl py-4 ml-4  ">
            RHCI
          </div>
        </div>

        <div className="text-base font-bold w-full py-4">
          <ul className="flex justify-evenly">
            <Link to="/">
              <li className="mx-4 hidden lg:block hover:border-b-2 px-1 py-1 transition-all duration-300">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="mx-4 hidden lg:block hover:border-b-2 px-1 py-1 transition-all duration-300">
                About
              </li>
            </Link>
            <Link to="/conferenceandevent">
              <li className="mx-4 hidden lg:block hover:border-b-2 px-1 py-1 transition-all duration-300">
                Event
              </li>
            </Link>
            <Link to="/ministry">
              <li className="mx-4 hidden lg:block hover:border-b-2 px-1 py-1 transition-all duration-300">
                Ministries
              </li>
            </Link>

            <Link to="/giving">
              <li className="mx-4 hidden lg:block hover:border-b-2 px-1 py-1 transition-all duration-300">
                Giving
              </li>
            </Link>
            <a href="#footer">
              <li className="mx-4 hidden lg:block hover:border-b-2 px-1 py-1 transition-all duration-300">
                <div
                  className={
                    isScrolled
                      ? "bg-gradient-to-r from-sky-600 via-sky-900 to-sky-900 p-2 w-full text-white"
                      : ""
                  }>
                  Contact Us
                </div>
              </li>
            </a>
            <div className="text-2xl  lg:hidden " onClick={toggleMenu}>
              <i class="fa-solid fa-bars "></i>
            </div>
          </ul>
        </div>
      </nav>
      <div
        className={
          menu
            ? " transition-all duration-500 mt-4"
            : "mr-[-1000rem] transition-all duration-500"
        }>
        <Menu />
      </div>
    </div>
  );
}

export default LandingNav;
