import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Brews from "./components/Brews.jsx";

const App = () => {
  return (
    <main className="main-bg relative">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Brews />
      </div>
    </main>
  );
};

export default App;
