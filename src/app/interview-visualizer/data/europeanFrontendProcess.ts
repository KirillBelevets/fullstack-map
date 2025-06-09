import { InterviewProcessTemplate } from "../types/interviewProcess";

export const europeanFrontendProcess: InterviewProcessTemplate = {
  company: "Generic European Product Company",
  role: "Frontend Engineer",
  process_template: "European Product Company",
  steps: [
    {
      id: "step1",
      title: "HR Screen",
      description:
        "Initial call with HR to assess cultural fit and motivation.",
      evaluation_criteria: [
        "Motivation for the company",
        "Communication style",
        "Company values alignment",
      ],
      typical_questions: [
        "Why are you interested in this company?",
        "What are your career goals?",
        "How do you handle work-life balance?",
      ],
      failure_points: [
        "Lack of interest in the product",
        "Poor communication",
        "Mismatch in values",
      ],
      estimated_duration_days: 3,
    },
    {
      id: "step2",
      title: "Technical Coding Interview",
      description: "Live coding session with an engineer.",
      evaluation_criteria: [
        "Code quality",
        "Problem solving",
        "Testing practices",
      ],
      typical_questions: [
        "Implement a React component with hooks.",
        "Write unit tests for a component.",
        "How do you ensure code readability?",
      ],
      failure_points: [
        "Messy code",
        "No tests",
        "No explanation of thought process",
      ],
      estimated_duration_days: 5,
    },
    {
      id: "step3",
      title: "System Design / Architecture Interview",
      description:
        "Interview to assess frontend architecture and scaling knowledge.",
      evaluation_criteria: [
        "Understanding of frontend architecture",
        "Handling complex UI flows",
        "Performance optimization",
      ],
      typical_questions: [
        "Design a scalable UI for a news feed.",
        "How would you handle localization in a multi-language app?",
        "How do you manage assets and caching?",
      ],
      failure_points: [
        "No understanding of scaling challenges",
        "Ignoring internationalization",
        "Overcomplicating simple solutions",
      ],
      estimated_duration_days: 7,
    },
    {
      id: "step4",
      title: "Team Fit Interview",
      description:
        "Discussion with future team members about working style and collaboration.",
      evaluation_criteria: [
        "Team player attitude",
        "Flexibility",
        "Cross-functional collaboration",
      ],
      typical_questions: [
        "How do you work with designers?",
        "How do you handle changing requirements?",
        "Describe a time you improved team processes.",
      ],
      failure_points: [
        "Rigid mindset",
        "Inability to collaborate",
        "Poor interpersonal skills",
      ],
      estimated_duration_days: 3,
    },
    {
      id: "step5",
      title: "Offer & Final Discussion",
      description: "Discussion of offer details and next steps.",
      evaluation_criteria: [
        "Clear communication",
        "Reasonable expectations",
        "Readiness to join",
      ],
      typical_questions: [
        "Are you ready to relocate (if required)?",
        "When can you start?",
        "What are your salary expectations?",
      ],
      failure_points: [
        "Unrealistic expectations",
        "Lack of readiness to join",
        "Last-minute doubts",
      ],
      estimated_duration_days: 2,
    },
  ],
  total_estimated_duration_days: 20,
};
