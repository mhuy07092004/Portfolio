export type SkillStatus = "active" | "learning";

export interface Skill {
  label: string;
  status: SkillStatus;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

const skills: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { label: "TypeScript", status: "active" },
      { label: "JavaScript", status: "active" },
      { label: "HTML", status: "active" },
      { label: "CSS", status: "active" },
      { label: "Python", status: "active" },
      { label: "C++", status: "learning" },
    ],
  },
  {
    category: "Framework & Libraries",
    skills: [
      { label: "React", status: "active" },
      { label: "Tailwind CSS", status: "active" },
      { label: "GSAP", status: "active" },
      { label: "Next.js", status: "learning" },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { label: "Node.js", status: "learning" },
      { label: "PostgreSQL", status: "learning" },
      { label: "MongoDB", status: "learning" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { label: "Vite", status: "active" },
      { label: "Git & GitHub", status: "active" },
      { label: "npm / pnpm", status: "active" },
      { label: "Vercel", status: "active" },
      { label: "Docker", status: "learning" },
      { label: "Linux CLI", status: "learning" },
      { label: "CI/CD", status: "learning" },
    ],
  },
  {
    category: "Security & Networking",
    skills: [
      { label: "Networking Fundamentals", status: "active" },
      { label: "TCP/IP", status: "active" },
      { label: "Kali Linux", status: "learning" },
      { label: "OWASP Top 10", status: "learning" },
      { label: "Burp Suite", status: "learning" },
    ],
  },
];

export default skills;
