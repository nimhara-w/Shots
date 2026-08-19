import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {
  hotcoffeeDrinks,
  coldCoffeeDrinks,
  alcoholicCoffeeDrinks,
  snackMenu,
} from "../../constants/index.js";

import { useEffect } from "react";
import gsap from "gsap";

function MenuItem({ name, price }) {
  return (
    <div className="fade-text opactity-0 flex items-baseline">
      <span className="w-48 truncate">{name}</span>
      <span className="font-bold">{price}</span>
    </div>
  );
}

const Menu = () => {
  useEffect(() => {
    gsap.fromTo(
      ".fade-text",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
    );
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-soft-black py-16 px-5">
        <section className="max-w-5xl mx-auto">
          <h1 className="fade-text opactity-0 text-8xl text-gradient font-gothic justify-center flex mt-15 mb-4">
            Menu
          </h1>

          <div className="flex flex-col md:flex-row gap-16 items-center md:items-start">
            <section className="max-md:text-center">
              <h2 className="fade-text opactity-0 text-6xl text-gradient font-base ml-1 max-md:ml-0 max-md:flex max-md:justify-center mb-2">
                Hot Coffee
              </h2>
              <div className="grid md:grid-cols-[max-content_max-content] max-md:justify-items-center gap-x-6 gap-y-1">
                {hotcoffeeDrinks.map((drink) => (
                  <MenuItem
                    key={drink.name}
                    name={drink.name}
                    price={drink.price}
                  />
                ))}
              </div>
            </section>
            <section className="max-md:text-center">
              <h2 className="fade-text opactity-0 text-6xl text-gradient font-base ml-1 max-md:ml-0 mb-2">
                Alcoholic Coffee
              </h2>
              <div className="grid md:grid-cols-[max-content_max-content] max-md:justify-items-center gap-x-6 gap-y-1">
                {alcoholicCoffeeDrinks.map((drink) => (
                  <MenuItem
                    key={drink.name}
                    name={drink.name}
                    price={drink.price}
                  />
                ))}
              </div>
            </section>
          </div>

          <div className="flex flex-col md:flex-row mt-16 gap-16 items-center md:items-start">
            <section className="max-md:text-center">
              <h2 className="fade-text opactity-0 text-6xl text-gradient font-base ml-1 max-md:ml-0 mb-2">
                Cold Coffee
              </h2>
              <div className="grid md:grid-cols-[max-content_max-content] max-md:justify-items-center gap-x-6 gap-y-1">
                {coldCoffeeDrinks.map((drink) => (
                  <MenuItem
                    key={drink.name}
                    name={drink.name}
                    price={drink.price}
                  />
                ))}
              </div>
            </section>

            <section className="max-md:text-center">
              <h2 className="fade-text opactity-0 text-6xl text-gradient font-base ml-1 max-md:ml-0 mb-2">
                Snacks
              </h2>
              <div className="grid md:grid-cols-[max-content_max-content] max-md:justify-items-center gap-x-6 gap-y-1">
                {snackMenu.map((snack) => (
                  <MenuItem
                    key={snack.name}
                    name={snack.name}
                    price={snack.price}
                  />
                ))}
              </div>
            </section>
          </div>
        </section>
        <footer className="text-center mt-24 mb-8 opacity-40">
          <p className="text-sm tracking-widest uppercase font-gothic">
            &copy; Shots Coffee
          </p>
        </footer>
      </main>
      <Footer />
    </>
  );
};

export default Menu;
