import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Brews from "./components/Brews.jsx";
import About from "./components/About.jsx";
import Reviews from "./components/Reviews.jsx";
import SignUp from "./components/SignUp.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
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

export default App;
