import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { ActionLink } from "../components/ActionLink";
import { heroStats, siteConfig } from "../data/profile";
import styles from "../styles/hero.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <div className={styles.copy}>
        <p className={styles.kicker}>Software, telecom, and systems engineering</p>
        <h1 id="hero-title">{siteConfig.personName}</h1>
        <p className={styles.identity}>
          {siteConfig.title} with a backend, distributed-systems, and telecommunications engineering profile.
        </p>
        <p className={styles.summary}>{siteConfig.valueProposition}</p>
        <div className={styles.actions}>
          <ActionLink href="#projects">
            View projects <ArrowRight size={16} aria-hidden="true" />
          </ActionLink>
          <ActionLink href="#experience" variant="secondary">
            View experience
          </ActionLink>
          <ActionLink href={siteConfig.cvDownloadPath} download variant="secondary">
            Download CV <Download size={16} aria-hidden="true" />
          </ActionLink>
        </div>
        <div className={styles.actions}>
          <ActionLink
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            variant="ghost"
          >
            <Github size={16} aria-hidden="true" /> GitHub
          </ActionLink>
          <ActionLink
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            variant="ghost"
          >
            <Linkedin size={16} aria-hidden="true" /> LinkedIn
          </ActionLink>
          <ActionLink href={`mailto:${siteConfig.email}`} variant="ghost">
            <Mail size={16} aria-hidden="true" /> Contact
          </ActionLink>
        </div>
      </div>
      <aside className={styles.panel} aria-label="Engineering status panel">
        <div className={styles.panelHeader}>
          <span>ENGINEERING STATUS</span>
          <span>
            LIVE <ExternalLink size={14} aria-hidden="true" />
          </span>
        </div>
        <div className={styles.grid}>
          {heroStats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <dl className={styles.meta}>
          <div>
            <dt>Focus</dt>
            <dd>Backend systems, ETL, event-driven processing, reliability</dd>
          </div>
          <div>
            <dt>Academic base</dt>
            <dd>Electrical engineering, telecommunications</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>{siteConfig.location}</dd>
          </div>
          <div>
            <dt>Career direction</dt>
            <dd>Software-intensive communications and hardware-adjacent systems</dd>
          </div>
        </dl>
      </aside>
    </section>
  );
}
