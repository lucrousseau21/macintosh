"use client"; // Nécessaire pour les hooks React dans Next.js

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importez les styles AOS

const Transition = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Durée de l'animation (en ms)
      offset: 100, // Décalage pour déclencher l'animation
      easing: "ease-in-out", // Type d'animation
      once: true, // Exécute l'animation une seule fois
    });
  }, []);

  return (
    <div className="relative w-screen h-fit z-20" id="transition">
      {/* Image principale */}
      <img className="relative w-full z-20" src="images/transition.png" alt="Transition" />

      {/* Plume animée */}
      <img
        className="absolute bottom-10 left-2/3 z-30 w-16 ombre"
        src="images/plume.png"
        alt="Plume"
        data-aos="fade-left" // Animation AOS
      />

      {/* Zoom animé */}
      <img
        className="absolute bottom-24 left-1/4 z-30 w-16 ombre"
        src="images/zoom.png"
        alt="Zoom"
        data-aos="fade-right" // Animation AOS
      />
    </div>
  );
};

export default Transition;
