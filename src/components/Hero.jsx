import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const videoRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "main",
        start: "center 40%",
        end: "bottom top",
        scrub: true,
      },
    });

    const updateVideo = () => {
      if (videoRef.current && videoRef.current.duration) {
        tl.to(
          videoRef.current,
          {
            currentTime: videoRef.current.duration,
          },
          0,
        );
      }
    };

    if (videoRef.current && videoRef.current.readyState > 0) {
      updateVideo();
    } else if (videoRef.current) {
      videoRef.current.addEventListener("loadedmetadata", updateVideo);
      return () =>
        videoRef.current?.removeEventListener("loadedmetadata", updateVideo);
    }
  }, []);

  return (
    <>
      <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src="/output.mp4"
          muted
          playsInline
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
