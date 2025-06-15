"use client";

import React from "react";
import { Progress } from "@/components/ui/progress";

type MillionaireHintsProps = {
  remainingFiftyFifty: number;
  onFiftyFifty: () => void;
  isLocked: boolean;
};

export default function MillionaireHints({
  remainingFiftyFifty,
  onFiftyFifty,
  isLocked,
}: MillionaireHintsProps) {
  const maxFiftyFifty = 3;
  const isDisabled = remainingFiftyFifty <= 0 || isLocked;
  const progressValue = (remainingFiftyFifty / maxFiftyFifty) * 100;

  return (
    <div className="w-full mt-6 text-center">
      <h4 className="text-lg font-bold text-white mb-2 drop-shadow">
        🎓 Lifelines
      </h4>

      <button
        onClick={onFiftyFifty}
        disabled={isDisabled}
        className={`w-48 px-4 py-2 rounded-xl font-semibold transition shadow-md text-white
          ${
            isDisabled
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-500"
          }`}
      >
        50:50 Lifeline ({remainingFiftyFifty} left)
      </button>

      <div className="w-48 mx-auto mt-2">
        <Progress value={progressValue} className="h-2 bg-white/10" />
      </div>

      <p className="text-sm text-gray-300 mt-1">
        Max: {maxFiftyFifty} uses per game
      </p>
    </div>
  );
}
