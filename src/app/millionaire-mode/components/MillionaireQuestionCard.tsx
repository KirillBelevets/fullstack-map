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

  console.log({ isAnswerCorrect });
  console.log({ showFeedback });

  useEffect(() => {
    const shuffled = [...options].sort(() => Math.random() - 0.5);
    setShuffledOptions(shuffled);
  }, [options]);

  return (
    <div className="text-white">
      {/* Styled question box */}
      <div className="bg-blue-800 border-2 border-blue-500 text-white text-lg font-semibold p-5 rounded-xl text-center mb-6">
        {prompt}
      </div>

      {/* Options styled like TV buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {shuffledOptions.map((option, idx) => {
          let bgColor = "bg-blue-700 hover:bg-blue-600";
          let disabled = false;

          if (selectedAnswer) {
            disabled = true;
            if (option === correctAnswer) {
              bgColor = "bg-green-600";
            } else if (option === selectedAnswer) {
              bgColor = "bg-red-600";
            } else {
              bgColor = "bg-orange-500";
            }
          }

          return (
            <button
              key={`${option}-${idx}`}
              className={`relative w-full py-4 px-6 text-white text-lg font-semibold transition border-2 rounded-xl ${bgColor}`}
              disabled={disabled}
              onClick={() => onAnswer(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
