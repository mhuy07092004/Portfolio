import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

const NAV_LINKS = [
  { label: "About", to: "about" },
  { label: "Projects", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Contact", to: "contact" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 70;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  gsap.to(window, { scrollTo: { y: top }, duration: 0.8, ease: "power2.inOut" });
}

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.to);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useGSAP(
    () => {
      gsap.from(navRef.current, { y: -60, opacity: 0, duration: 0.7, ease: "power2.out" });
    },
    { scope: navRef }
  );

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono ${
        scrolled
          ? "bg-charcoal-900/95 backdrop-blur-sm py-3 shadow-lg"
          : "bg-charcoal-900 py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between relative">
        {/* Logo */}
        <button
          onClick={() => gsap.to(window, { scrollTo: { y: 0 }, duration: 0.8, ease: "power2.inOut" })}
          className="cursor-pointer text-amber-400 font-bold text-lg tracking-tight hover:text-amber-300 transition-colors"
        />

        {/* Desktop links — centered absolutely */}
        <ul className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map(({ label, to }) =>
            label === "Projects" ? (
              <li key={to}>
                <button
                  onClick={() => scrollToSection(to)}
                  className={`cursor-pointer text-sm font-semibold border rounded px-4 py-1.5 tracking-wide transition-all duration-200 ${
                    activeSection === to
                      ? "bg-amber-400 text-charcoal-900 border-amber-400"
                      : "text-amber-400 border-amber-400 hover:bg-amber-400 hover:text-charcoal-900"
                  }`}
                >
                  {label}
                </button>
              </li>
            ) : (
              <li key={to}>
                <button
                  onClick={() => scrollToSection(to)}
                  className={`cursor-pointer text-sm tracking-wide transition-colors ${
                    activeSection === to
                      ? "text-amber-400"
                      : "text-stone-400 hover:text-amber-300"
                  }`}
                >
                  {label}
                </button>
              </li>
            )
          )}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-stone-400 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-stone-400 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-stone-400 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-charcoal-900 border-t border-charcoal-700 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map(({ label, to }) =>
              label === "Projects" ? (
                <li key={to}>
                  <button
                    onClick={() => { scrollToSection(to); setMenuOpen(false); }}
                    className={`cursor-pointer text-sm font-semibold border rounded px-4 py-1.5 tracking-wide transition-all duration-200 ${
                      activeSection === to
                        ? "bg-amber-400 text-charcoal-900 border-amber-400"
                        : "text-amber-400 border-amber-400 hover:bg-amber-400 hover:text-charcoal-900"
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ) : (
                <li key={to}>
                  <button
                    onClick={() => { scrollToSection(to); setMenuOpen(false); }}
                    className={`cursor-pointer text-sm tracking-wide transition-colors ${
                      activeSection === to
                        ? "text-amber-400"
                        : "text-stone-400 hover:text-amber-300"
                    }`}
                  >
                    {label}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
