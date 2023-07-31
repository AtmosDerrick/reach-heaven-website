import React, { useEffect, useState } from "react";
import { database } from "../../Firebase";
import { ref, update } from "firebase/database";
import { v4 as uuidv4, v5 as uuidv5 } from "uuid";
import { getDatabase, onValue } from "firebase/database";

function EventAndAnouncement() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [activity, setActivity] = useState("");
  const [getEvent, setGetEvent] = useState([]);
  const [getEventPrev, setGetEventPrev] = useState([]);
  const [eventActive, setEventActive] = useState(false);
  const [pageReady, setPageReady] = useState(false);
  const uuid = uuidv4();

  useEffect(() => {
    onValue(ref(database), (snapshot) => {
      const data = snapshot.val();

      if (data !== null) {
        const getNewsData = Object.values(data.events);
        const getPrevNewsData = Object.values(data.events);

        setGetEvent(getNewsData);
        setGetEventPrev(getPrevNewsData);

        setPageReady(true);
      }
    });
  }, []);

  const postData = {
    uuid,

    date,
    time,
    activity,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updates = {};
    updates["/events/" + uuid] = postData;

    update(ref(database), updates);
    // Add your logic here to handle the form submission (e.g., send data to the server).
    // For this example, we'll just log the values to the console.
    console.log({ date, time, activity });
  };

  console.log("lllll");
  return (
    <div className="w-3/4 mx-auto mt-4 p-4  ">
      {eventActive ? (
        <div className=" w-1/2 bg-yellow-400 mx-auto z-40">
          <div className="w-1/2 ml-[-100px]  h-auto absolute z-30">
            <div className="w-3/4 mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">Event Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mt-1 p-2 border rounded-md w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-gray-700">
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="mt-1 p-2 border rounded-md w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="activity"
                    className="block text-sm font-medium text-gray-700">
                    Activity
                  </label>
                  <input
                    type="text"
                    id="activity"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                    className="mt-1 p-2 border rounded-md w-full"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {getEvent.map((event) => (
        <div className="flex justify-between py-2 text-lg border-b-2  ">
          <div className="flex justify-between gap-4 w-1/2">
            <div className="w-full">{event.date}</div>
            <div className="w-full">{event.time}</div>
          </div>
          <div className="w-full text-right">{event.activity}</div>
          <div className="flex gap-4 ml-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </div>
        </div>
      ))}
      <div className="flex justify-end mt-4 gap-8">
        <button
          className="bg-sky-700 py-2 px-4 text-lg font-medium text-white hover:opacity-60 flex gap-4"
          onClick={() => {
            setEventActive(!eventActive);
          }}>
          Create Event{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default EventAndAnouncement;
