import React from "react";

function Copyright() {
  return (
    <div className="w-full bg-white h-[5vh] py-2 flex justify-between">
      <div className="w-full px-4 xl:px-0 xl:w-3/4 mx-auto md:flex md:justify-between text-gray-900 font-medium">
        <div>
          {" "}
          <p className="text-sm md:text-base">
            &copy; Reach Heaven Church Internation - General Headquarters. All
            Rights Reserved
          </p>
        </div>
        <div className="text-gray-700 text-sm md:text-base">
          Develop by: AtmosTech
        </div>
      </div>
    </div>
  );
}

export default Copyright;
