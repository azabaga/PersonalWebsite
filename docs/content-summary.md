# Internal Content Summary

This summary documents which Google Drive files were used to build the portfolio content and how their information was filtered for public use.

## Primary sources used

1. `OsmanAzabagic CV.pdf`
   - Confirmed: name, current role, employer, work start year (`2023`), degree title, institution, graduation year (`2026`), GitHub URL, LinkedIn URL, public email, region-level location (`Bosnia and Herzegovina`), LMU Race Ops project.
   - Excluded: phone number, precise address, city-level address details.

2. `osman-cv-and-bio-en.md`
   - Confirmed/generalized: backend systems focus, enrollment and eligibility domain, ETL and file ingestion work, Kafka/event-driven architecture, incident-response ownership, internal tooling, Airflow exposure.
   - Excluded: internal platform names when not useful publicly and sensitive client/system specifics.

3. `osman-linkedin-experience.md`
   - Confirmed/generalized: incident rotation, unified eligibility architecture work, data-integrity fixes, release verification, recurring cross-system debugging patterns.
   - Used to shape impact-oriented role bullets.

4. `osman-tech-stack-inventory.md`
   - Confirmed: Java, Kotlin, SQL, Spring, Hibernate/JPA, Kafka, PostgreSQL, AWS RDS, SNS/SQS, Airflow, Terraform, Kubernetes, Keycloak, Unleash, CDC, GitLab, Jira, Confluence, REST APIs.
   - Marked as confidence-based where the source itself labels items as inferred or medium confidence.

5. `osman-azabagic-engineering-profile.md`
   - Confirmed: cross-system ownership, performance optimization, defensive batch processing, feature-flag discipline, cross-repo debugging, ETL and orchestration involvement, testing discipline.
   - Excluded: internal MR links and repo-specific jargon from user-facing copy.

6. `osman-azabagic-measurable-achievements.md`
   - Confirmed: 49+ production incidents resolved, 8+ production releases verified, 185+ merge requests, recurring hotfix work, long-running subsystem ownership, measurable engineering themes.
   - Excluded: named clients, ticket IDs, member counts, sponsor IDs, and proprietary incident details.

7. `osman-skills-value-analysis.md`
   - Confirmed: strongest skills are production troubleshooting, event-driven systems, data integrity, cross-system integration, and risk-aware delivery.
   - Used for the skills section and career-direction narrative.

8. `University Diploma.pdf`
   - Presence used as supporting evidence that the bachelor degree is completed, but the PDF was not text-extractable in this session.

9. `EDITION04.Student.Agreement.EMIMEP_DRAFT.pdf`
   - Indicates details of the EMIMEP 2026-2028 program, but the student fields are blank.
   - Not sufficient to claim confirmed enrollment. Treated as unverified context only.

10. `2026-2028.Handbook`
    - Confirms the EMIMEP program exists and covers microwave electronics and photonics.
    - Not sufficient to claim admission or attendance.

## Confirmed facts included on the site

- Osman Azabagic is a software engineer.
- Current employer: Personify Health.
- Work history at Personify Health runs from `2023` to present.
- Background includes backend systems, ETL/data ingestion, distributed systems, Kafka, Spring Boot, PostgreSQL, production incident response, and release verification.
- Education includes a completed Bachelor of Electrical Engineering in Telecommunications from the University of Tuzla in `2026`.
- Public links verified from CV: GitHub, LinkedIn, and professional email.
- Public project link verified: `LMU Race Ops`.

## Unverified or intentionally withheld items

- Exact work start month.
- Exact graduation month.
- Confirmed admission/enrollment into EMIMEP.
- Any phone number, precise street address, internal system identifiers, client names, sponsor IDs, or ticket IDs.
- Additional public project repositories beyond the verified LMU Race Ops link.

## Content decisions

- Professional-work case studies were rewritten into generalized, confidentiality-safe project cards.
- Career direction emphasizes the intersection of software and telecommunications engineering without claiming a confirmed master’s enrollment.
- Visible TODOs are left where a stronger public source would improve credibility, such as a polished PDF CV, a second public repository link, and a canonical deployed URL.
