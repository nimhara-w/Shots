import SliderComponent from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = SliderComponent.default
  ? SliderComponent.default
  : SliderComponent;

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
    review:
      "The candlelit atmosphere is intoxicating. My cortado arrived in a black ceramic skull cup and tasted of dark cherries and secrets. I have not left.",
  },
  {
    name: "Dorian Crowe",
    photo: Dorian_Crowe,
    review:
      "Velvet drapes, iron chandeliers, and a barista named Vesper who reads your aura before grinding your beans. A place that truly understands the soul.",
  },
  {
    name: "Morrigan Vale",
    photo: Morrigan_Vale,
    review:
      "Their lavender death-brew is a masterpiece of bitterness and bloom. The gargoyle above my table watched me the entire time. I respected it.",
  },
  {
    name: "Alaric Penn",
    photo: Alaric_Penn,
    review:
      "Pressed tin ceilings, wax-dripped candelabras, faint organ music — this is what a coffee shop should feel like at 2am on a Tuesday.",
  },
  {
    name: "Seraphine Du Bois",
    photo: Seraphine_Du_Bois,
    review:
      "I brought my copy of Poe and no one batted an eye. The espresso was transcendently bitter. The ambient ravens were a nice touch — real or taxidermy, unclear.",
  },
  {
    name: "Evander Locke",
    photo: Evander_Locke,
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
      <div className="w-3/4 m-auto">
        <div className="mt-20">
          <Slider {...settings}>
            {reviewers.map((reviewer, index) => (
              <div
                key={index}
                className="bg-white h-[450px] text-soft-black rounded-xl"
              >
                <div className="h-56 rounded-t-xl bg-indigo-950 flex justify-center">
                  <img
                    src={reviewer.photo}
                    alt={reviewer.name}
                    className="h-44 w-44 rounded-full"
                  />
                </div>

                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-xl font-base">{reviewer.name}</p>
                  <p>{reviewer.review}</p>
                  <button className="bg-indigo-950 text-white text-lg py-2 px-4 rounded-xl">
                    Read More
                  </button>
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
