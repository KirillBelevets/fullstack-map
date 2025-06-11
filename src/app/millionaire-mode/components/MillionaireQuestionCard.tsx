"use client";

import React, { useEffect, useState } from "react";

type Props = {
  prompt: string;
  options: string[];
  correctAnswer: string;
  selectedAnswer: string | null;
  isAnswerCorrect: boolean | null;
  showFeedback: boolean;
  onAnswer: (option: string) => void;
};

export default function MillionaireQuestionCard({
  prompt,
  options,
  correctAnswer,
  selectedAnswer,
  isAnswerCorrect,
  showFeedback,
  onAnswer,
}: Props) {
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

  useEffect(() => {
    const shuffled = [...options].sort(() => Math.random() - 0.5);
    setShuffledOptions(shuffled);
  }, [options]);

  return (
    <div>
      <p className="font-semibold mb-4 text-lg">{prompt}</p>
      {shuffledOptions.map((option) => (
        <button
          key={option}
          onClick={() => onAnswer(option)}
          disabled={!!selectedAnswer}
          className={`block w-full text-left p-3 border mb-3 rounded text-lg transition text-gray-800
            ${
              selectedAnswer
                ? option === correctAnswer
                  ? "bg-green-300"
                  : option === selectedAnswer
                  ? "bg-red-300"
                  : "opacity-50 bg-white"
                : "bg-white hover:bg-gray-100"
            }`}
        >
          {option}
        </button>
      ))}

      {showFeedback && isAnswerCorrect !== null && (
        <p
          className={`mt-4 font-semibold text-lg ${
            isAnswerCorrect ? "text-green-600" : "text-red-600"
          }`}
        >
          {isAnswerCorrect
            ? "✅ Correct!"
            : `❌ Incorrect. Correct answer: ${correctAnswer}`}
        </p>
      )}
    </div>
  );
}
