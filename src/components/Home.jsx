import React from "react";
import LandingPage from "./LandingPage";
import WelcomeMessage from "./WelcomeMessage";
import About from "./About";
import RecentService from "./RecentService";
import MissedChurch from "./MissedChurch";
import RandomPic from "./RandomPic";
import Footer from "./Footer";
import Watsupchat from "./Watsupchat";
import Copyright from "./Copyright";
import Event from "./Event";
import "../style/landingStyle.css";
import NewLanding from "./NewLanding";
import FounderMessage from "./FounderMessage";

function Home() {
  return (
    <div>
      {" "}
      <NewLanding />
      <div id="jesusloveyou">
        <Event />
        <WelcomeMessage />
      </div>
      <div className="w-full xl:w-3/4 mx-auto px-4 xl:px-0">
        <About />
        <RecentService />
      </div>
      <MissedChurch />
      <Watsupchat />
      <FounderMessage />
      <Footer />
      <Copyright />
    </div>
  );
}

export default Home;
