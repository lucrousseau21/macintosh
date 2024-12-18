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
    <section className="w-screen" id="1990">
      <div className="w-full h-screen flex relative">
      <img className="absolute w-80 z-50 bottom-6 -rotate-12 right-80 -translate-x-24 rotate-8" src="images/iMac-G3_orange.png"/>
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
        <div className="h-screen flex flex-col justify-between p-32 w-1/2 relative">
          <h1 className="text-3xl relative z-10 self-end">1990's</h1>
          <div className="absolute w-2/3 z-0 bottom-32 rounded-xl h-80 overflow-hidden border-2 border-black">
            <div className="h-1/4">
              <img src="images/1990-barre.png" className="w-full h-full" />
            </div>
            <div className="w-full h-3/4 overflow-scroll">
              <p className="font-just pl-6 pr-6 pb-6 pt-2 relative z-10">
                Après une décennie de luttes internes et une perte d’identité,
                Steve Jobs revient chez Apple en 1997. L’iMac G3, lancé en 1998,
                est son premier produit emblématique après son retour. Le design
                transparent et coloré conçu par Jony Ive a marqué une rupture
                totale avec les ordinateurs beiges traditionnels. L’iMac était
                disponible dans plusieurs couleurs vibrantes comme "Bondi Blue".
                Steve Jobs a fait un pari audacieux en éliminant les disquettes.
                Cela reflétait sa capacité à anticiper les tendances
                technologiques : "Nous n’avons pas peur de dire au monde ce qui
                va disparaître. Nous croyons en l’avenir." L’iMac G3 a vendu 800
                000 unités en 5 mois, sauvant Apple de la faillite. Il a aussi
                popularisé l’USB comme standard industriel.
                <a className="blink">|</a>
              </p>
            </div>
          </div>
          {/* <p>
            Après une décennie de luttes internes et une perte d’identité, Steve Jobs revient chez
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
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default Annee90;
