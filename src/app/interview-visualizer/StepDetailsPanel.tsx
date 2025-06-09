import { InterviewProcessStep } from "./types/interviewProcess";

interface StepDetailsPanelProps {
  step: InterviewProcessStep;
}

export default function StepDetailsPanel({ step }: StepDetailsPanelProps) {
  return (
    <div className="border border-gray-300 dark:border-gray-700 p-6 rounded-lg bg-gray-50 dark:bg-gray-800 text-black dark:text-white shadow-md">
      <h2 className="text-xl font-bold mb-4">{step.title}</h2>
      <p className="mb-4">{step.description}</p>

      <h3 className="font-semibold mb-2">Evaluation Criteria:</h3>
      <ul className="list-disc list-inside mb-4 space-y-1">
        {step.evaluation_criteria.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h3 className="font-semibold mb-2">Typical Questions:</h3>
      <ul className="list-disc list-inside mb-4 space-y-1">
        {step.typical_questions.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h3 className="font-semibold mb-2">Failure Points:</h3>
      <ul className="list-disc list-inside mb-4 space-y-1">
        {step.failure_points.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        Estimated Duration: {step.estimated_duration_days} days
      </p>
    </div>
  );
}
