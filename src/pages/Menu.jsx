import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { hotcoffeeDrinks } from "../../constants/index.js";

function MenuItem({ name, price }) {
  return (
    <div className="flex items-baseline">
      <span className="w-48 truncate">{name}</span>
      <span className="font-bold">{price}</span>
    </div>
  );
}

const Menu = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-soft-black py-16 px-5">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-8xl text-gradient font-gothic justify-center flex mt-15 mb-4">
            Menu
          </h1>
          <h2 className="text-6xl text-gradient font-base ml-1 mb-8">
            Hot Coffee
          </h2>
          <div className="grid md:grid-cols-[max-content_max-content] gap-x-6 gap-y-1">
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
