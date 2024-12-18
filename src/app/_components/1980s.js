"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwindcss/tailwind.css";

gsap.registerPlugin(ScrollTrigger);

const Annee80 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const coolVideo = videoRef.current;

    if (coolVideo) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: coolVideo,
          start: "top-=60% top",
          end: "bottom+=100% bottom",
          scrub: true,
          // markers: true,
          // pin: true,
          onUpdate: (self) => {
            coolVideo.currentTime = coolVideo.duration * self.progress;
          },
        },
      });

      const handleMetadataLoaded = () => {
        tl.to(coolVideo, { currentTime: coolVideo.duration });
      };

      coolVideo.addEventListener("loadedmetadata", handleMetadataLoaded);

      return () => {
        coolVideo.removeEventListener("loadedmetadata", handleMetadataLoaded);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);
  return (
    <section className="w-screen" id="1980">
      <div className="w-full h-screen flex">
        <div className="h-screen flex flex-col justify-between p-32 w-1/2 relative">
          <h1 className="text-3xl relative z-10">1980's</h1>
          <div className="absolute w-2/3 z-0 bottom-32 rounded-xl h-80">
            <div className="h-1/4" h-full>
              <img src="images/1990-barre.png" className="w-full h-full" />
            </div>
            {/* <img
              src="images/1984.png"
              className="absolute w-2/3 z-0 bottom-32 rounded-xl"
            /> */}
            <div className="w-full h-3/4 overflow-scroll">
              <p className="font-just p-6 relative z-10">
                Le Macintosh original est lancé le 24 janvier 1984. Avec une
                publicité légendaire diffusée lors du Super Bowl, Apple
                promettait de briser le monopole d'IBM et d'apporter
                l'informatique personnelle au grand public. Steve Jobs a insisté
                sur un design minimaliste et épuré. Le boîtier compact et
                tout-en-un, conçu par Jerry Manock, est révolutionnaire. Jobs
                voulait que le Macintosh soit aussi simple qu’un appareil
                électroménager. La poignée intégrée permettait de le transporter
                facilement, une idée innovante pour l’époque. Bien que les
                ventes initiales furent modestes (70 000 unités en 6 mois), le
                Macintosh 128K a posé les bases des ordinateurs modernes. Sa
                philosophie de design simple et centrée sur l’utilisateur
                deviendra une marque de fabrique Apple.
                <a className="blink">|</a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-screen pt-14 overflow-hidden z-30 relative">
          <video
            ref={videoRef}
            className="absolute h-full object-cover"
            playsInline
            webkit-playsinline="true"
            preload="auto"
            muted
          >
            <source src="/videos/Macintosh-128k1.mp4" type="video/mp4" />
            {/* <source src="/videos/Macintosh-128k.webm" type="video/webm" /> */}
          </video>
        </div>
      </div>
    </section>
  );
};

export default Annee80;
