import React, { useState } from "react";

import coffeeImg from "../assets/slider/coffee.jpg";
import parlorImg from "../assets/slider/parlor.jpg";
import privateImg from "../assets/slider/private.jpg";

import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

const About = () => {
  const slides = [
    { img: coffeeImg, title: "Best Coffee" },
    { img: parlorImg, title: "Our Parlor" },
    { img: privateImg, title: "Private Collection" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div
      id="about"
      className="bg-black flex flex-col md:flex-row items-center justify-center relative"
    >
      <div className="className: mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="font-base badge"> Best Coffee</p>
            <h2 className="text-4xl text-gradient font-base ml-15 mt-5 mb-5">
              For your eerie coffee experience
              <span className="text-white">-</span> From bean to brew
            </h2>
          </div>
          <div className="sub-content">
            <p>
              We trace every bean back to the hands that grew it, the soil that
              shaped it, and the roast that brought it to life. This is coffee
              without compromise — distinctive, complex, and worth slowing down
              for.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[500px] h-[400px] flex w-full m-auto mr-30 py-16 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        >
          {/* left arrow */}
          <div className="hidden group-hover:block absolute top[50%]-translate-x-0 translate-y-[250%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <ChevronLeft onClick={prevSlide} size={30} />
          </div>
          {/* right arrow */}
          <div className="hidden group-hover:block absolute top[50%]-translate-x-0 translate-y-[250%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <ChevronRight onClick={nextSlide} size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
