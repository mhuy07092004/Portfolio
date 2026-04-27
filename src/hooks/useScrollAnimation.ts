import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Fade-up scroll animation for a list of child elements inside a container.
 * Each element fades from y:40 opacity:0 to y:0 opacity:1 as it enters viewport.
 */
export function useScrollAnimation(selector: string = ".anim") {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const elements = gsap.utils.toArray<HTMLElement>(selector, containerRef.current ?? undefined);
      if (!elements.length) return;

      elements.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return containerRef;
}
