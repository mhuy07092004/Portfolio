import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TAB_TITLE_ACTIVE = "Welcome Back !";
const TAB_TITLE_AWAY = "Goodbye :( ";
const FAVICON_ACTIVE = "/favicon.svg";
const FAVICON_AWAY = "/sadicon.svg";

function syncTabPresentation(visible: boolean) {
  document.title = visible ? TAB_TITLE_ACTIVE : TAB_TITLE_AWAY;
  const icon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
  if (icon) icon.href = visible ? FAVICON_ACTIVE : FAVICON_AWAY;
}

export default function App() {
  useEffect(() => {
    const onVisibility = () => syncTabPresentation(document.visibilityState === "visible");
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <div className="font-mono">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
