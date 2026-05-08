import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const videoRef = useRef();

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "160% top" : "bottom top";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        endTrigger: "#brews",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });
    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  });

  return (
    <>
      <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src="/output.mp4"
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
      </div>

      <section id="hero" className="relative w-full h-screen overflow-hidden">
        <div className="bg-overlay"></div>

        <h1
          id="title"
          className="text-gradient font-bold font-base text-shadow-2xs md:mt-15 mt-20 text-8xl md:text-[10vw] leading-none text-center relative z-10"
        >
          Caffienated.
        </h1>
      </section>
    </>
  );
};

export default Hero;
