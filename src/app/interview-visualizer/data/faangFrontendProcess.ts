import { InterviewProcessTemplate } from "../types/interviewProcess";

export const faangFrontendProcess: InterviewProcessTemplate = {
  company: "FAANG Example (Google, Meta, Amazon)",
  role: "Frontend Engineer",
  process_template: "FAANG",
  steps: [
    {
      id: "step1",
      title: "Recruiter Screen",
      description:
        "Initial recruiter call to check motivation, fit, and experience.",
      evaluation_criteria: [
        "Communication clarity",
        "Motivation",
        "Basic technical fit",
      ],
      typical_questions: [
        "Why do you want to work here?",
        "Tell me about your experience.",
      ],
      failure_points: ["Unclear motivation", "Poor communication"],
      estimated_duration_days: 3,
    },
    {
      id: "step2",
      title: "Online Coding Round",
      description: "Timed online coding challenge.",
      evaluation_criteria: [
        "Algorithmic problem solving",
        "Code efficiency",
        "Correctness",
      ],
      typical_questions: [
        "Leetcode-style problems",
        "String / Array / Graph problems",
      ],
      failure_points: ["Incorrect solution", "Timeouts"],
      estimated_duration_days: 5,
    },
    {
      id: "step3",
      title: "Technical Phone Screen",
      description: "Live interview on shared doc.",
      evaluation_criteria: [
        "Problem solving",
        "Code readability",
        "Communication",
      ],
      typical_questions: [
        "Implement a debounce function.",
        "Design a component.",
      ],
      failure_points: ["Poor explanations", "Unoptimized code"],
      estimated_duration_days: 7,
    },
    {
      id: "step4",
      title: "Onsite Interview Loop",
      description:
        "Multiple interviews covering DSA, System Design, Frontend Architecture, Culture Fit.",
      evaluation_criteria: [
        "DSA skills",
        "Frontend architecture",
        "Communication",
        "Team fit",
      ],
      typical_questions: [
        "Design a component library.",
        "Optimize React app performance.",
      ],
      failure_points: ["Shallow frontend knowledge", "Poor culture fit"],
      estimated_duration_days: 14,
    },
    {
      id: "step5",
      title: "Offer Discussion",
      description: "Discuss offer and compensation.",
      evaluation_criteria: ["Professionalism", "Clear expectations"],
      typical_questions: ["What are your compensation expectations?"],
      failure_points: ["Aggressive negotiation"],
      estimated_duration_days: 2,
    },
  ],
  total_estimated_duration_days: 31,
};
