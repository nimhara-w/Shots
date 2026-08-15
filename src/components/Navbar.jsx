import gsap from "gsap";

import { Link } from "react-router-dom";

import { navLinks } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      },
    );
  });

  return (
    <nav className="w-full py-5 px-10 fixed top-0 left-0 z-50">
      <div className="flex flex-row justify-start items-center gap-10">
        <Link to="/" className="flex items-center gap-2">
          <img src="/icon.png" alt="logo" className="w-10 h-10" />
          <p className="font-gothic text-white text-2xl">Shots</p>
        </Link>

        <ul className="font-base flex flex-row items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              {link.id === "menu" ? (
                <Link to="/menu">{link.title}</Link>
              ) : (
                <a href={`#${link.id}`}>{link.title}</a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
