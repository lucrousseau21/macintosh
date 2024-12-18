"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwindcss/tailwind.css";

gsap.registerPlugin(ScrollTrigger);

const VideoHero = () => {
  const videoRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const coolVideo = videoRef.current;

    if (coolVideo) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: coolVideo,
          start: "top top",
          end: "bottom+=200% bottom",
          scrub: true,
          // markers: true,
          pin: true,
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
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        };
      };
    }
  }, []);

  return (
    <div className="flex inset-0 overflow-hidden h-[200vh] z-50">
      <video
        ref={videoRef}
        className="absolute w-full h-full object-cover z-50"
        playsInline
        webkit-playsinline="true"
        preload="auto"
        muted
      >
        <source
          src="/videos/MacintoshHero_convert.mp4"
          type="video/mp4"
        />
        {/* <source
          src="/videos/MacintoshHero2.webm"
          type="video/webm"
        /> */}
      </video>
    </div>
  );
};

export default VideoHero;



// essai de correction des lags sur chrome

// "use client";
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "tailwindcss/tailwind.css";

// gsap.registerPlugin(ScrollTrigger);

// const VideoHero = () => {
//   const videoRef = useRef(null);
//   const animationFrameRef = useRef(null);

//   useEffect(() => {
//     const coolVideo = videoRef.current;

//     if (coolVideo) {
//       let tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: coolVideo,
//           start: "top top",
//           end: "bottom+=200% bottom",
//           scrub: true,
//           // markers: true,
//           pin: true,
//           onUpdate: (self) => {
//             if (animationFrameRef.current) {
//               cancelAnimationFrame(animationFrameRef.current);
//             }
//             animationFrameRef.current = requestAnimationFrame(() => {
//               coolVideo.currentTime = coolVideo.duration * self.progress;
//             });
//           },
//         },
//       });

//       const handleMetadataLoaded = () => {
//         tl.to(coolVideo, { currentTime: coolVideo.duration });
//       };

//       coolVideo.addEventListener("loadedmetadata", handleMetadataLoaded);

//       return () => {
//         coolVideo.removeEventListener("loadedmetadata", handleMetadataLoaded);
//         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//         if (animationFrameRef.current) {
//           cancelAnimationFrame(animationFrameRef.current);
//         }
//       };
//     }
//   }, []);

//   return (
//     <div className="flex z-10 inset-0 overflow-hidden h-[200vh]">
//       <video
//         ref={videoRef}
//         className="absolute w-full h-full object-cover"
//         playsInline
//         webkit-playsinline="true"
//         preload="auto"
//         muted
//       >
//         <source
//           src="/videos/MacintoshHero.mp4"
//           type="video/mp4"
//         />
//       </video>
//     </div>
//   );
// };

// export default VideoHero;