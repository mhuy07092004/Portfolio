import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import skills from "../data/skills";
import type { Skill } from "../data/skills";
import { TECH_ICONS, TECH_COLORS } from "../lib/techIcons";

gsap.registerPlugin(ScrollTrigger);

function SkillPill({ skill }: { skill: Skill }) {
  const icon = TECH_ICONS[skill.label];
  const isActive = skill.status === "active";
  const rawColor = TECH_COLORS[skill.label];
  // Use amber as fallback for mid-dark brand colors that don't contrast well as accents
  const accentColor = isActive
    ? rawColor && rawColor !== "#888888"
      ? rawColor
      : "#d97706"
    : undefined;

  return (
    <div
      className={`skill-pill flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium tracking-wide transition-all duration-200 ${
        isActive
          ? "skill-pill-active bg-white text-charcoal-900 border-transparent"
          : "skill-pill-learning bg-cream-200 border-cream-300 text-warm-muted opacity-60"
      }`}
      style={
        accentColor
          ? {
              borderColor: accentColor,
              boxShadow: `0 0 0 1px ${accentColor}35, 0 2px 10px ${accentColor}22`,
            }
          : undefined
      }
    >
      <span
        className={`text-[18px] shrink-0 [&_svg]:block ${
          !rawColor ? (isActive ? "text-amber-500" : "text-stone-400") : ""
        }`}
        style={rawColor ? { color: rawColor } : undefined}
      >
        {icon}
      </span>
      {skill.label}
      {!isActive && (
        <span className="ml-1 text-[10px] uppercase tracking-wider text-stone-400 border border-stone-300 rounded px-1 py-0.5">
          learning
        </span>
      )}
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Section headings fade-up
      const metaEls = gsap.utils.toArray<HTMLElement>(
        ".skills-meta",
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

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Skill group containers: staggered fade-up
        const groups = gsap.utils.toArray<HTMLElement>(
          ".skill-group",
          sectionRef.current ?? undefined
        );
        gsap.set(groups, { y: 28, opacity: 0 });
        ScrollTrigger.batch(groups, {
          onEnter: (batch) =>
            gsap.to(batch, {
              y: 0,
              opacity: 1,
              duration: 0.55,
              ease: "power2.out",
              stagger: 0.1,
            }),
          start: "top 88%",
          once: true,
        });

        // Active pills: scale-pop for extra emphasis
        const activePills = gsap.utils.toArray<HTMLElement>(
          ".skill-pill-active",
          sectionRef.current ?? undefined
        );
        gsap.set(activePills, { scale: 0.82, opacity: 0 });
        ScrollTrigger.batch(activePills, {
          onEnter: (batch) =>
            gsap.to(batch, {
              scale: 1,
              opacity: 1,
              duration: 0.42,
              ease: "back.out(1.8)",
              stagger: 0.04,
            }),
          start: "top 88%",
          once: true,
        });

        // Learning pills: gentle fade-in at reduced opacity
        const learningPills = gsap.utils.toArray<HTMLElement>(
          ".skill-pill-learning",
          sectionRef.current ?? undefined
        );
        gsap.set(learningPills, { y: 12, opacity: 0 });
        ScrollTrigger.batch(learningPills, {
          onEnter: (batch) =>
            gsap.to(batch, {
              y: 0,
              opacity: 0.6,
              duration: 0.4,
              ease: "power2.out",
              stagger: 0.035,
            }),
          start: "top 88%",
          once: true,
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding bg-cream-200 font-mono"
    >
      <div className="max-w-6xl mx-auto">
        <p className="skills-meta text-xs tracking-[0.3em] uppercase text-amber-600 mb-3">
          03 / Skills
        </p>
        <h2 className="skills-meta text-3xl md:text-4xl font-bold text-charcoal-900 mb-4 tracking-tight">
          My Toolkit
        </h2>
        <p className="skills-meta text-warm-gray text-sm mb-12 max-w-lg">
          Technologies I use daily to build and learn web applications.
        </p>

        <div className="space-y-12">
          {skills.map((group) => (
            <div key={group.category} className="skill-group">
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-warm-gray mb-5 pb-3 border-b border-cream-300">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <SkillPill key={skill.label} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
