import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 mx-2 md:mt-0">
      <div className="w-full  p-4 flex justify-center">
        <img
          src="./images/RHC-chapel.png"
          alt="reach heaven chapel"
          className="w-full md:w-3/4 mb-8 rounded-lg shadow-xl"
        />

        <img
          src="./images/RCH-inside.png"
          alt="reach heaven chapel"
          className="w-[13rem] md:w-[20rem] md:h-[20rem] ml-[-10rem] mt-24 shadow-xl rounded-lg "
        />
      </div>
      <div className="w-full text-base text-gray-800  mt-0 lg:mt-4">
        <h2 className="text-left text-2xl font-serif font-semibold text-blue-700 uppercase border-l-4 pl-4 border-l-yellow-500">
          Welcome
        </h2>

        <div className="text-justify text:sm lg:text-base">
          <p>
            We are so glad you have chosen to visit our church website. Our
            mission is to help people experience the love of Jesus and discover
            the reality of Heaven through authentic worship, practical teaching,
            and genuine community.
          </p>
          <p>
            As we welcome you to our church, we are reminded of the words of
            Jesus in Matthew 11:28, "Come to me, all you who are weary and
            burdened, and I will give you rest." At Reach Heaven Church
            International, we believe that Jesus offers the rest and hope that
            we need, and we invite you to come and experience His love for
            yourself.
          </p>

          <p>
            Thank you for choosing to visit our church website. We look forward
            to meeting you in person and worshiping together with you.
          </p>
        </div>
        <div>
          <Link to="/about">
            <button className="bg-blue-500 shadow-lg text-lg text-center text-white py-1 px-4 font-medium rounded-full mt-4 hover:opacity-70 hover:shadow-md hover:transition-all">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
