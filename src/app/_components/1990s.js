"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwindcss/tailwind.css";

gsap.registerPlugin(ScrollTrigger);

const Annee90 = () => {
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
    <div className="w-screen" id="1990">
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
            <source src="/videos/G3.mp4" type="video/mp4" />
            {/* <source src="/videos/Macintosh-128k.webm" type="video/webm" /> */}
          </video>
        </div>
        <div className=" h-screen flex flex-col justify-between p-32 w-1/2">
          <h1 className="text-3xl self-end">1990's</h1>
          <p>
            Les années 1990 : Renaissance et consolidation Après une décennie de
            luttes internes et une perte d’identité, Steve Jobs revient chez
            Apple en 1997. L’iMac G3, lancé en 1998, est son premier produit
            emblématique après son retour. Le design transparent et coloré conçu
            par Jony Ive a marqué une rupture totale avec les ordinateurs beiges
            traditionnels. L’iMac était disponible dans plusieurs couleurs
            vibrantes comme "Bondi Blue". Steve Jobs a fait un pari audacieux en
            éliminant les disquettes. Cela reflétait sa capacité à anticiper les
            tendances technologiques : "Nous n’avons pas peur de dire au monde
            ce qui va disparaître. Nous croyons en l’avenir." L’iMac G3 a vendu
            800 000 unités en 5 mois, sauvant Apple de la faillite. Il a aussi
            popularisé l’USB comme standard industriel.<a className="blink">|</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Annee90;
