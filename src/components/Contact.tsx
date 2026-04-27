import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const LINKS = [
  {
    icon: <FiMail size={22} />,
    label: "Email",
    href: "mailto:mhuy07092004@gmail.com",
    display: "Conact Me Here",
  },
  {
    icon: <FiGithub size={22} />,
    label: "GitHub",
    href: "https://github.com/mhuy07092004",
    display: "All My Projects",
  },
  {
    icon: <FiLinkedin size={22} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/minh-huy-loi-419079277/",
    display: "My Profile",
  },
];

export default function Contact() {
  const sectionRef = useScrollAnimation(".anim");

  return (
    <section
      id="contact"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="section-padding bg-cream-100 font-mono"
    >
      <div className="max-w-2xl mx-auto text-center">
        <p className="anim text-xs tracking-[0.3em] uppercase text-amber-600 mb-3">
          04 / Contact
        </p>
        <h2 className="anim text-3xl md:text-4xl font-bold text-charcoal-900 mb-5 tracking-tight">
          Let's Connect
        </h2>
        <p className="anim text-warm-gray text-base leading-relaxed mb-12">
          Open to internships, fresher roles, and collaborations — especially
          anything at the intersection of frontend and security. Feel free to
          reach out.
        </p>

        <div className="anim flex flex-col sm:flex-row items-center justify-center gap-4">
          {LINKS.map(({ icon, label, href, display }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 border border-cream-300 hover:border-amber-400 bg-cream-200 hover:bg-amber-50 rounded-2xl p-6 w-44 transition-all duration-200"
            >
              <span className="text-warm-gray group-hover:text-amber-600 transition-colors">
                {icon}
              </span>
              <span className="font-semibold text-charcoal-900 text-sm group-hover:text-amber-700 transition-colors">
                {label}
              </span>
              <span className="text-[11px] text-warm-muted text-center leading-snug break-all">
                {display}
              </span>
            </a>
          ))}
        </div>

        <p className="anim mt-14 text-sm text-warm-muted">
          Find me anywhere above. I typically respond within 48 hrs.
        </p>
      </div>
    </section>
  );
}
