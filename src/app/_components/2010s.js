"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwindcss/tailwind.css";

gsap.registerPlugin(ScrollTrigger);

const Annee2010 = () => {
  const videoRef = useRef(null);
    
      useEffect(() => {
        const coolVideo = videoRef.current;
    
        if (coolVideo) {
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: coolVideo,
              start: "top-=120% top",
              end: "bottom+=80% bottom",
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
    <div className="w-screen" id="2010">
      <div className="w-full h-screen flex">
      <div className="w-1/2 h-screen pt-14 overflow-hidden z-30 relative">
          <video
            ref={videoRef}
            className="absolute h-full object-cover"
            playsInline
            webkit-playsinline="true"
            preload="auto"
            muted
          >
            <source src="/videos/MacbookPro2020.mp4" type="video/mp4" />
            {/* <source src="/videos/Macintosh-128k.webm" type="video/webm" /> */}
          </video>
        </div>
        <div className=" h-screen flex flex-col justify-between p-32 w-1/2">
          <h1 className="text-3xl self-end">2010's</h1>
          <p>
            Le MacBook Air, initialement lancé en 2008, prend son envol en 2010 avec une
            refonte majeure. Ultra-fin, il tient dans une enveloppe (comme l’a
            démontré Jobs lors de la keynote). Le design est optimisé grâce au
            stockage SSD, éliminant les disques durs encombrants. Le MacBook Air
            a établi un standard pour les ordinateurs ultraportables,
            influençant même ses concurrents. Le MacBook Air est devenu le
            produit le plus vendu de la gamme Mac, représentant 40 % des ventes
            d’ordinateurs Apple en 2011.<a className="blink">|</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Annee2010;
