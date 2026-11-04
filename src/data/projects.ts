export interface Project {
  id: number;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  live: string | null;
  badge?: string;
}

const projects: Project[] = [
  {
    id: 4,
    name: "My Pay",
    badge: "Solo Project",
    tagline: "Shift tracker & PAYG tax estimator (Australia)",
    description:
      "Solo-built full-stack app for Australian shift workers: log shifts, apply multiple Award pay rates, and estimate gross, PAYG tax and net pay. Bilingual (English & Vietnamese). React frontend, Express API, shared pay/tax engine, Supabase Auth + Postgres with RLS, deployed on Vercel.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel",
    ],
    github: "https://github.com/mhuy07092004/My-Pay",
    live: "https://wheresmypay.vercel.app/",
  },
  {
    id: 5,
    name: "Relaive",
    tagline: "AI-assisted property appraisal",
    description:
      "Frontend engineer on a team-built platform for Australian property valuation. Built the report-creation UI across four dashboards (agent, valuer, investor, buyer) that share one layout and design system, with tools that differ by role. React/TypeScript, with a GSAP landing page.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "GSAP", "Vercel"],
    github:
      "https://github.com/mhuy07092004/Real-Estate-Valuation-Narrative-Generator",
    live: "https://www.relaive.com.au/",
  },
  {
    id: 1,
    name: "ParkIt",
    tagline: "Smart parking system",
    description:
      "Frontend for a team parking system: a React (Vite) app with role-based routing for drivers, admins and a touchscreen kiosk. Built the driver flows (lot search, reservations, bookings and subscriptions), the admin dashboard (occupancy, analytics and an AI camera view) and a Three.js lot map.",
    tech: ["React", "JavaScript", "Python", "Flask", "PostgreSQL"],
    github: "https://github.com/httn113/CSCI334---ParkIT",
    live: "https://parkit-n05lsq1v7-longtran1406s-projects.vercel.app/login",
  },
  {
    id: 2,
    name: "Workmate",
    tagline: "Smart job matching",
    description:
      "Built a React/Tailwind job-matching web UI: dashboards, role-based auth screens, filtered job search, profile and application flows.",
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
      tech: ["React", "TypeScript", "GSAP", "Tailwind CSS",],
    github: "https://github.com/mhuy07092004/9611_Kafe",
    live: "https://9611kafe.vercel.app/",
  },
];

export default projects;
