import { InterviewProcessTemplate } from "../types/interviewProcess";

export const remoteFrontendProcess: InterviewProcessTemplate = {
  company: "Remote Global Company (GitLab, Automattic)",
  role: "Frontend Engineer",
  process_template: "Remote-First",
  steps: [
    {
      id: "step1",
      title: "Async Application / Screening",
      description: "Written application or async video intro.",
      evaluation_criteria: ["Writing skills", "Motivation"],
      typical_questions: [
        "Why remote work?",
        "Describe your async work experience.",
      ],
      failure_points: ["Poor writing"],
      estimated_duration_days: 4,
    },
    {
      id: "step2",
      title: "Technical Coding Challenge",
      description: "Async or live coding exercise.",
      evaluation_criteria: ["Practical React skills", "Code readability"],
      typical_questions: [
        "Implement a React component.",
        "Optimize performance.",
      ],
      failure_points: ["Messy code"],
      estimated_duration_days: 5,
    },
    {
      id: "step3",
      title: "Architecture Interview",
      description: "Frontend architecture discussion.",
      evaluation_criteria: ["Component architecture", "Scalability"],
      typical_questions: ["Design a dashboard architecture."],
      failure_points: ["No system thinking"],
      estimated_duration_days: 6,
    },
    {
      id: "step4",
      title: "Remote Collaboration Interview",
      description:
        "Interview focused on async collaboration and communication.",
      evaluation_criteria: ["Async communication", "Collaboration"],
      typical_questions: ["How do you manage remote work?"],
      failure_points: ["Poor async skills"],
      estimated_duration_days: 3,
    },
    {
      id: "step5",
      title: "Offer & Values Fit",
      description: "Final discussion to check alignment with company values.",
      evaluation_criteria: ["Values fit"],
      typical_questions: ["What values do you bring?"],
      failure_points: ["Mismatch in values"],
      estimated_duration_days: 3,
    },
  ],
  total_estimated_duration_days: 21,
};
