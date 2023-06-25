import React from "react";

//import image
import founder1 from "../images/founder2.jpg";

function FounderMessage() {
  return (
    <div>
      <div
        className="w-full text-gray-50 bg-gradient-to-r from-sky-600 via-sky-900 to-sky-900 mx-auto  mt-4 py-2 text-xs lg:text-base  "
        id="founder">
        <div className="xl:w-3/4 mx-auto md:flex md:justify-between text-justify">
          <div className=" mx-2">
            <p>
              <h2 className="text-left text-2xl font-serif font-semibold text-white uppercase border-l-4 pl-4 mb-2 border-l-yellow-500">
                Message From Our Founder
              </h2>
              <p>
                {" "}
                Dear beloved friends and fellow believers,<br></br>I am honored
                and humbled to address you today as the founder of Reach Heaven
                Church International. When I started this church, I did so with
                a deep sense of calling and purpose, and a burning desire to
                create a community of faith that would be a beacon of hope and
                love to all who came through our doors.
              </p>
              <p>
                {" "}
                Over the years, I have watched with great pride as our community
                has grown and flourished, and as we have come together to
                worship, study God's word, and serve our community. We have
                faced many challenges and obstacles along the way, but through
                it all, we have remained steadfast in our commitment to God and
                to one another.
              </p>
              <p>
                As we look to the future, I am filled with hope and anticipation
                for what God has in store for us. I believe that we are on the
                cusp of a new season of growth and expansion, and that He has
                great things in store for us as we continue to seek His will and
                follow His leading.
              </p>
              <p>
                {" "}
                To all of you who have been a part of this journey, I want to
                express my deepest gratitude and appreciation. Your
                faithfulness, dedication, and love have been an inspiration to
                me and to everyone who has been touched by our ministry. I am
                honored to call you my brothers and sisters in Christ, and I
                look forward to continuing to walk alongside you as we fulfill
                our mission and vision.
              </p>
              <p>
                May God bless you abundantly, and may His love and grace be
                evident in every aspect of your life. With love and gratitude -
                <span className="text-yellow-500 font-medium italic">
                  Ps. Vera Duah
                </span>
              </p>
            </p>
          </div>

          <div className="ml-4 px-2 mt-2 lg:mt-0">
            <img
              src={founder1}
              alt="Reach Heaven Founder"
              className="w-[90rem] rounded-full drop-shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FounderMessage;
