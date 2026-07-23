export type ExperienceItem = {
  company: string;
  role: string;
  dates: string;
  domain: string;
  summary: string;
  technologies: string[];
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Personify Health",
    role: "Backend Software Engineer",
    dates: "2023 - Present",
    domain: "Eligibility, enrollment, biometrics, and rewards data systems",
    summary:
      "Builds and operates backend services and ingestion flows for production systems where correctness, system boundaries, and operational reliability matter.",
    technologies: [
      "Java",
      "Kotlin",
      "Spring Boot",
      "Kafka",
      "PostgreSQL",
      "AWS SNS/SQS",
      "Airflow",
      "Terraform",
      "REST APIs",
    ],
    highlights: [
      "Built and maintained backend services for large-scale file-ingestion and eligibility-processing workflows.",
      "Worked across scheduled ETL pipelines and event-driven processing models, including Kafka-based integrations and AWS messaging patterns.",
      "Resolved recurring production issues in data pipelines, including data-integrity gaps, message-flow failures, and file-processing bottlenecks.",
      "Designed and delivered changes for unified eligibility-processing capabilities that reduced sponsor-specific one-off logic.",
      "Owned release verification across multiple production deployments and contributed to safe rollout patterns through testing and feature-flag discipline.",
    ],
  },
];
