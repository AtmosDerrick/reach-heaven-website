import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage";
import WelcomeMessage from "./components/WelcomeMessage";
import About from "./components/About";
import RecentService from "./components/RecentService";
import MissedChurch from "./components/MissedChurch";
import RandomPic from "./components/RandomPic";
import Footer from "./components/Footer";
import Watsupchat from "./components/Watsupchat";
import Copyright from "./components/Copyright";

function App() {
  return (
    <div className="w-full mx-auto bg-gray-50">
      
      <LandingPage />
      <WelcomeMessage />
      <div className="w-3/4 mx-auto">
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

export default App;
