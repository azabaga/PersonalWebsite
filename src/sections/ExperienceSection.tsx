import { Section } from "../components/Section";
import { TagList } from "../components/TagList";
import { experience } from "../data/experience";
import styles from "../styles/cards.module.css";

export function ExperienceSection() {
  return (
    <Section id="experience" eyebrow="Professional history" title="Experience">
      <div className={styles.column}>
        {experience.map((item) => (
          <article key={`${item.company}-${item.role}`} className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <h3>{item.role}</h3>
                <p className={styles.subtle}>
                  {item.company} · {item.domain}
                </p>
              </div>
              <p className={styles.badge}>{item.dates}</p>
            </div>
            <p>{item.summary}</p>
            <ul className={styles.bullets}>
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <TagList items={item.technologies} />
          </article>
        ))}
      </div>
    </Section>
  );
}
