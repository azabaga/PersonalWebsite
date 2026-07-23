import { ExternalLink, Github } from "lucide-react";
import { Section } from "../components/Section";
import { TagList } from "../components/TagList";
import { projects } from "../data/projects";
import styles from "../styles/cards.module.css";

export function ProjectsSection() {
  return (
    <Section id="projects" eyebrow="Selected work" title="Projects">
      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.name} className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.eyebrowLabel}>{project.category}</p>
                <h3>{project.name}</h3>
              </div>
              <p className={styles.badge}>{project.status}</p>
            </div>
            <p className={styles.summaryText}>{project.summary}</p>
            <dl className={styles.detailList}>
              <div>
                <dt>Problem</dt>
                <dd>{project.problem}</dd>
              </div>
              <div>
                <dt>Implementation</dt>
                <dd>{project.implementation}</dd>
              </div>
              <div>
                <dt>Engineering decisions</dt>
                <dd>{project.decisions}</dd>
              </div>
            </dl>
            <TagList items={project.technologies} />
            <div className={styles.linkRow}>
              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github size={16} aria-hidden="true" /> Repository
                </a>
              ) : null}
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <ExternalLink size={16} aria-hidden="true" /> Live demo
                </a>
              ) : null}
            </div>
            {project.placeholderNote ? (
              <p className={styles.todo}>{project.placeholderNote}</p>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
