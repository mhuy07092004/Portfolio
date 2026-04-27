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
      "example description",
    tech: ["React", "JavaScript", "Python", "Flask", "PostgreSQL"],
    github: "https://github.com/httn113/CSCI334---ParkIT",
    live: "https://parkit-n05lsq1v7-longtran1406s-projects.vercel.app/login",
  },
  {
    id: 2,
    name: "Workmate",
    tagline: "Smart job matching",
    description:
      "example description",
    tech: ["React", "JavaScript", "Python", "Flask", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/mhuy07092004/Workmate",
    live: null,
  },
  {
    id: 3,
    name: "Brookie",
    tagline: "E-commerce website",
    description:
      "example description",
      tech: ["React", "TypeScript", "Python", "GSAP", "Tailwind CSS", "PostgreSQL", "Docker"],
    github: "https://github.com/mhuy07092004/Cookies-Shop-Website",
    live: null,
  },
];

export default projects;
