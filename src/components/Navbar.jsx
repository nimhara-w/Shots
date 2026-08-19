import gsap from "gsap";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { navLinks } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  useEffect(() => {
    if (location.pathname !== "/" || !location.state?.scrollToContact) {
      return;
    }

    requestAnimationFrame(() => {
      scrollToContact();
      navigate("/", { replace: true, state: null });
    });
  }, [location.pathname, location.state, navigate]);

  const handleContactClick = (event) => {
    event.preventDefault();

    if (location.pathname === "/") {
      scrollToContact();
      return;
    }

    navigate("/", { state: { scrollToContact: true } });
  };

  useGSAP(() => {
    gsap.fromTo(
      "nav",
      { backgroundColor: "rgba(0, 0, 0, 0.1)" },
      {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(20px)",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "120px top",
          scrub: true,
        },
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
              ) : link.id === "contact" ? (
                <a href="#contact" onClick={handleContactClick}>
                  {link.title}
                </a>
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
