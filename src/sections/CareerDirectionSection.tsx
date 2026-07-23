import { Section } from "../components/Section";
import { careerDirection } from "../data/profile";
import styles from "../styles/content.module.css";

export function CareerDirectionSection() {
  return (
    <Section id="direction" eyebrow="Trajectory" title={careerDirection.heading}>
      <div className={styles.directionPanel}>
        {careerDirection.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
