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

  // Calculate % for progress bar
  const progressValue = (remainingFiftyFifty / maxFiftyFifty) * 100;

  return (
    <div className="flex flex-col items-start mb-6 space-y-3 w-full max-w-xs">
      <h4 className="font-semibold">Lifelines:</h4>

      <button
        onClick={onFiftyFifty}
        disabled={isDisabled}
        className={`w-full px-4 py-2 rounded text-white font-semibold transition
          ${
            isDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-400"
          }`}
      >
        50:50 ({remainingFiftyFifty} remaining)
      </button>

      <Progress value={progressValue} className="h-2" />

      <p className="text-sm text-gray-500">
        You can use 50:50 up to {maxFiftyFifty} times per game.
      </p>
    </div>
  );
}
