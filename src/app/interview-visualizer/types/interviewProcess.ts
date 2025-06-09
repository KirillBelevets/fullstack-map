export interface InterviewProcessStep {
  id: string;
  title: string;
  description: string;
  evaluation_criteria: string[];
  typical_questions: string[];
  failure_points: string[];
  estimated_duration_days: number;
}

export interface InterviewProcessTemplate {
  company: string;
  role: string;
  process_template: string;
  steps: InterviewProcessStep[];
  total_estimated_duration_days: number;
}
