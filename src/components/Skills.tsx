import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiVite,
  SiGit,
  SiDocker,
  SiLinux,
  SiGithub,
  SiKalilinux,
  SiNextdotjs,
} from "react-icons/si";
import { TbPlayerPlay, TbNetwork, TbShieldLock, TbKey } from "react-icons/tb";
import { VscTerminalBash } from "react-icons/vsc";
import { MdBuild } from "react-icons/md";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import skills from "../data/skills";
import type { Skill } from "../data/skills";

const ICON_MAP: Record<string, React.ReactNode> = {
  React: <SiReact />,
  TypeScript: <SiTypescript />,
  JavaScript: <SiJavascript />,
  "Tailwind CSS": <SiTailwindcss />,
  "HTML & CSS": <SiHtml5 />,
  Vite: <SiVite />,
  GSAP: <TbPlayerPlay />,
  "Next.js": <SiNextdotjs />,
  "Git & GitHub": <SiGit />,
  "npm / pnpm": <MdBuild />,
  Docker: <SiDocker />,
  "Linux CLI": <SiLinux />,
  "CI/CD": <VscTerminalBash />,
  "VS Code": <SiGithub />,
  "Networking Fundamentals": <TbNetwork />,
  "TCP/IP": <TbNetwork />,
  "Kali Linux": <SiKalilinux />,
  "OWASP Top 10": <TbShieldLock />,
  "Burp Suite": <TbShieldLock />,
  "Cryptography Basics": <TbKey />,
};

function SkillPill({ skill }: { skill: Skill }) {
  const icon = ICON_MAP[skill.label];
  const isActive = skill.status === "active";

  return (
    <div
      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium tracking-wide transition-colors ${
        isActive
          ? "bg-amber-50 border-amber-300 text-amber-800"
          : "bg-cream-200 border-cream-300 text-warm-muted"
      }`}
    >
      <span className={`text-base ${isActive ? "text-amber-500" : "text-stone-400"}`}>
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
  const sectionRef = useScrollAnimation(".anim");

  return (
    <section
      id="skills"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="section-padding bg-cream-200 font-mono"
    >
      <div className="max-w-6xl mx-auto">
        <p className="anim text-xs tracking-[0.3em] uppercase text-amber-600 mb-3">
          03 / Skills
        </p>
        <h2 className="anim text-3xl md:text-4xl font-bold text-charcoal-900 mb-4 tracking-tight">
          My Toolkit
        </h2>
        <p className="anim text-warm-gray text-sm mb-12 max-w-lg">
          Tools I use daily, and ones I'm actively building fluency in.{" "}
          <span className="text-amber-600">Amber</span> = active,{" "}
          <span className="text-stone-400">muted</span> = learning.
        </p>

        <div className="space-y-12">
          {skills.map((group) => (
            <div key={group.category} className="anim">
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
