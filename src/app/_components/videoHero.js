// "use client";
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "tailwindcss/tailwind.css";

// gsap.registerPlugin(ScrollTrigger);

// const VideoHero = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const coolVideo = videoRef.current;

//     if (coolVideo) {
//       let tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: coolVideo,
//           start: "top top",
//           end: "bottom+=200% bottom",
//           scrub: true,
//           prin: true,
//           markers: true,
//         },
//       });

//       const handleMetadataLoaded = () => {
//         tl.to(coolVideo, { currentTime: coolVideo.duration });
//       };

//       coolVideo.addEventListener("loadedmetadata", handleMetadataLoaded);

//       return () => {
//         coolVideo.removeEventListener("loadedmetadata", handleMetadataLoaded);
//         ScrollTrigger.kill();
//       };
//     }
//   }, []);

//   return (
//     <div className="flex z-10 inset-0 overflow-hidden">
//       <video
//         ref={videoRef}
//         className="absolute w-full h-full object-cover"
//         playsInline
//         webkit-playsinline="true"
//         preload="auto"
//         muted
//       >
//         <source
//           src="https://www.dropbox.com/scl/fi/qejf5dgqiv6m77d71r2ec/abstract-background-ink-water-20072.mp4?rlkey=zwgwzw4bfhx7oy034t7un6mod&raw=1"
//           type="video/mp4"
//         />
//       </video>
//     </div>
//   );
// };

// export default VideoHero;

"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwindcss/tailwind.css";

gsap.registerPlugin(ScrollTrigger);

const VideoHero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const coolVideo = videoRef.current;

    if (coolVideo) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: coolVideo,
          start: "top top",
          end: "bottom+=200% bottom",
          scrub: true,
          markers: true,
        },
      });

      const handleMetadataLoaded = () => {
        tl.to(coolVideo, { currentTime: coolVideo.duration });
      };

      coolVideo.addEventListener("loadedmetadata", handleMetadataLoaded);

      return () => {
        coolVideo.removeEventListener("loadedmetadata", handleMetadataLoaded);
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  return (
    <div className="flex z-10 inset-0 overflow-hidden h-[200vh]">
       <video
         ref={videoRef}
         className="absolute w-full h-full object-cover"
         playsInline
         webkit-playsinline="true"
         preload="auto"
         muted
       >
         <source
           src="https://www.dropbox.com/scl/fi/qejf5dgqiv6m77d71r2ec/abstract-background-ink-water-20072.mp4?rlkey=zwgwzw4bfhx7oy034t7un6mod&raw=1"
           type="video/mp4"
         />
       </video>
     </div>
  );
};

export default VideoHero;