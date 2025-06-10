"use client";

import React from "react";

type MillionaireHintsProps = {
  remainingFiftyFifty: number;
  onFiftyFifty: () => void;
};

export default function MillionaireHints({
  remainingFiftyFifty,
  onFiftyFifty,
}: MillionaireHintsProps) {
  return (
    <div className="flex flex-col items-start mb-6 space-y-2">
      <h4 className="font-semibold mb-1">Lifelines:</h4>
      <div className="flex space-x-2">
        {[0, 1, 2].map((idx) => (
          <button
            key={idx}
            onClick={onFiftyFifty}
            disabled={remainingFiftyFifty <= idx}
            className={`px-4 py-2 rounded text-white font-semibold transition
              ${
                remainingFiftyFifty <= idx
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-400"
              }`}
          >
            50:50
          </button>
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-1">
        You have {remainingFiftyFifty} remaining.
      </p>
    </div>
  );
}
