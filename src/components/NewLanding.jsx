import React from "react";
import "../style/random.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { deviceType } from "react-device-detect";
import LandingNav from "./LandingNav";

//import images
import land from "../images/land.jpg";
import land2 from "../images/land2.jpg";
import land4 from "../images/land4.jpg";

import land1 from "../images/land1.jpg";
import land3 from "../images/land3.jpg";

function NewLanding() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  console.log(deviceType);
  return (
    <div className="w-full ">
      <div className="">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          slidesToSlide={deviceType !== "mobile" ? 1 : 1}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="transform 3000ms ease-in-out"
          transitionDuration={3000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item padding-40px"
          className="relative">
          <div className="pt-16 md:pt-12 md:py-0">
            <div className=" w-full   flex items-center justify-center h-[30vh] md:h-[80vh] absolute">
              <div className="flex justify-center">
                <div className=" z-50 text-white  text-base md:text-4xl lg:text-5xl font-bold drop-shadow-md  text-center ">
                  <p className="tracking-wide md:tracking-wider leading-relaxed drop-shadow-xl">
                    <span className="text-xl"> Welcome to</span> <br></br>{" "}
                    <span className="uppercase">Reach Heaven Church Int.</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[40vh] md:h-[80vh] lg:h-[100vh] absolute w-full z-40 bg-black bg-opacity-75"></div>
            <div className="w-full relative  object-cover   md:h-[80vh] lg:h-[100vh] rounded-full ">
              <img src={land} alt="MMRA Images" className="w-full" />
            </div>
          </div>

          <div className="pt-16 md:pt-12 md:py-0">
            <div className=" w-full    flex items-center justify-center h-[30vh] md:h-[80vh] absolute">
              <div className="flex justify-center">
                <div className=" z-50 text-white  text-base md:text-4xl lg:text-5xl font-bold drop-shadow-md  text-center px-4 lg:px-0 ">
                  <p className="tracking-wide md:tracking-wider leading-relaxed">
                    The Land Of Possibilities
                  </p>
                  <hr></hr>
                  <p className="text-xs lg:text-base mt-4">
                    "But Jesus looked at them and said, 'With man this is
                    impossible, but with God all things are possible."<br></br>
                    Matthew 19:26 (ESV)
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[40vh] md:h-[80vh] lg:h-[100vh] absolute w-full z-40 bg-black bg-opacity-75"></div>
            <div className="w-full relative  object-cover   md:h-[80vh] lg:h-[100vh] rounded-full ">
              <img src={land1} alt="MMRA Images" className="w-full" />
            </div>
          </div>

          <div className="pt-16 md:pt-12 md:py-0">
            <div className=" w-full    flex items-center justify-center h-[30vh] md:h-[80vh] absolute">
              <div className="flex justify-center ">
                <div className=" z-50 text-white  text-base md:text-4xl lg:text-5xl font-bold drop-shadow-md  text-center px-4 lg:px-0">
                  <p className="tracking-wide md:tracking-wider leading-relaxed">
                    The Land Of Possibilities
                  </p>
                  <hr></hr>
                  <p className="text-xs lg:text-base mt-4">
                    "But Jesus looked at them and said, 'With man this is
                    impossible, but with God all things are possible."<br></br>
                    Matthew 19:26 (ESV)
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[40vh] md:h-[80vh] lg:h-[100vh] absolute w-full z-40 bg-black bg-opacity-75"></div>
            <div className="w-full relative  object-cover   md:h-[80vh] lg:h-[100vh] rounded-full ">
              <img src={land4} alt="MMRA Images" className="w-full" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default NewLanding;
