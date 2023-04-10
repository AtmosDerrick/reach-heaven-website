import React from "react";
import "../style/random.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { deviceType } from "react-device-detect";

//import images
import pic1 from "../images/randomPic/pic1.jpg";
import pic2 from "../images/randomPic/pic2.jpg";
import pic3 from "../images/randomPic/pic3.jpg";

import pic4 from "../images/randomPic/pic4.JPG";

import pic5 from "../images/randomPic/pic5.JPG";

import pic6 from "../images/randomPic/pic6.JPG";
import pic7 from "../images/randomPic/pic7.JPG";

import pic8 from "../images/randomPic/pic8.JPG";

import pic9 from "../images/randomPic/pic9.JPG";
import pic10 from "../images/randomPic/pic10.JPG";

function RandomPic() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  console.log(deviceType);
  return (
    <div className="w-full mx-auto">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        slidesToSlide={3}
        infinite={true}
        autoPlay={deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="transform 1000ms ease-in-out"
        transitionDuration={1000}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item padding-40px">
        <div className="w-full h-[15rem]  ">
          <img src={pic1} alt="Reach heaven Church Int." />
        </div>
        <div className="w-full h-[15rem] mx-2 ">
          <img src={pic2} alt="Reach heaven Church Int." />
        </div>

        <div className="w-full h-[15rem] mx-2">
          <img src={pic3} alt="Reach heaven Church Int." />
        </div>

        <div className="w-full h-[15rem] mx-2 ">
          <img src={pic4} alt="Reach heaven Church Int." />
        </div>

        <div className="w-full h-[20rem] b ">
          <img src={pic5} alt="Reach heaven Church Int." />
        </div>
        <div className="w-full h-[15rem] mx-2 ">
          <img src={pic6} alt="Reach heaven Church Int." />
        </div>

        <div className="w-full h-[15rem] mx-2 ">
          <img src={pic7} alt="Reach heaven Church Int." />
        </div>
        <div className="w-full h-[15rem] mx-2 ">
          <img src={pic8} alt="Reach heaven Church Int." />
        </div>
        <div className="w-full h-[15rem] mx-2 ">
          <img ssrc={pic9} alt="Reach heaven Church Int." />
        </div>
        <div className="w-full h-[15rem] mx-2 ">
          <img src={pic10} alt="Reach heaven Church Int." />
        </div>
      </Carousel>
    </div>
  );
}

export default RandomPic;
