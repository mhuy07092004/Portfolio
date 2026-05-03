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
    name: "9611 Kafe",
    tagline: "Coffee shop portfolio website",
    description:
      "Marketing portfolio for a café in React and Tailwind featuring menu pages, gallery, maps, and GSAP animations.",
      tech: ["React", "TypeScript", "Python", "GSAP", "Tailwind CSS", "PostgreSQL", "Docker"],
    github: "https://github.com/mhuy07092004/9611_Kafe",
    live: "https://9611kafe.vercel.app/",
  },
];

export default projects;
