import { useRef, useEffect } from "react";
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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const SPACING = 28;
    const DOT_RADIUS = 1;
    const INFLUENCE_RADIUS = 110;
    const MAX_PUSH = 18;

    type Dot = { ox: number; oy: number; x: number; y: number };
    let dots: Dot[] = [];
    let animId: number;

    function buildDots() {
      dots = [];
      const cols = Math.ceil(canvas!.width / SPACING) + 1;
      const rows = Math.ceil(canvas!.height / SPACING) + 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const ox = c * SPACING;
          const oy = r * SPACING;
          dots.push({ ox, oy, x: ox, y: oy });
        }
      }
    }

    function resize() {
      canvas!.width = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
      buildDots();
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const cx = canvas!.width / 2;
      const cy = canvas!.height / 2;
      const maxFadeDist = Math.sqrt(cx * cx + cy * cy) * 0.8;

      for (const dot of dots) {
        const dx = dot.x - mx;
        const dy = dot.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let targetX = dot.ox;
        let targetY = dot.oy;

        if (dist < INFLUENCE_RADIUS && dist > 0) {
          const force = (1 - dist / INFLUENCE_RADIUS) * MAX_PUSH;
          const angle = Math.atan2(dy, dx);
          targetX = dot.ox + Math.cos(angle) * force;
          targetY = dot.oy + Math.sin(angle) * force;
        }

        dot.x += (targetX - dot.x) * 0.12;
        dot.y += (targetY - dot.y) * 0.12;

        const distFromCenter = Math.sqrt((dot.ox - cx) ** 2 + (dot.oy - cy) ** 2);
        const fade = Math.max(0, 1 - distFromCenter / maxFadeDist);

        const isNearMouse = dist < INFLUENCE_RADIUS;
        const glow = isNearMouse ? (1 - dist / INFLUENCE_RADIUS) * 0.5 : 0;
        const alpha = Math.min(1, 0.55 * fade + glow) * fade;

        ctx!.beginPath();
        ctx!.arc(dot.x, dot.y, DOT_RADIUS + (isNearMouse ? (1 - dist / INFLUENCE_RADIUS) * 1.2 : 0), 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(217, 119, 6, ${alpha})`;
        ctx!.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }

    function onMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999 };
    }

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const parent = canvas.parentElement;
    parent?.addEventListener("mousemove", onMouseMove);
    parent?.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      parent?.removeEventListener("mousemove", onMouseMove);
      parent?.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
