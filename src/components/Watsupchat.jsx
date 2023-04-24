import React from "react";
import "../style/whatsup.css";

function Watsupchat() {
  return (
    <div className="bg-green-500  ">
      <a
        href="https://wa.me/+233591459526"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer">
        {" "}
        <span className="text-white">
          <i class="fa-brands fa-whatsapp pr-4"></i>
        </span>
        <span className="text-lg text-white drop-shadow-lg font-medium">
          Chat with us on WhatsApp
        </span>
      </a>
    </div>
  );
}

export default Watsupchat;
