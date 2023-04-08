import React from "react";
import "../style/random.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { deviceType } from "react-device-detect";
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
          <img
            src="./images/randomPic/rrrr/1.jpg"
            alt="Reach heaven Church Int."
          />
        </div>
        <div className="w-full h-[15rem] mx-2 ">
          <img
            src="./images/randomPic/rrrr/2.jpg"
            alt="Reach heaven Church Int."
          />
        </div>

        <div className="w-full h-[15rem] mx-2">
          <img
            src="./images/randomPic/rrrr/4.jpg"
            alt="Reach heaven Church Int."
          />
        </div>

        <div className="w-full h-[15rem] mx-2 ">
          <img
            src="./images/randomPic/rrrr/6.jpg"
            alt="Reach heaven Church Int."
          />
        </div>

        <div className="w-full h-[20rem] b ">
          <img
            src="./images/randomPic/rrrr/9.jpg"
            alt="Reach heaven Church Int."
          />
        </div>
        <div className="w-full h-[15rem] mx-2 ">
          <img
            src="./images/randomPic/rrrr/10.jpg"
            alt="Reach heaven Church Int."
          />
        </div>

        <div className="w-full h-[15rem] mx-2 ">
          <img
            src="./images/randomPic/rrrr/11.jpg"
            alt="Reach heaven Church Int."
          />
        </div>
        <div className="w-full h-[15rem] mx-2 ">
          <img
            src="./images/randomPic/rrrr/13.jpg"
            alt="Reach heaven Church Int."
          />
        </div>
        <div className="w-full h-[15rem] mx-2 ">
          <img
            src="./images/randomPic/rrrr/15.jpg"
            alt="Reach heaven Church Int."
          />
        </div>
        <div className="w-full h-[15rem] mx-2 ">
          <img
            src="./images/randomPic/rrrr/16.jpg"
            alt="Reach heaven Church Int."
          />
        </div>
      </Carousel>
    </div>
  );
}

export default RandomPic;
