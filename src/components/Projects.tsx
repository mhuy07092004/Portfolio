import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import projects from "../data/projects";
import type { Project } from "../data/projects";
import { TECH_ICONS, TECH_COLORS } from "../lib/techIcons";

gsap.registerPlugin(ScrollTrigger);

function TechIcon({ label }: { label: string }) {
  const icon = TECH_ICONS[label];
  const color = TECH_COLORS[label];
  if (!icon) return null;
  return (
    <span
      title={label}
      aria-label={label}
      role="img"
      className="text-[22px] [&_svg]:block transition-transform duration-150 hover:scale-125"
      style={color ? { color } : undefined}
    >
      {icon}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card flex flex-col bg-cream-50 border border-cream-300 rounded-2xl overflow-hidden hover:border-amber-300 hover:shadow-xl hover:shadow-amber-100/60 transition-all duration-300 group">
      {/* top accent bar */}
      <div className="h-0.5 w-full bg-gradient-to-r from-amber-400/0 via-amber-400 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex flex-col flex-1 p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="font-bold text-charcoal-900 text-lg tracking-tight leading-snug group-hover:text-amber-700 transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-warm-gray font-normal leading-snug mt-0.5">
              {project.tagline}
            </p>
          </div>
          <div className="flex gap-2 shrink-0 mt-0.5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-gray hover:text-amber-600 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={17} />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-gray hover:text-amber-600 transition-colors"
                aria-label="Live site"
              >
                <FiExternalLink size={17} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-warm-gray leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Tech icons row */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-cream-300">
          {project.tech.map((t) => (
            <TechIcon key={t} label={t} />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Section heading / description elements: standard fade-up
      const metaEls = gsap.utils.toArray<HTMLElement>(
        ".proj-meta",
        sectionRef.current ?? undefined
      );
      metaEls.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });

      // Cards: dramatic staggered entrance, respects prefers-reduced-motion
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(
          ".project-card",
          sectionRef.current ?? undefined
        );
        gsap.set(cards, { y: 80, opacity: 0, scale: 0.93 });
        ScrollTrigger.batch(cards, {
          onEnter: (batch) =>
            gsap.to(batch, {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.18,
            }),
          start: "top 82%",
          once: true,
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding bg-cream-100 font-mono"
    >
      <div className="max-w-6xl mx-auto">
        <p className="proj-meta text-xs tracking-[0.3em] uppercase text-amber-600 mb-3">
          02 / Projects
        </p>
        <h2 className="proj-meta text-3xl md:text-4xl font-bold text-charcoal-900 mb-4 tracking-tight">
          Key Projects
        </h2>
        <p className="proj-meta text-warm-gray text-sm mb-12 max-w-lg">
          A selection of projects — each one an excuse to learn something new
          and ship something real.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="proj-meta mt-10 text-center">
          <a
            href="https://github.com/mhuy07092004"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-warm-gray hover:text-amber-600 transition-colors border border-stone-300 hover:border-amber-400 px-5 py-2.5 rounded-lg"
          >
            <FiGithub size={16} />
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
