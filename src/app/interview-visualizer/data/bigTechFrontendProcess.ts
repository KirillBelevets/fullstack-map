import { InterviewProcessTemplate } from "../types/interviewProcess";

export const bigTechFrontendProcess: InterviewProcessTemplate = {
  company: 'Generic Big Tech',
  role: 'Frontend Engineer',
  process_template: 'Big Tech',
  steps: [
    {
      id: 'step1',
      title: 'Recruiter Screen',
      description: 'Initial call with a recruiter to assess motivation, communication, and basic fit for the role.',
      evaluation_criteria: [
        'Communication skills',
        'Interest in the company',
        'Basic role understanding',
      ],
      typical_questions: [
        'Tell me about yourself.',
        'Why are you interested in this role?',
        'What is your timeline for starting?',
      ],
      failure_points: [
        'Poor communication',
        'No clear motivation for the company',
        'Unrealistic expectations about role',
      ],
      estimated_duration_days: 3,
    },
    {
      id: 'step2',
      title: 'Online Coding Challenge',
      description: 'Automated online assessment to test basic coding and problem-solving ability.',
      evaluation_criteria: [
        'Algorithmic problem solving',
        'Code correctness',
        'Code efficiency',
      ],
      typical_questions: [
        'Leetcode-style problems',
        'JS array/object manipulation tasks',
      ],
      failure_points: [
        'Incorrect solutions',
        'Poor performance on edge cases',
        'Unoptimized code',
      ],
      estimated_duration_days: 5,
    },
    {
      id: 'step3',
      title: 'Technical Phone Interview',
      description: 'Live interview with an engineer — typically 1-2 problems, coding on a shared document.',
      evaluation_criteria: [
        'Problem solving under time pressure',
        'Code clarity and structure',
        'Communication of thought process',
      ],
      typical_questions: [
        'Implement debounce function.',
        'Parse and render nested comments from API.',
        'Optimize React component rendering.',
      ],
      failure_points: [
        'Silence during problem solving',
        'Lack of test cases',
        'Messy or unreadable code',
      ],
      estimated_duration_days: 7,
    },
    {
      id: 'step4',
      title: 'Onsite Interview Loop',
      description:
        'Series of 3-4 interviews covering System Design, Advanced Frontend, Coding, and Culture Fit.',
      evaluation_criteria: [
        'Frontend architecture understanding',
        'Depth of React/JS/DOM knowledge',
        'Team collaboration mindset',
        'Handling large-scale UI systems',
      ],
      typical_questions: [
        'Design a dashboard UI that scales to 100k users.',
        'How would you architect a component library?',
        'How do you handle performance bottlenecks in React?',
        'Tell me about a time you failed on a project.',
      ],
      failure_points: [
        'No understanding of frontend architecture',
        'Lack of React depth',
        'No clear ownership experience',
        'Arrogant or poor culture fit',
      ],
      estimated_duration_days: 10,
    },
    {
      id: 'step5',
      title: 'Offer Negotiation',
      description: 'Final stage: offer discussion and negotiation.',
      evaluation_criteria: [
        'Professionalism',
        'Communication clarity',
        'Reasonable expectations',
      ],
      typical_questions: [
        'What are your compensation expectations?',
        'Do you have competing offers?',
        'When can you start?',
      ],
      failure_points: [
        'Aggressive tone',
        'Unclear salary expectations',
        'Burning bridges during negotiation',
      ],
      estimated_duration_days: 3,
    },
  ],
  total_estimated_duration_days: 28,
};