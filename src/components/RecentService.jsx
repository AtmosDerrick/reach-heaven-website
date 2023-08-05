import React, { useState, useEffect } from "react";
import { database } from "../Firebase";
import { ref, onValue } from "firebase/database";

function RecentService() {
  const [sermonData, setSermonData] = useState([]);
  const [totalSermon, setTotalSermon] = useState(4);

  useEffect(() => {
    onValue(ref(database), (snapshot) => {
      const data = snapshot.val();

      if (data !== null) {
        const getSermonData = Object.values(data.sermon);

        setSermonData(getSermonData);
      }
    });

    if (totalSermon >= 4) {
      const firstFourSermons = sermonData.slice(0);
    } else {
      const firstFourSermons = sermonData.slice(0, 4);
    }
  }, [totalSermon]);

  const style = {
    recentServices: "w-full  bg-gray-100 overflow-hidden mx-2 mb-4 md:mb-0",
  };

  const firstFourSermons = sermonData.slice(0, totalSermon);

  return (
    <div className="mt-4 ">
      <h2 className="text-left text-2xl font-serif font-semibold text-blue-700 uppercase border-l-4 pl-4 border-l-yellow-500">
        Recent Services
      </h2>
      <div className="text-left text-sm md:text-lg text-gray-800 font-medium italic">
        Experiencing God's Presence: A Recap of our Recent Service
      </div>
      <div>
        {sermonData ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-2 gap-2">
            {firstFourSermons.map((sermon) => (
              <div className={style.recentServices} data-aos="flip-left">
                <iframe
                  width="350"
                  height="190"
                  src={sermon.url}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div className="w-full flex justify-center">
        <button
          onClick={() => {
            if (totalSermon === 4) {
              setTotalSermon(9);
            } else {
              setTotalSermon(4);
            }
          }}
          className="bg-gray-900 shadow-lg text-lg text-center text-white  py-2 px-8 font-medium  my-2 hover:opacity-70 hover:shadow-md hover:transition-all uppercase ">
          <span>More Videos</span>
        </button>
      </div>
    </div>
  );
}

export default RecentService;
