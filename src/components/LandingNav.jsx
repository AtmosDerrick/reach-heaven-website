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
          ? "fixed z-50 w-full bg-gray-100  pt-2 shadow-md h-[10vh] "
          : "fixed z-50 w-full bg-gradient-to-r from-sky-600 via-sky-900 to-sky-900 pt-2 shadow-md h-[10vh] "
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
              className="w-8 md:w-8 lg:w-16"
            />
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
            <div
              className="text-2xl  lg:hidden border-l-2 border-l-sky-600 pl-4 "
              onClick={toggleMenu}>
              {menu === true ? "X" : <i class="fa-solid fa-bars "></i>}
            </div>
          </ul>
        </div>
      </nav>
      <div className="w-full">
        <div
          className={
            menu
              ? "w-full mt-[0] transition-all duration-500 z-[-20]  "
              : "w-full mt-[-100rem] transition-all duration-1000"
          }>
          <Menu menu={menu} setMenu={setMenu} />
        </div>
      </div>
    </div>
  );
}

export default LandingNav;
