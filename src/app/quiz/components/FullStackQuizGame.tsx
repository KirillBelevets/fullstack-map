"use client";

import { useQuizEngine } from "../hooks/useQuizEngine";
import FSProgressBar from "./FSProgressBar";
import FSQuestionCard from "./FSQuestionCard";

export default function FullStackQuizGame() {
  const {
    level,
    streak,
    current,
    feedback,
    disabled,
    showNext,
    handleAnswer,
    handleNext,
  } = useQuizEngine();

  if (!current) {
    return (
      <div className="text-white text-center mt-20">
        <h2 className="text-xl font-bold">
          🎉 You&apos;ve completed all questions!
        </h2>
        <p className="mt-4">Try another topic or refresh to restart.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl">
      <FSProgressBar level={level} streak={streak} />
      <FSQuestionCard
        question={current}
        onAnswer={handleAnswer}
        feedback={feedback}
        disabled={disabled}
      />
      {showNext && (
        <div className="mt-6 flex justify-end">
          <button
            className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
