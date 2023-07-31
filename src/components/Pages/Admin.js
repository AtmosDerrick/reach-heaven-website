import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth";
import Footer from "../Footer";
import EventAndAnouncement from "../Admin/EventAndAnouncement";
import SermonAchive from "./SermonAchive";
import Membership from "../Admin/Membership";

function Admin() {
  const { currentUser, logOut } = useContext(AuthContext);
  const [actionType, setActionType] = useState("event");

  const [activeEvent, setActiveEvent] = useState(false);
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const action = (type) => {
    switch (type) {
      case "event":
        setActionType("event");
        break;
      case "sermon":
        setActionType("sermon");
        break;
      case "membership":
        setActionType("membership");
    }
  };

  return (
    <div>
      <div className="pt-24 ">
        <div className="w-3/4 mx-auto ">
          <div className=" mt-4 px-4 flex gap-2">
            <button
              className="w-full text-center hover:opacity-60 bg-sky-100 py-2 px-2 text-sky-800 font-semibold  text-xl mt-4"
              onClick={() => {
                action("event");
              }}>
              Events and Announcements
            </button>
            <button
              className="w-full text-center hover:opacity-60 bg-sky-100 py-2 px-2 text-sky-800 font-semibold  text-xl mt-4"
              onClick={() => {
                action("sermon");
              }}>
              Sermon Achieve
            </button>

            <button
              className="w-full text-center hover:opacity-60 bg-sky-100 py-2 px-2 text-sky-800 font-semibold  text-xl mt-4"
              onClick={() => {
                action("membership");
              }}>
              Membership
            </button>
          </div>
        </div>
        <div className="w-full h-[70vh] mb-12 overflow-visible">
          {actionType === "event" ? (
            <EventAndAnouncement />
          ) : actionType === "sermon" ? (
            <SermonAchive />
          ) : actionType === "membership" ? (
            <Membership />
          ) : (
            ""
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Admin;
