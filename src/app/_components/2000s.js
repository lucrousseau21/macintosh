"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwindcss/tailwind.css";

gsap.registerPlugin(ScrollTrigger);

const Annee2000 = () => {
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
    <section className="w-screen" id="2000">
      <div className="w-full h-screen flex">
        <div className="h-screen flex flex-col justify-between p-32 w-1/2 relative">
          <h1 className="text-3xl">2000's</h1>
          <div className="absolute w-2/3 z-0 bottom-32 rounded-xl h-80 overflow-hidden border-2 border-black">
            <div className="h-1/4" h-full>
              <img src="images/2006-barre.png" className="w-full h-full" />
            </div>
            <div className="w-full h-3/4 overflow-scroll">
              <p className="font-just pl-6 pr-6 pb-6 pt-2 relative z-10">
              En 2006, Apple amorce la transition vers les processeurs Intel, une
            décision qui transformera la gamme Mac. Le MacBook Pro devient
            l’ordinateur portable de référence pour les créateurs. Steve Jobs
            voulait un produit "sexy et professionnel". Le MacBook Pro, avec son
            boîtier unibody en aluminium, était incroyablement fin et léger.
            Cette conception, encore réalisée sous la direction de Jony Ive,
            incarnait la perfection minimaliste. Le MacBook Pro devient
            rapidement l’outil de prédilection pour les développeurs, graphistes
            et monteurs vidéo. Il a contribué à positionner Apple comme une
            marque incontournable pour les professionnels.
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
            <source src="/videos/MacbookPro2006.mp4" type="video/mp4" />
            {/* <source src="/videos/Macintosh-128k.webm" type="video/webm" /> */}
          </video>
        </div>
      </div>
    </section>
  );
};

export default Annee2000;
