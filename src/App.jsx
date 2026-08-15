import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Brews from "./components/Brews.jsx";
import About from "./components/About.jsx";
import Reviews from "./components/Reviews.jsx";
import SignUp from "./components/SignUp.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";

const Home = () => {
  return (
    <main className="main-bg relative">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Brews />
        <About />
        <Reviews />
        <SignUp />
        <Footer />
      </div>
    </main>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* <-- add this */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
