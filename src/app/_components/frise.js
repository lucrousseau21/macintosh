"use client";

import React, { useState, useEffect } from "react";

const Frise = () => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let visibleId = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleId = entry.target.id; // Mettre à jour l'ID de la section visible
          }
        });

        // Si aucune section n'est visible, réinitialiser l'état
        setActiveId(visibleId);
      },
      {
        root: null, // Utiliser la fenêtre comme conteneur
        threshold: 0.6, // La section doit être visible à 60% pour être active
      }
    );

    // Observer toutes les sections
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
          className={`py-2 rounded-full transition-all select-none ${
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
