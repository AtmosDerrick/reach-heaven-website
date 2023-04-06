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

function Home() {
  return (
    <div>
      <LandingPage />
      <WelcomeMessage />
      <div className="w-full xl:w-3/4 mx-auto px-4 xl:px-0">
        <About />
        <RecentService />
      </div>
      <MissedChurch />
      <RandomPic />
      <Watsupchat />

      <Footer />
      <Copyright />
    </div>
  );
}

export default Home;
