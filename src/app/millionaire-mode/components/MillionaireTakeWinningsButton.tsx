"use client";

import React from "react";

type Props = {
  winnings: number;
  safePrize: number;
  onTakeWinnings: () => void;
};

export default function MillionaireTakeWinningsButton({
  winnings,
  safePrize,
  onTakeWinnings,
}: Props) {
  const riskedAmount = winnings - safePrize;

  return (
    <div className="mt-6 text-center">
      <button
        onClick={onTakeWinnings}
        className="px-5 py-3 bg-yellow-500 text-black font-bold text-lg rounded-xl hover:bg-yellow-400 transition shadow-md"
      >
        💰 Take Winnings (${winnings})
      </button>

      <p className="text-sm text-gray-700 mt-2">
        🎯 Risking <strong>${riskedAmount}</strong> — Safe Prize: ${safePrize}
      </p>
    </div>
  );
}
