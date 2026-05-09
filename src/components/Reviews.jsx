import SliderComponent from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = SliderComponent.default
  ? SliderComponent.default
  : SliderComponent;

import { Star } from "lucide-react";

import Isolde_Marsh from "../assets/reviewers/Isolde_Marsh.jpg";
import Dorian_Crowe from "../assets/reviewers/Dorian_Crowe.jpg";
import Morrigan_Vale from "../assets/reviewers/Morrigan_Vale.jpg";
import Alaric_Penn from "../assets/reviewers/Alaric_Penn.jpg";
import Seraphine_Du_Bois from "../assets/reviewers/Seraphine_Du_Bois.jpg";
import Evander_Locke from "../assets/reviewers/Evander_Locke.jpg";

/*Reviewer cards */
const reviewers = [
  {
    name: "Isolde Marsh",
    photo: Isolde_Marsh,
    stars: 5,
    review:
      "The candlelit atmosphere is intoxicating. My cortado arrived in a black ceramic skull cup and tasted of dark cherries and secrets. I have not left.",
  },
  {
    name: "Dorian Crowe",
    photo: Dorian_Crowe,
    stars: 4,
    review:
      "Velvet drapes, iron chandeliers, and a barista named Vesper who reads your aura before grinding your beans. A place that truly understands the soul.",
  },
  {
    name: "Morrigan Vale",
    photo: Morrigan_Vale,
    stars: 5,
    review:
      "Their lavender death-brew is a masterpiece of bitterness and bloom. The gargoyle above my table watched me the entire time. I respected it.",
  },
  {
    name: "Alaric Penn",
    photo: Alaric_Penn,
    stars: 3,
    review:
      "Pressed tin ceilings, wax-dripped candelabras, faint organ music — this is what a coffee shop should feel like at 2am on a Tuesday.",
  },
  {
    name: "Seraphine Du Bois",
    photo: Seraphine_Du_Bois,
    stars: 5,
    review:
      "I brought my copy of Poe and no one batted an eye. The espresso was transcendently bitter. The ambient ravens were a nice touch — real or taxidermy, unclear.",
  },
  {
    name: "Evander Locke",
    photo: Evander_Locke,
    stars: 4,
    review:
      "Found this place by following a crow at midnight. The cold brew is served in apothecary vials. Four stars only because I can never find the door again.",
  },
];

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div id="reviewers" className="bg-black py-16">
      <h2 className="text-4xl text-gradient font-gothic text-center mb-10">
        What Our Customers Say
      </h2>
      <div className="w-3/5 m-auto shadow-2xs">
        <div className="mt-12">
          <Slider {...settings}>
            {reviewers.map((reviewer, index) => (
              <div
                key={index}
                className="bg-smoky h-[450px] text-white rounded-xl"
              >
                <div
                  className="h-56 rounded-t-xl flex justify-center items-center relative overflow-hidden sepia-[.8] brightness-100 contrast-110"
                  style={{
                    backgroundImage: `url(${reviewer.photo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-smoky/75 backdrop-blur-sm" />
                  <img
                    src={reviewer.photo}
                    alt={reviewer.name}
                    className="h-40 w-40 rounded-full relative z-10 object-cover border-2 border-white/20 sepia-[.15] brightness-70"
                  />
                </div>

                <div className="flex flex-col items-center justify-between p-4 h-[194px]">
                  <p className="text-2xl font-base">{reviewer.name}</p>
                  <p className="text-sm font-base text-center">
                    {reviewer.review}
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={
                          i < reviewer.stars
                            ? "fill-white text-white"
                            : "text-gray-400"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
