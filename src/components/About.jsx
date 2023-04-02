import React from "react";

function About() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="w-full  p-4 flex justify-center">
        <img
          src="./images/RHC-chapel.png"
          alt="reach heaven chapel"
          className="w-3/4 mb-8 rounded-lg shadow-xl"
        />

        <img
          src="./images/RCH-inside.png"
          alt="reach heaven chapel"
          className="w-[20rem] h-[20rem] ml-[-10rem] mt-24 shadow-xl rounded-lg "
        />
      </div>
      <div className="w-full text-lg text-gray-800 py-4 leading-8">
        <h2 className="text-left text-2xl font-serif font-semibold text-blue-700 uppercase border-l-4 pl-4 border-l-yellow-500">
          About
        </h2>
        <div className="text-left text-lg text-gray-800 font-medium italic">
          Aute nostrud amet non irure incididunt anim pariatur aute ex qui enim
          laboris.
        </div>
        <p>
          Ex consectetur ex veniam enim. Veniam sint ex nisi pariatur et ad
          irure excepteur sint nostrud adipisicing adipisicing. Id veniam veniam
          ut magna sit dolor exercitation laborum consectetur. Esse ullamco anim
          enim nulla enim anim. Velit ea irure irure veniam reprehenderit irure
          in nulla qui ullamco nostrud Lorem cupidatat. Laboris eu commodo
          exercitation aliqua tempor deserunt ex sunt eu laborum. Fugiat
          deserunt ut sint veniam amet laboris id non. Eu enim sint fugiat et.
          Laborum do esse velit consequat minim esse ut. Ipsum in mollit nulla
          in commodo dolore occaecat anim dolor id ullamco est dolor irure.
          Voluptate elit sint reprehenderit labore mollit occaecat.
          Reprehenderit aute dolore et tempor do. Deserunt enim magna excepteur
          ex quis nulla non consectetur aute ad aliqua incididunt sint dolor.
          sint reprehenderit labore mollit
        </p>
        <div>
          <button className="bg-blue-500 shadow-lg text-lg text-center text-white py-2 px-8 font-medium rounded-full mt-4 hover:opacity-70 hover:shadow-md hover:transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
