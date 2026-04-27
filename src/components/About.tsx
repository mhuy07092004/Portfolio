import { useScrollAnimation } from "../hooks/useScrollAnimation";

const LEARNING_BADGES = [
  "API",
  "Deployment",
  "Web Security",
  "OWASP",
  "Kali Linux",
];

export default function About() {
  const sectionRef = useScrollAnimation(".anim");

  return (
    <section
      id="about"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="section-padding bg-cream-200 font-mono"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="anim text-xs tracking-[0.3em] uppercase text-amber-600 mb-3">
          01 / About
        </p>
        <h2 className="anim text-3xl md:text-4xl font-bold text-charcoal-900 mb-14 tracking-tight">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Avatar card */}
          <div className="anim">
            <div className="rounded-2xl overflow-hidden border border-amber-200 bg-cream-300 aspect-square max-w-sm mx-auto md:mx-0 flex flex-col items-center justify-center gap-4 p-8">
              {/* Placeholder avatar */}
              <div className="w-28 h-28 rounded-full bg-amber-100 border-2 border-amber-400 flex items-center justify-center text-5xl text-amber-500 font-bold select-none">
                HL
              </div>
              <div className="text-center">
                <p className="font-bold text-charcoal-900 text-lg">Hayden Loi</p>
                <p className="text-sm text-warm-gray mt-1">Frontend Developer</p>
                <p className="text-xs text-warm-muted mt-0.5 tracking-wide">
                  Sydney, Australia
                </p>
              </div>
              <div className="mt-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-300 text-xs text-amber-700 font-medium tracking-wide">
                🎓 Computer Science Student
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-8">
            <div className="anim space-y-4 text-warm-gray leading-relaxed text-[15px]">
              <p>
                I'm a Computer Science student at the University of Wollongong and working as a Frontend Developer,
                currently building real-world products with React and TypeScript.
                I care deeply about both the user experience and what happens
                under the hood.
              </p>
              <p>
                My long-term goal is to transition into{" "}
                <span className="text-amber-600 font-semibold">
                  Security Engineering
                </span>{" "}
                — I'm actively studying application security, networking
                fundamentals, and offensive tooling to bridge the gap between
                clean frontend work and robust system protection.
              </p>
              <p>
                When I'm not coding, I will be either exploring new technologies or playing games.
              </p>
            </div>

            {/* Currently Learning */}
            <div className="anim">
              <p className="text-xs text-warm-muted uppercase tracking-[0.2em] mb-3">
                Currently Learning
              </p>
              <div className="flex flex-wrap gap-2">
                {LEARNING_BADGES.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-700 text-xs font-medium tracking-wide"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div className="anim grid grid-cols-3 gap-4">
              {[
                { value: "2", label: "Project\nDeployed" },
                { value: "3+", label: "Projects\nIn Progress" },
                { value: "∞", label: "Things\nLearning" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="border border-cream-300 rounded-xl p-4 bg-cream-100 text-center"
                >
                  <p className="text-2xl font-bold text-amber-600">{value}</p>
                  <p className="text-xs text-warm-gray mt-1 whitespace-pre-line leading-tight">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
