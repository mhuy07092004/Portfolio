import { TECH_URLS } from "../lib/techUrls";

export type SkillStatus = "active" | "learning";

export interface Skill {
  label: string;
  status: SkillStatus;
  /** Official or authoritative documentation / “what is” page */
  url: string;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

const skills: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { label: "TypeScript", status: "active", url: TECH_URLS.TypeScript },
      { label: "JavaScript", status: "active", url: TECH_URLS.JavaScript },
      { label: "HTML", status: "active", url: TECH_URLS.HTML },
      { label: "CSS", status: "active", url: TECH_URLS.CSS },
      { label: "Python", status: "active", url: TECH_URLS.Python },
      { label: "C++", status: "learning", url: TECH_URLS["C++"] },
    ],
  },
  {
    category: "Framework & Libraries",
    skills: [
      { label: "React", status: "active", url: TECH_URLS.React },
      { label: "Tailwind CSS", status: "active", url: TECH_URLS["Tailwind CSS"] },
      { label: "GSAP", status: "active", url: TECH_URLS.GSAP },
      { label: "Next.js", status: "learning", url: TECH_URLS["Next.js"] },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { label: "Node.js", status: "learning", url: TECH_URLS["Node.js"] },
      { label: "PostgreSQL", status: "learning", url: TECH_URLS.PostgreSQL },
      { label: "MongoDB", status: "learning", url: TECH_URLS.MongoDB },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { label: "Vite", status: "active", url: TECH_URLS.Vite },
      { label: "Git & GitHub", status: "active", url: TECH_URLS["Git & GitHub"] },
      { label: "npm / pnpm", status: "active", url: TECH_URLS["npm / pnpm"] },
      { label: "Vercel", status: "active", url: TECH_URLS.Vercel },
      { label: "Docker", status: "learning", url: TECH_URLS.Docker },
      { label: "Linux CLI", status: "learning", url: TECH_URLS["Linux CLI"] },
      { label: "CI/CD", status: "learning", url: TECH_URLS["CI/CD"] },
    ],
  },
  {
    category: "Security & Networking",
    skills: [
      { label: "Networking Fundamentals", status: "active", url: TECH_URLS["Networking Fundamentals"] },
      { label: "TCP/IP", status: "active", url: TECH_URLS["TCP/IP"] },
      { label: "Kali Linux", status: "learning", url: TECH_URLS["Kali Linux"] },
      { label: "OWASP Top 10", status: "learning", url: TECH_URLS["OWASP Top 10"] },
      { label: "Burp Suite", status: "learning", url: TECH_URLS["Burp Suite"] },
    ],
  },
];

export default skills;
