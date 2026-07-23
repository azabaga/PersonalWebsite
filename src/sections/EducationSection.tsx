import { Section } from "../components/Section";
import { education } from "../data/education";
import styles from "../styles/cards.module.css";

export function EducationSection() {
  return (
    <Section id="education" eyebrow="Academic background" title="Education">
      <div className={styles.column}>
        {education.map((item) => (
          <article key={`${item.institution}-${item.degree}`} className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <h3>{item.degree}</h3>
                <p className={styles.subtle}>
                  {item.institution} · {item.field}
                </p>
              </div>
              <p className={styles.badge}>{item.status}</p>
            </div>
            <p>{item.dates}</p>
            <ul className={styles.bullets}>
              {item.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
