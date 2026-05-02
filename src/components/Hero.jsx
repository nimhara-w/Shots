import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ mathWidth: 767 });
  useGSAP(() => {
    const startValue = "center 60%";
    const endValue = "bottom top";

    videoTimelineRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    if (videoRef.current) {
      videoRef.current.onloadedmetadata = () => {
        videoTimelineRef.current.to(videoRef.current, {
          currentTime: videoRef.current.duration,
        });
      };
    }
  }, []);

  return (
    <>
      <section
        id="hero"
        className="relative z-0 min-h-dvh w-full border border-transparent"
      >
        <div className="noise"></div>

        <h1
          id="title"
          className="text-gradient font-bold font-base text-shadow-2xs md:mt-15 mt-20 text-8xl md:text-[10vw] leading-none text-center"
        >
          Caffienated.
        </h1>
      </section>

      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          src="/main.mp4"
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default Hero;
