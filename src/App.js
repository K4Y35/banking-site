import "./App.css";
import Articles from "./Components/Articles";
import Features from "./Components/Features";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Features />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
