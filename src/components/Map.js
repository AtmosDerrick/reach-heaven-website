import React from "react";

function Map() {
  return (
    <div className="w-full h-full mt-4">
      <iframe
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Reach%20Heaven%20Ministry%20international&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        className="w-full h-[20rem]"
      ></iframe>
    </div>
  );
}

export default Map;
