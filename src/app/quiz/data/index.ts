import { questionsBeginner } from "./beginner";
import { questionsAdvanced } from "./advanced";
import { Question } from "./fsTypes";
import { questionsIntermediate } from "./intermediate";

export const questionsByLevel: Record<
  "beginner" | "intermediate" | "advanced",
  Question[]
> = {
  beginner: questionsBeginner,
  intermediate: questionsIntermediate,
  advanced: questionsAdvanced,
};
