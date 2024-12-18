"use client";

import React, { useState, useEffect } from "react";

const Frise = () => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id); // Mettre à jour l'ID actif
          }
        });
      },
      {
        root: null, // Utiliser la fenêtre comme conteneur
        threshold: 0.6, // La section doit être visible à 60% pour être active
      }
    );

    // Ciblez toutes les sections avec des IDs correspondants
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className=" fixed flex gap-4 h-screen right-0 top-1/2 bottom-0 vertical-rl z-40 px-4">
      {["1980", "1990", "2000", "2010"].map((year) => (
        <a
          key={year}
          href={`#${year}`}
          className={`py-2 rounded-full transition-all ${
            activeId === year ? "bg-blue-500 text-white" : "hover:bg-gray-600/20"
          }`}
        >
          {year}'s
        </a>
      ))}
    </div>
  );
};

export default Frise;
