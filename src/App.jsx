import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Brews from "./components/Brews.jsx";
import About from "./components/About.jsx";

const App = () => {
  return (
    <main className="main-bg relative">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Brews />
        <About />
      </div>
    </main>
  );
};

export default App;
