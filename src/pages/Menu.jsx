import React from "react";

import { hotcoffeeDrinks } from "../../constants/index.js";

const Menu = () => {
  return (
    <section
      id="brews"
      className="w-full min-h-screen flex items-center justify-center  bg-soft-black/90 md: py-16 px-5"
    >
      <div className="list">
        <div className="popular">
          <h2 className="text-6xl text-gradient font-gothic m-12 mb-8">
            Popular Brews
          </h2>

          <ul className="m-12 grid md:grid-cols-2 gap-2">
            {hotcoffeeDrinks.map(({ name, price }) => (
              <li
                key={name}
                className="ml-12 mb-4 m-px-4 flex items-start gap-4 flex-wrap md:gap-5 "
              >
                <div className="md:me-28">
                  <h3 className="text-3xl font-base text-white"> {name} </h3>
                  <p className="font-bold text-white"> {price} </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;
