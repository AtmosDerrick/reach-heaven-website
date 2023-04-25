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
    <div className="w-full mx-auto">
      <LandingNav />

      <div>
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
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item padding-40px"
          className="relative">
          <div className="w-full h-[33vh] md:h-[60vh] lg:h-[90vh]  ">
            <img src={land} alt="Reach heaven Church Int." className="w-full" />
          </div>
          <div className="w-full h-[33vh] md:h-[60vh] lg:h-[90vh]  ">
            <img src={land1} alt="Reach heaven Church Int." />
          </div>
          <div className="w-full h-[33vh] md:h-[60vh] lg:h-[90vh]  ">
            <img src={land3} alt="Reach heaven Church Int." />
          </div>
          <div className="w-full h-[33vh] md:h-[60vh] lg:h-[90vh]  ">
            <img src={land2} alt="Reach heaven Church Int." />
          </div>
          <div className="w-full h-[33vh] md:h-[60vh] lg:h-[90vh] mx-2 ">
            <img src={land4} alt="Reach heaven Church Int." />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default NewLanding;
