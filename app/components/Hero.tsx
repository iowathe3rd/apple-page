import { useGSAP } from "@gsap/react";
import { Link } from "@remix-run/react";
import gsap from "gsap";

import heroVideo from "~/assets/videos/hero.mp4";
import smallHeroVideo from "~/assets/videos/smallHero.mp4";
const Hero: React.FC = () => {
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
    });
    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 2,
    });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          Iphone 15 pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video autoPlay muted playsInline className="pointer-events-none">
            <source
              src={heroVideo}
              type="video/mp4"
              media="(min-width: 760px)"
            />
            <source src={smallHeroVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <Link to="#highlights" className="btn">
          Buy
        </Link>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
