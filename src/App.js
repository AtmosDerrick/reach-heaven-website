import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutPage from "./components/Pages/AboutPage";
import Ministry from "./components/Pages/Ministry";
import Conference from "./components/Pages/Conference";
import Giving from "./components/Pages/Giving";
import LandingPage from "./components/LandingPage";
import LandingNav from "./components/LandingNav";

function App() {
  return (
    <div className="w-full bg-blue-50">
      <BrowserRouter>
        <LandingNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ministry" element={<Ministry />} />
          <Route path="/conferenceandevent" element={<Conference />} />
          <Route path="/giving" element={<Giving />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
