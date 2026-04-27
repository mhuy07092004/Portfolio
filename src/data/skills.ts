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
    category: "Frontend",
    skills: [
      { label: "React", status: "active" },
      { label: "TypeScript", status: "active" },
      { label: "JavaScript", status: "active" },
      { label: "Tailwind CSS", status: "active" },
      { label: "HTML & CSS", status: "active" },
      { label: "Vite", status: "active" },
      { label: "GSAP", status: "active" },
      { label: "Next.js", status: "learning" },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { label: "Git & GitHub", status: "active" },
      { label: "VS Code", status: "active" },
      { label: "npm / pnpm", status: "active" },
      { label: "Docker", status: "learning" },
      { label: "Linux CLI", status: "learning" },
      { label: "CI/CD", status: "learning" },
    ],
  },
  {
    category: "Security & Networking",
    skills: [
      { label: "Networking Fundamentals", status: "learning" },
      { label: "TCP/IP", status: "learning" },
      { label: "Kali Linux", status: "learning" },
      { label: "OWASP Top 10", status: "learning" },
      { label: "Burp Suite", status: "learning" },
      { label: "Cryptography Basics", status: "learning" },
    ],
  },
];

export default skills;
