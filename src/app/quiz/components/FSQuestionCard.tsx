"use client";

import { Question } from "../data/fsTypes";

interface Props {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  feedback: "correct" | "incorrect" | null;
  disabled: boolean;
}

export default function FSQuestionCard({
  question,
  onAnswer,
  feedback,
  disabled,
}: Props) {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4">{question.prompt}</h2>
      <div className="flex flex-col gap-2">
        {question.options.map((opt, i) => {
          const isCorrect = opt === question.answer;
          const isSelected = feedback && opt === question.answer;
          const isWrongSelection = feedback && opt !== question.answer;

          return (
            <button
              key={i}
              disabled={disabled}
              onClick={() => onAnswer(isCorrect)}
              className={`w-full text-left px-4 py-2 rounded border transition ${
                disabled
                  ? isSelected
                    ? "bg-green-700 border-green-500"
                    : isWrongSelection
                    ? "bg-red-700 border-red-500"
                    : "bg-gray-800 border-gray-600"
                  : "hover:bg-gray-700 border-gray-600"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {feedback && (
        <p className="mt-4 text-sm italic text-gray-300">
          {feedback === "correct" ? "✅ Correct!" : "❌ Incorrect."}{" "}
          {question.explanation}
        </p>
      )}
    </div>
  );
}
