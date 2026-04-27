import { useRef } from "react";
import type { ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiMail, FiLinkedin } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

type ContactVariant = "github" | "linkedin" | "email";

interface ContactLink {
  icon: ReactNode;
  label: string;
  href: string;
  display: string;
  variant: ContactVariant;
}

const VARIANT_STYLES: Record<
  ContactVariant,
  {
    bg: string;
    border: string;
    hoverBorder: string;
    hoverShadow: string;
    iconColor: string;
    labelColor: string;
    displayColor: string;
  }
> = {
  github: {
    bg: "bg-[#0d1117]",
    border: "border-[#30363d]",
    hoverBorder: "hover:border-[#58a6ff]",
    hoverShadow: "hover:shadow-[0_8px_32px_rgba(88,166,255,0.18)]",
    iconColor: "#c9d1d9",
    labelColor: "text-[#e6edf3]",
    displayColor: "text-[#8b949e]",
  },
  linkedin: {
    bg: "bg-white",
    border: "border-[#0A66C2]",
    hoverBorder: "hover:border-[#004182]",
    hoverShadow: "hover:shadow-[0_8px_32px_rgba(10,102,194,0.18)]",
    iconColor: "#0A66C2",
    labelColor: "text-[#0A66C2]",
    displayColor: "text-[#5b7fa6]",
  },
  email: {
    bg: "bg-[#fff5f5]",
    border: "border-[#EA4335]",
    hoverBorder: "hover:border-[#c5221f]",
    hoverShadow: "hover:shadow-[0_8px_32px_rgba(234,67,53,0.18)]",
    iconColor: "#EA4335",
    labelColor: "text-[#B91C1C]",
    displayColor: "text-[#9b6060]",
  },
};

const LINKS: ContactLink[] = [
  {
    icon: <FiMail size={26} />,
    label: "Email",
    href: "mailto:mhuy07092004@gmail.com",
    display: "Contact me here",
    variant: "email",
  },
  {
    icon: <SiGithub size={26} />,
    label: "GitHub",
    href: "https://github.com/mhuy07092004",
    display: "All my projects",
    variant: "github",
  },
  {
    icon: <FiLinkedin size={26} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/minh-huy-loi-419079277/",
    display: "My profile",
    variant: "linkedin",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const metaEls = gsap.utils.toArray<HTMLElement>(
        ".contact-meta",
        sectionRef.current ?? undefined
      );
      metaEls.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(
          ".contact-card",
          sectionRef.current ?? undefined
        );
        gsap.set(cards, { y: 60, opacity: 0, scale: 0.9 });
        ScrollTrigger.batch(cards, {
          onEnter: (batch) =>
            gsap.to(batch, {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.13,
            }),
          start: "top 85%",
          once: true,
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-cream-100 font-mono"
    >
      <div className="max-w-2xl mx-auto text-center">
        <p className="contact-meta text-xs tracking-[0.3em] uppercase text-amber-600 mb-3">
          04 / Contact
        </p>
        <h2 className="contact-meta text-3xl md:text-4xl font-bold text-charcoal-900 mb-5 tracking-tight">
          Let's Connect
        </h2>
        <p className="contact-meta text-warm-gray text-base leading-relaxed mb-12">
          Open to internships, fresher roles, and collaborations — especially
          anything at the intersection of frontend and security. Feel free to
          reach out.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          {LINKS.map(({ icon, label, href, display, variant }) => {
            const s = VARIANT_STYLES[variant];
            return (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`contact-card group flex flex-col items-center gap-3 border rounded-2xl p-7 w-44 transition-all duration-250 hover:scale-[1.06] ${s.bg} ${s.border} ${s.hoverBorder} ${s.hoverShadow}`}
              >
                <span
                  style={{ color: s.iconColor }}
                  className="transition-transform duration-200 group-hover:scale-110"
                >
                  {icon}
                </span>
                <span className={`font-bold text-sm ${s.labelColor}`}>
                  {label}
                </span>
                <span
                  className={`text-[11px] text-center leading-snug ${s.displayColor}`}
                >
                  {display}
                </span>
              </a>
            );
          })}
        </div>

        <p className="contact-meta mt-14 text-sm text-warm-muted">
          Find me anywhere above. I typically respond within 48 hrs.
        </p>
      </div>
    </section>
  );
}
