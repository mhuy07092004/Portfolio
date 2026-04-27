import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(".hero-label", { y: 20, opacity: 0, duration: 0.5 })
        .from(".hero-name",  { y: 30, opacity: 0, duration: 0.6 }, "-=0.2")
        .from(".hero-title", { y: 25, opacity: 0, duration: 0.5 }, "-=0.2")
        .from(".hero-bio",   { y: 20, opacity: 0, duration: 0.5 }, "-=0.15")
        .from(".hero-ctas",  { y: 20, opacity: 0, duration: 0.5 }, "-=0.1")
        .from(".hero-scroll",{ y: 10, opacity: 0, duration: 0.5 }, "-=0.1");
    },
    { scope: containerRef }
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-cream-100 overflow-hidden font-mono"
    >
      {/* Dot-grid background */}
      <DotGrid />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <p className="hero-label inline-block text-xs tracking-[0.3em] uppercase text-amber-600 mb-5 border border-amber-400/40 px-3 py-1 rounded-full bg-amber-50/60">
        Frontend Dev <span className="text-warm-muted mx-2">→</span> Future Security Engineer
        </p>

        <h1 className="hero-name text-5xl md:text-7xl font-bold text-charcoal-900 leading-tight tracking-tight mb-4">
          Hello I'm Hayden
        </h1>

        <p className="hero-title text-lg md:text-xl font-medium text-amber-600 mb-6 tracking-wide">
          Welcome to my portfolio
        </p>

        <p className="hero-bio text-base md:text-lg text-warm-gray max-w-xl mx-auto leading-relaxed mb-10">
          I build clean, performant interfaces and am on a deliberate path into
          application security — bridging the gap between beautiful UX and robust
          protection.
        </p>

        <div className="hero-ctas flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="projects"
            smooth
            duration={600}
            offset={-70}
            className="cursor-pointer inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 tracking-wide text-sm"
          >
            View My Projects
          </Link>
          <a
            href="/cv.pdf"
            download
            className="inline-block border border-charcoal-700 hover:border-amber-500 hover:text-amber-600 text-charcoal-800 font-semibold px-8 py-3 rounded-lg transition-colors duration-200 tracking-wide text-sm"
          >
            My Resumé
          </a>
        </div>
      </div>

      {/* Scroll arrow */}
      <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-warm-muted">
        <span className="text-xs tracking-widest uppercase">Scroll Down For More</span>
        <HiArrowDown className="text-lg animate-bounce" />
      </div>
    </section>
  );
}

function DotGrid() {
  return (
    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage:
          "radial-gradient(circle, #D97706 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        maskImage:
          "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
      }}
    />
  );
}
