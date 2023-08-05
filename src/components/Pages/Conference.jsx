import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Copyright from "../Copyright";
import "../../style/landingStyle.css";
import { database } from "../../Firebase";
import { ref, onValue } from "firebase/database";
function Conference() {
  const [eventData, setEventData] = useState([]);
  useEffect(() => {
    onValue(ref(database), (snapshot) => {
      const data = snapshot.val();

      if (data !== null) {
        const getEventsData = Object.values(data.events);

        setEventData(getEventsData);
      }
    });
  }, []);
  return (
    <div id="jesusloveyou" className=",">
      <div className=" w-full pt-24  bg-gradient-to-r from-cyan-500 to-blue-500 ">
        <div className="w-full px-2 xl:px-0 xl:w-3/4 mx-auto py-4 text-base  md:text-xl uppercase  flex items-center font-sans font-bold text-white ">
          <div className="">Events and Conference</div>
        </div>
      </div>

      <div>
        {eventData ? (
          <div className="xl:w-3/4 px-2 xl:px-0 xl:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 mr-2">
            {eventData.map((event) => (
              <div>
                <div className="w-full mx-2 xl:w-full xl:mx-auto  gap-4 mt-4">
                  <div className="flex justify-between">
                    <div className="text-center bg-blue-800 font-bold uppercase text-xl p-2 text-white h-[5rem] w-[5rem]">
                      {event.date}
                      <br></br>
                    </div>
                    <div className="flex justify-between w-full border-4 border-gray-900 ml-2 bg-gray-100 px-2 items-center">
                      <div className="text-base font-medium pl-2 text-black">
                        {event.activity}
                      </div>
                      <div className="text-gray-900 font-semibold uppercase">
                        <i class="fa-solid fa-clock"></i> |
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}

export default Conference;
