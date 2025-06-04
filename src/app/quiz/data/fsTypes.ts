export type Level = "beginner" | "intermediate" | "advanced";

export interface Question {
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
  tags: string[];
}
