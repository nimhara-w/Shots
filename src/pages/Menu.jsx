import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { hotcoffeeDrinks } from "../../constants/index.js";

const MenuItem = ({ name, price }) => (
  <div className="mb-4 text-white flex items-baseline" style={{ gap: "5px" }}>
    <h3 className="text-sm font-base">{name}</h3>
    <p className="font-bold text-xs whitespace-nowrap">{price}</p>
  </div>
);

const Menu = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-soft-black py-16 px-5">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-8xl text-gradient font-gothic ml-1 mt-10 mb-8">
            Menu
          </h1>
          <h2 className="text-6xl text-gradient font-base ml-1 mb-8">
            Hot Coffee
          </h2>
          <div className="grid md:grid-cols-2 gap-x-2 gap-y-1">
            {hotcoffeeDrinks.map((drink) => (
              <MenuItem
                key={drink.name}
                name={drink.name}
                price={drink.price}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Menu;
