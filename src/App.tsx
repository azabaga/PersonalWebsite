import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { AboutSection } from "./sections/AboutSection";
import { CareerDirectionSection } from "./sections/CareerDirectionSection";
import { ContactSection } from "./sections/ContactSection";
import { EducationSection } from "./sections/EducationSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";
import { siteConfig } from "./data/profile";
import "./styles/app.css";

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function useJsonLd() {
  return useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Person",
      name: siteConfig.personName,
      jobTitle: siteConfig.title,
      url: siteConfig.canonicalUrl,
      email: `mailto:${siteConfig.email}`,
      sameAs: [siteConfig.github, siteConfig.linkedin],
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "University of Tuzla",
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "Bosnia and Herzegovina",
      },
    }),
    []
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const jsonLd = useJsonLd();

  useEffect(() => {
    document.title = "Osman Azabagic | Software Engineer Portfolio";

    const metaDescription =
      document.querySelector('meta[name="description"]') ??
      document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    metaDescription.setAttribute(
      "content",
      "Portfolio website for Osman Azabagic, a software engineer with backend, distributed systems, and telecommunications engineering background."
    );
    document.head.appendChild(metaDescription);

    const ogPairs = [
      ["property", "og:title", "Osman Azabagic | Software Engineer Portfolio"],
      [
        "property",
        "og:description",
        "Backend, distributed systems, ETL, and telecommunications engineering portfolio.",
      ],
      ["property", "og:type", "website"],
      ["property", "og:url", siteConfig.canonicalUrl],
      ["name", "twitter:card", "summary_large_image"],
      ["name", "twitter:title", "Osman Azabagic | Software Engineer Portfolio"],
      [
        "name",
        "twitter:description",
        "Backend, distributed systems, ETL, and telecommunications engineering portfolio.",
      ],
    ] as const;

    const createdTags: HTMLMetaElement[] = [];
    for (const [attribute, name, content] of ogPairs) {
      const existingTag = document.head.querySelector(
        `meta[${attribute}="${name}"]`
      );
      const tag: HTMLMetaElement =
        existingTag instanceof HTMLMetaElement
          ? existingTag
          : document.createElement("meta");
      tag.setAttribute(attribute, name);
      tag.setAttribute("content", content);
      if (!tag.parentElement) {
        document.head.appendChild(tag);
        createdTags.push(tag);
      }
    }

    const canonical =
      document.head.querySelector('link[rel="canonical"]') ??
      document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", siteConfig.canonicalUrl);
    document.head.appendChild(canonical);

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      script.remove();
      createdTags.forEach((tag) => tag.remove());
    };
  }, [jsonLd]);

  return (
    <div className="pageShell">
      <a className="skipLink" href="#main-content">
        Skip to content
      </a>
      <header className="siteHeader">
        <a className="brand" href="#top">
          <span className="brandMark">OA</span>
          <span>
            <strong>{siteConfig.personName}</strong>
            <small>{siteConfig.title}</small>
          </span>
        </a>
        <button
          className="menuButton"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
        <nav
          id="site-navigation"
          className={`siteNav ${isMenuOpen ? "open" : ""}`}
          aria-label="Primary navigation"
        >
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={siteConfig.cvDownloadPath} download className="navButton">
            Download CV
          </a>
        </nav>
      </header>

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <CareerDirectionSection />
        <ContactSection />
      </main>

      <footer className="siteFooter">
        <p>
          {siteConfig.personName} · {new Date().getFullYear()} · Built with React, TypeScript, and Vite.
        </p>
        <div className="footerLinks">
          <a href={siteConfig.repoUrl}>Repository link TODO</a>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
