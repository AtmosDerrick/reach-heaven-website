import React, { useState } from "react";
import Menu from "./Menu";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="w-full">
      <div className="w-full h-[10vh] bg-gray-900 opacity-40 absolute "></div>

      <nav className="relative text-white w-3/4 mx-auto flex justify-between">
        <div className="py-2 flex justify-start w-full">
          <div>
            <img
              src="./images/RHCI_logo.png"
              alt="Reach Heaven Church Logo"
              className="w-16"
            />
          </div>
          <div className="text-white font-sans font-semibold text-xl py-4 ml-4  ">
            Reach Heaven Church Int.
          </div>
        </div>

        <div className="text-lg font-medium w-2/4 py-4">
          <ul className="flex justify-evenly">
            <li>Home</li>
            <li>Who we are</li>
            <li>Contact</li>
            <li>Giving</li>
            <div className=" text-xl text-blue-500" onClick={toggleMenu}>
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
