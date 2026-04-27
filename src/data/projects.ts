export interface Project {
  id: number;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  live: string | null;
}

const projects: Project[] = [
  {
    id: 1,
    name: "ParkIt",
    tagline: "Smart parking system",
    description:
      "A browser-based password manager with AES-256 encryption, master password hashing, and a clean dashboard for managing credentials.",
    tech: ["React", "TypeScript", "Web Crypto API", "Tailwind CSS"],
    github: "https://github.com",
    live: null,
  },
  {
    id: 2,
    name: "Workmate",
    tagline: "Smart job matching",
    description:
      "A lightweight network monitoring tool that visualises open ports, active hosts, and basic vulnerability flags on a local subnet.",
    tech: ["Python", "Flask", "React", "Nmap", "SQLite"],
    github: "https://github.com",
    live: null,
  },
  {
    id: 3,
    name: "Brookie",
    tagline: "E-commerce website",
    description:
      "This portfolio site — built to practice modern frontend tooling, GSAP animations, and clean responsive design without any UI libraries.",
    tech: ["Vite", "React", "TypeScript", "Tailwind CSS", "GSAP"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export default projects;
