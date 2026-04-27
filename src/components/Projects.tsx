import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import projects from "../data/projects";
import type { Project } from "../data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="anim group flex flex-col bg-cream-100 border border-cream-300 rounded-2xl p-6 hover:border-amber-300 hover:shadow-md hover:shadow-amber-100/60 transition-all duration-200 hover:scale-[1.03]">
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

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-md bg-cream-300 text-charcoal-700 border border-cream-300 font-medium tracking-wide"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  const sectionRef = useScrollAnimation(".anim");

  return (
    <section
      id="projects"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="section-padding bg-cream-100 font-mono"
    >
      <div className="max-w-6xl mx-auto">
        <p className="anim text-xs tracking-[0.3em] uppercase text-amber-600 mb-3">
          02 / Projects
        </p>
        <h2 className="anim text-3xl md:text-4xl font-bold text-charcoal-900 mb-4 tracking-tight">
          Key Projects
        </h2>
        <p className="anim text-warm-gray text-sm mb-12 max-w-lg">
          A selection of projects — each one an excuse to learn something new
          and ship something real.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="anim mt-10 text-center">
          <a
            href="https://github.com"
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
