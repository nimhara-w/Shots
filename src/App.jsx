import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Brews from "./components/Brews.jsx";

const App = () => {
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
    <main className="main-bg relative">
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src="/output.mp4"
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Brews />
      </div>
    </main>
  );
};

export default App;
