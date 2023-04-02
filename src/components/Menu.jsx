import React from "react";

function Menu() {
  return (
    <div className="text-white w-full mt-4  ">
      <div className="w-3/4 mx-auto flex justify-end relative ">
        <div className="absolute text-left mr-8 text-2xl bg-gradient-to-r from-cyan-500 to-blue-500 w-1/4 px-2 py-2  shadow-lg font-medium h-[50vh] z-20 leading-10 rounded-lg">
          <ul className="tracking-wider font-serif">
            <li className="py-4 shadow-lg px-4">Our Story</li>
            <li className="py-4 shadow-lg px-4">Mission</li>
            <li className="py-4 shadow-lg px-4">Conference and Event</li>
            <li className="py-4 shadow-lg px-4">Ministries</li>
            <li className="py-4 shadow-lg px-4">Sermons</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
