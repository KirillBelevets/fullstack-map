"use client";

import React from "react";

type MillionaireHintsProps = {
  remainingFiftyFifty: number;
  usedFiftyFiftyOnCurrentQuestion: boolean;
  usedFiftyFiftyButtonIndex: number | null;
  onFiftyFifty: (buttonIndex: number) => void;
};

export default function MillionaireHints({
  remainingFiftyFifty,
  usedFiftyFiftyOnCurrentQuestion,
  usedFiftyFiftyButtonIndex,
  onFiftyFifty,
}: MillionaireHintsProps) {
  return (
    <div className="flex flex-col items-start mb-6 space-y-2">
      <h4 className="font-semibold mb-1">Lifelines:</h4>
      <div className="flex space-x-2">
        {[0, 1, 2].map((idx) => {
          const isUsed = remainingFiftyFifty <= idx;
          const isActive = usedFiftyFiftyButtonIndex === idx;

          const isDisabled =
            isUsed || (usedFiftyFiftyOnCurrentQuestion && !isActive);

          return (
            <button
              key={idx}
              onClick={() => onFiftyFifty(idx)}
              disabled={isDisabled}
              className={`px-4 py-2 rounded text-white font-semibold transition
                ${
                  isUsed
                    ? "bg-gray-400 cursor-not-allowed"
                    : isActive
                    ? "bg-green-500 cursor-not-allowed"
                    : usedFiftyFiftyOnCurrentQuestion
                    ? "bg-blue-200 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-400"
                }`}
            >
              50:50
            </button>
          );
        })}
      </div>
      <p className="text-sm text-gray-500 mt-1">
        You have {remainingFiftyFifty} remaining.
      </p>
    </div>
  );
}
