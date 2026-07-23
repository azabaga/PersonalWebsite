import { Section } from "../components/Section";
import { aboutParagraphs } from "../data/profile";
import styles from "../styles/content.module.css";

export function AboutSection() {
  return (
    <Section id="about" eyebrow="Overview" title="About">
      <div className={styles.aboutIntroPanel}>
        <p className={styles.kicker}>Software x Telecom Systems</p>
        <div className={styles.stack}>
          {aboutParagraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={index === 0 ? styles.aboutIntro : styles.lead}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
