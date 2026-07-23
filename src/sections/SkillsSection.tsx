import { Section } from "../components/Section";
import { skillGroups } from "../data/skills";
import styles from "../styles/cards.module.css";

export function SkillsSection() {
  return (
    <Section id="skills" eyebrow="Capability map" title="Skills">
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <article key={group.title} className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>{group.title}</h3>
            </div>
            <p className={styles.subtle}>{group.emphasis}</p>
            <ul className={styles.bullets}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
