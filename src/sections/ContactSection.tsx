import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Section } from "../components/Section";
import { contactNotes, siteConfig } from "../data/profile";
import styles from "../styles/cards.module.css";

export function ContactSection() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's talk">
      <div className={styles.contactCard}>
        <p className={styles.summaryText}>
          If you are hiring for backend, distributed systems, data-platform, or software-intensive engineering roles, I am happy to connect.
        </p>
        <div className={styles.contactLinks}>
          <a href={`mailto:${siteConfig.email}`}>
            <Mail size={16} aria-hidden="true" /> {siteConfig.email}
          </a>
          <a href={siteConfig.github} target="_blank" rel="noreferrer">
            <Github size={16} aria-hidden="true" /> GitHub
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={16} aria-hidden="true" /> LinkedIn
          </a>
          <span>
            <MapPin size={16} aria-hidden="true" /> {siteConfig.location}
          </span>
        </div>
        <p className={styles.todo}>{siteConfig.availability}</p>
        <ul className={styles.bullets}>
          {contactNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
