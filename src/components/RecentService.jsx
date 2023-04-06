import React, { useState } from "react";

function RecentService() {
  const style = {
    recentServices: "w-full  bg-gray-100 overflow-hidden mx-2 mb-4 md:mb-0",
  };

  const [moreVideos, setMoreVideos] = useState(false);
  return (
    <div className="mt-4 ">
      <h2 className="text-left text-2xl font-serif font-semibold text-blue-700 uppercase border-l-4 pl-4 border-l-yellow-500">
        Recent Services
      </h2>
      <div className="text-left text-lg text-gray-800 font-medium italic">
        Experiencing God's Presence: A Recap of our Recent Service
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-2 gap-2">
        <div className={style.recentServices} data-aos="flip-left">
          <iframe
            width="350"
            height="190"
            src="https://www.youtube.com/embed/1bY-mxieMkg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
          <div></div>
        </div>
        <div className={style.recentServices} data-aos="flip-left">
          <iframe
            width="350"
            height="190"
            src="https://www.youtube.com/embed/9k2HA92nLBM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        <div className={style.recentServices} data-aos="flip-left">
          <iframe
            width="350"
            height="190"
            src="https://www.youtube.com/embed/DyCVU-iCkBU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        <div className={style.recentServices} data-aos="flip-left">
          <iframe
            width="350"
            height="190"
            src="https://www.youtube.com/embed/1QtPhZ93jFk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>

      {moreVideos ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-2 gap-2">
          <div className={style.recentServices} data-aos="flip-left">
            <iframe
              width="350"
              height="190"
              src="https://www.youtube.com/embed/JKYPppu6eKU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
          <div className={style.recentServices} data-aos="flip-left">
            <iframe
              width="350"
              height="190"
              src="https://www.youtube.com/embed/iRbh1gT_nF4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
          <div className={style.recentServices} data-aos="flip-left">
            <iframe
              width="350"
              height="190"
              src="https://www.youtube.com/embed/DyCVU-iCkBU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
          <div className={style.recentServices} data-aos="flip-left">
            <iframe
              width="350"
              height="190"
              src="https://www.youtube.com/embed/1QtPhZ93jFk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="w-full flex justify-center">
        <button
          onClick={() => {
            setMoreVideos(!moreVideos);
          }}
          className="bg-gray-900 shadow-lg text-lg text-center text-white  py-2 px-8 font-medium  my-2 hover:opacity-70 hover:shadow-md hover:transition-all uppercase ">
          {moreVideos ? <span>Less Videos</span> : <span>More Videos</span>}
        </button>
      </div>
    </div>
  );
}

export default RecentService;
