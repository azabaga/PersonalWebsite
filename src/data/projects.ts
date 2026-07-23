export type ProjectItem = {
  name: string;
  category: string;
  status: string;
  summary: string;
  problem: string;
  implementation: string;
  decisions: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  placeholderNote?: string;
};

export const projects: ProjectItem[] = [
  {
    name: "LMU Race Ops",
    category: "Web application",
    status: "Completed",
    summary:
      "Operations dashboard for motorsport event workflows with realtime-style monitoring, filtering, and session detail views.",
    problem:
      "Race operations need quick visibility into sessions, status changes, and event data without relying on scattered tools.",
    implementation:
      "Built with Vite, React, and TypeScript on the frontend, backed by a Fastify and PostgreSQL API with seeded development data and Docker Compose setup.",
    decisions:
      "Focused on a fast local setup, clean environment-based configuration, and UI patterns that make event state readable at a glance.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Fastify",
      "PostgreSQL",
      "Docker Compose",
    ],
    githubUrl: "https://github.com/azabaga/lmu-race-ops",
  },
  {
    name: "Event-Driven ETL Backend",
    category: "Backend and distributed systems",
    status: "Completed",
    summary:
      "ETL backend for CSV ingestion, validation, Kafka publication, and separate handling of valid and invalid records.",
    problem:
      "Data ingestion systems need to process file uploads reliably while preserving validation outcomes and keeping downstream consumers decoupled.",
    implementation:
      "Implemented CSV upload handling, validation paths, message publication, and split persistence behavior for valid and rejected data paths.",
    decisions:
      "Used event publication to keep downstream processing loosely coupled and made invalid data handling a first-class concern rather than an afterthought.",
    technologies: ["Java", "Kafka", "ETL", "CSV", "Validation", "REST APIs"],
    placeholderNote: "TODO: Add a public repository URL if this project is available for sharing.",
  },
  {
    name: "Unified Eligibility Processing",
    category: "Professional case study",
    status: "Production",
    summary:
      "Generalized case study of architecture work for multi-sponsor eligibility processing in a production platform.",
    problem:
      "Eligibility workflows often accumulate sponsor-specific branching logic that makes change management and maintenance harder over time.",
    implementation:
      "Contributed metadata and pipeline design work that enabled a more reusable processing path instead of repeating custom logic per sponsor.",
    decisions:
      "The public case study keeps the architecture theme and engineering tradeoff, while removing internal platform names and proprietary details.",
    technologies: [
      "Kafka",
      "Metadata-driven design",
      "Data pipelines",
      "Schema design",
      "Distributed systems",
    ],
    placeholderNote:
      "Internal work summary only. No public repository or live demo is included.",
  },
  {
    name: "Production Reliability and Incident Response",
    category: "Operational engineering",
    status: "Ongoing",
    summary:
      "Ongoing reliability work across ingestion, enrollment, and cross-system data workflows in production.",
    problem:
      "High-volume production systems need more than feature delivery; they need careful debugging, safe rollouts, observability, and data-integrity controls.",
    implementation:
      "Investigated client-impacting production issues, fixed message-flow and data-consistency failures, improved rollout safety, and helped verify releases.",
    decisions:
      "Presented here as an engineering portfolio item because the work demonstrates debugging depth, risk management, and operational ownership.",
    technologies: [
      "Incident response",
      "Observability",
      "Release verification",
      "Root-cause analysis",
      "Data integrity",
    ],
    placeholderNote:
      "This is a confidentiality-safe summary of professional work rather than a standalone public repo.",
  },
];
