import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutPage from "./components/Pages/AboutPage";
import Ministry from "./components/Pages/Ministry";
import Conference from "./components/Pages/Conference";
import Giving from "./components/Pages/Giving";
import LandingPage from "./components/LandingPage";
import LandingNav from "./components/LandingNav";
import SignIn from "./components/Pages/Sigin";
import { AuthProvider } from "./context/Auth";
import PrivateRoute from "./components/PrivateRoute";
import Admin from "./components/Pages/Admin";

function App() {
  return (
    <AuthProvider>
      <div className="w-full bg-blue-50">
        <BrowserRouter>
          <LandingNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/ministry" element={<Ministry />} />
            <Route path="/conferenceandevent" element={<Conference />} />
            <Route path="/giving" element={<Giving />} />
            <Route path="/signin" element={<SignIn />} />
            <Route exact path="/admin" element={<Admin />} />

            <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="/" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
