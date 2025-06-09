import { InterviewProcessTemplate } from "../types/interviewProcess";

export const startupFrontendProcess: InterviewProcessTemplate = {
  company: "Generic Startup",
  role: "Frontend Engineer",
  process_template: "Startup",
  steps: [
    {
      id: "step1",
      title: "Founder/CTO Intro Call",
      description:
        "Informal chat with founder or CTO to assess culture fit, motivation, and basic technical background.",
      evaluation_criteria: [
        "Passion for startup work",
        "Alignment with product vision",
        "Communication and team mindset",
      ],
      typical_questions: [
        "Why do you want to join an early-stage company?",
        "How do you handle uncertainty?",
        "What is your technical background?",
      ],
      failure_points: [
        "Lack of enthusiasm for startup environment",
        "Unclear understanding of the product",
        "Weak communication",
      ],
      estimated_duration_days: 2,
    },
    {
      id: "step2",
      title: "Technical Interview",
      description:
        "Live coding session and discussion of technical architecture.",
      evaluation_criteria: [
        "Practical problem solving",
        "Frontend fundamentals",
        "Ability to deliver production-ready code",
      ],
      typical_questions: [
        "Build a responsive component from scratch.",
        "Implement a simple state management flow.",
        "How do you manage performance in a React app?",
      ],
      failure_points: [
        "Overengineering",
        "Inability to deliver working code",
        "Poor understanding of HTML/CSS fundamentals",
      ],
      estimated_duration_days: 5,
    },
    {
      id: "step3",
      title: "Team Interview",
      description:
        "Discussion with other engineers or designers to assess collaboration skills and depth of experience.",
      evaluation_criteria: [
        "Collaboration mindset",
        "Openness to feedback",
        "Technical communication",
      ],
      typical_questions: [
        "Tell us about your most recent project.",
        "How do you approach design handoff?",
        "How do you handle disagreements in a team?",
      ],
      failure_points: [
        "Arrogant behavior",
        "Lack of team experience",
        "Overly defensive or rigid",
      ],
      estimated_duration_days: 3,
    },
    {
      id: "step4",
      title: "Offer Discussion",
      description: "Final discussion of offer, equity, and next steps.",
      evaluation_criteria: [
        "Professional negotiation approach",
        "Alignment with compensation expectations",
        "Excitement about joining",
      ],
      typical_questions: [
        "What motivates you in this role?",
        "What are your expectations regarding salary and equity?",
        "When can you start?",
      ],
      failure_points: [
        "Unrealistic equity expectations",
        "Unclear commitment",
        "Poor negotiation tone",
      ],
      estimated_duration_days: 2,
    },
  ],
  total_estimated_duration_days: 12,
};
