import React, { useState } from "react";
import { database } from "../../Firebase";
import { ref, update } from "firebase/database";
import { v4 as uuidv4, v5 as uuidv5 } from "uuid";
import { getDatabase, onValue } from "firebase/database";

function SermonAchive() {
  const [url, setUrl] = useState("");
  const uuid = uuidv4();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission
    // You can perform validation or further processing here
    console.log("Submitted URL:", url);
    const updates = {};
    updates["/sermon/" + uuid] = { uuid, url };

    update(ref(database), updates);
    // Add your logic here to handle the form submission (e.g., send data to the server).
    // For this example, we'll just log the values to the console.
    console.log({ url });

    // Reset the form
    setUrl("");
  };
  return (
    <div className="w-2/4 mt-12 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white py-8 shadow-md rounded px-8">
        <div className="mb-4">
          <label
            htmlFor="url"
            className="block text-gray-700 text-sm font-bold mb-2">
            YouTube URL
          </label>
          <input
            type="text"
            id="url"
            className="shadow appearance-none border rounded w-full py-2 h-20 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter YouTube URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SermonAchive;
