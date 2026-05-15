import React, { useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import coffeeImg from "../assets/slider/coffee.jpg";
import parlorImg from "../assets/slider/parlor.jpg";
import privateImg from "../assets/slider/private.jpg";

import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Circle } from "lucide-react";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });
    const paraSplit = SplitText.create("#about .sub-content p", {
      type: "words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    scrollTimeline.from(titleSplit.words, {
      opacity: 0,
      duration: 1,
      yPercent: 100,
      ease: "expo.out",
      stagger: 0.001,
    });
    scrollTimeline.from(paraSplit.words, {
      opacity: 0,
      duration: 1,
      yPercent: 100,
      ease: "expo.out",
      stagger: 0.001,
    });
  });

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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div
      id="about"
      className="bg-black flex flex-col md:flex-row items-center justify-center relative"
    >
      <div className="flex flex-col mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="font-base badge"> Best Coffee</p>
            <h2 className="text-4xl text-white text-gradient font-base ml-15 mt-5 mb-5">
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
          <div className="absolute bottom-7 left-0 right-0 flex gap-2.5 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="cursor-pointer"
              >
                <Circle size={10} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
