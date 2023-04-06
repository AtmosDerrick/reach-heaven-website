import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 mx-2 md:mt-0">
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
      <div className="w-full text-base text-gray-800 py-4">
        <h2 className="text-left text-2xl font-serif font-semibold text-blue-700 uppercase border-l-4 pl-4 border-l-yellow-500">
          About
        </h2>

        <p>
          Welcome to Reach Heaven Church International! We are a community of
          believers who gather together to worship Jesus Christ, our Lord and
          Savior. Our mission is to spread the love of God to all people, and we
          believe that everyone is welcome in Reach Heaven Church Int.,
          regardless of their background or beliefs. At Reach Heaven, we offer a
          variety of programs and services designed to help you grow in your
          faith and deepen your relationship with God.<br></br> We have Sunday
          worship services, Bible study groups, youth and children's ministries,
          and various outreach programs to serve our community. Reach Heaven
          Church Int. is committed to providing a warm and welcoming atmosphere
          for everyone who walks through our doors. We believe that the church
          is not just a building, but a community of people who come together to
          support and encourage one another in their faith journeys. Whether you
          are a lifelong Christian or are just starting to explore your faith,
          we invite you to join us in worship and fellowship. Our hope is that
          you will find a home in our church and that your relationship with God
          will be strengthened through your time here. Thank you for visiting
          our website, and we hope to see you soon!
        </p>
        <div>
          <Link to="/about">
            <button className="bg-blue-500 shadow-lg text-lg text-center text-white py-2 px-8 font-medium rounded-full mt-4 hover:opacity-70 hover:shadow-md hover:transition-all">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
