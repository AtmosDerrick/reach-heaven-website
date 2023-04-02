import React from "react";
import Map from "./Map";
import Form from "./Form";

function Footer() {
  return (
    <footer className="w-full h-[80vh] bg-gray-900 mt-4 ">
      <div className="w-3/4 mx-auto absolute ">
        <img
          src="./images/world-map.png"
          className="w-1/2 opacity-80 mx-auto "
        />
      </div>

      <div className="w-3/4 mx-auto text-3xl text-white relative">
        <div>
          <ul className="flex justify-center pt-4 text-lg tracking-4 font-medium">
            <li className="mx-4">About</li>
            <li className="mx-4">Leadership</li>
            <li className="mx-4">Mission</li>
            <li className="mx-4">Ministries</li>
            <li className="mx-4">Services</li>
          </ul>
        </div>
        <div className="grid grid-cols-3 mt-4">
          <div className="w-full">
            <div className="text-base">Follow us on social media</div>
            <ul className="flex justify-left pt-4">
              <li className="mx-4 text-yellow-500">
                <i class="fa-brands fa-facebook"></i>
              </li>
              <li className="mx-4 text-yellow-500">
                <i class="fa-brands fa-instagram"></i>
              </li>
              <li className="mx-4 text-yellow-500">
                <i class="fa-brands fa-youtube"></i>
              </li>
            </ul>

            <div className="w-full flex between text-lg  my-4">
              <div className="w-1/4">
                <i class="fa-solid fa-house-chimney "></i>
              </div>
              <div className="w-full">
                Sunt velit incididunt reprehenderit dolore sit elit sint cillum
                reprehenderit.
              </div>
            </div>

            <div className="w-full flex between text-lg  my-4">
              <div className="w-1/4">
                <i class="fa-solid fa-location-dot "></i>
              </div>
              <div className="w-full">
                Sunt velit incididunt reprehenderit dolore sit elit sint cillum
                reprehenderit.
              </div>
            </div>

            <div className="w-full flex between text-lg  my-4">
              <div className="w-1/4">
                <i class="fa-sharp fa-solid fa-phone "></i>
              </div>
              <div className="w-full">
                Sunt velit incididunt reprehenderit dolore sit elit sint cillum
                reprehenderit.
              </div>
            </div>
          </div>
          <div className="mx-4 h">
            <Map />
          </div>
          <diV className="form">
            <Form />
          </diV>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
