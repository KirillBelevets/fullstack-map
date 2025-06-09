"use client";

import { useState, useEffect } from "react";
import {
  InterviewProcessTemplate,
  InterviewProcessStep,
} from "./types/interviewProcess";
import StepDetailsPanel from "./StepDetailsPanel";

interface ProcessVisualizerProps {
  template: InterviewProcessTemplate;
}

export default function ProcessVisualizer({
  template,
}: ProcessVisualizerProps) {
  const [selectedStep, setSelectedStep] = useState<InterviewProcessStep | null>(
    null
  );

  // Reset selected step when template changes → smoother UX
  useEffect(() => {
    setSelectedStep(null);
  }, [template]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 mb-6">
        {template.steps.map((step, index) => (
          <button
            key={step.id}
            className={`flex items-center justify-center px-4 py-2 rounded-full text-white font-semibold text-sm shadow transition 
            ${
              selectedStep?.id === step.id
                ? "bg-green-600 hover:bg-green-500"
                : "bg-blue-600 hover:bg-blue-500"
            }`}
            onClick={() => setSelectedStep(step)}
          >
            Step {index + 1}: {step.title}
          </button>
        ))}
      </div>

      {selectedStep ? (
        <StepDetailsPanel step={selectedStep} />
      ) : (
        <p className="text-gray-500 dark:text-gray-400">
          Select a step to view details.
        </p>
      )}
    </div>
  );
}
