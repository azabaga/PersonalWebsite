export type SkillGroup = {
  title: string;
  emphasis: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend Engineering",
    emphasis: "Professional production experience",
    items: ["Java", "Kotlin", "Spring Boot", "REST APIs", "Batch processing"],
  },
  {
    title: "Programming Languages",
    emphasis: "Professional and project experience",
    items: ["Java", "Kotlin", "TypeScript", "SQL", "Python"],
  },
  {
    title: "Distributed Systems and Messaging",
    emphasis: "Professional production experience",
    items: ["Apache Kafka", "Event-driven architecture", "AWS SNS", "AWS SQS", "CDC"],
  },
  {
    title: "Databases and Data Processing",
    emphasis: "Professional production experience",
    items: ["PostgreSQL", "ETL pipelines", "Schema design", "Data validation", "File ingestion"],
  },
  {
    title: "Cloud, DevOps, and Observability",
    emphasis: "Professional production experience",
    items: ["AWS RDS", "Terraform", "Airflow", "Kubernetes", "New Relic", "Feature flags"],
  },
  {
    title: "Embedded Systems and Electronics",
    emphasis: "Academic familiarity and engineering direction",
    items: ["Electronics fundamentals", "Systems thinking", "Hardware-adjacent problem solving", "TODO: Add specific embedded tools if public"],
  },
  {
    title: "Telecommunications and Signal-Oriented Engineering",
    emphasis: "Academic background and current interest",
    items: ["Telecommunications engineering", "Communications systems", "RF-adjacent interests", "DSP-adjacent interests", "Photonics-related graduate direction pending verification"],
  },
  {
    title: "Tools and Collaboration",
    emphasis: "Professional production experience",
    items: ["GitLab", "Jira", "Confluence", "Incident response", "Release verification"],
  },
  {
    title: "Spoken Languages",
    emphasis: "Verified from CV sources",
    items: ["Bosnian", "English", "German (CV-reported in separate source)"],
  },
];
