import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const startValue = isMobile ? "top 50%" : "center 40%";
    const endValue = isMobile ? "120% top" : "bottom top";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
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
  }, []);

  return (
    <>
      <section
        id="hero"
        className="relative z-20 min-h-dvh w-full border border-transparent"
      >
        <div className="noise"></div>

        <h1
          id="title"
          className="text-gradient font-bold font-base text-shadow-2xs md:mt-15 mt-20 text-8xl md:text-[10vw] leading-none text-center"
        >
          Caffienated.
        </h1>
      </section>

      <div className="video">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            src="/output.mp4"
            muted
            playsInline
            preload="auto"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
