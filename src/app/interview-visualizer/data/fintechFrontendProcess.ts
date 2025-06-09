import { InterviewProcessTemplate } from "../types/interviewProcess";

export const fintechFrontendProcess: InterviewProcessTemplate = {
  company: "FinTech Product Company (Revolut, Wise, Klarna)",
  role: "Frontend Engineer",
  process_template: "FinTech Product",
  steps: [
    {
      id: "step1",
      title: "HR Intro Call",
      description: "Initial call to assess culture fit and basic background.",
      evaluation_criteria: ["Culture fit", "Interest in FinTech"],
      typical_questions: ["Why FinTech?", "Tell me about your recent work."],
      failure_points: ["Low interest in domain"],
      estimated_duration_days: 2,
    },
    {
      id: "step2",
      title: "Technical Coding Test",
      description: "Live or take-home coding challenge.",
      evaluation_criteria: [
        "Practical frontend skills",
        "Clean code",
        "Testing",
      ],
      typical_questions: ["Build a small dashboard component.", "Write tests."],
      failure_points: ["Messy code", "No tests"],
      estimated_duration_days: 5,
    },
    {
      id: "step3",
      title: "Technical Interview",
      description: "Interview with engineers to discuss architecture and code.",
      evaluation_criteria: [
        "Frontend architecture",
        "React knowledge",
        "Testing",
      ],
      typical_questions: [
        "Design a component library.",
        "How do you ensure quality?",
      ],
      failure_points: ["Poor architecture decisions"],
      estimated_duration_days: 7,
    },
    {
      id: "step4",
      title: "Team Fit Interview",
      description: "Interview with designers/product managers.",
      evaluation_criteria: ["Collaboration", "Communication"],
      typical_questions: ["How do you work with designers?"],
      failure_points: ["Rigid mindset"],
      estimated_duration_days: 3,
    },
    {
      id: "step5",
      title: "Offer Discussion",
      description: "Final offer discussion.",
      evaluation_criteria: ["Professionalism"],
      typical_questions: ["Salary expectations."],
      failure_points: ["Unrealistic expectations"],
      estimated_duration_days: 2,
    },
  ],
  total_estimated_duration_days: 19,
};
