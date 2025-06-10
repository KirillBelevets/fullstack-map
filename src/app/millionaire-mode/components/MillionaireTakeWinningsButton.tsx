"use client";

import React from "react";

type Props = {
  winnings: number;
  onTakeWinnings: () => void;
};

export default function MillionaireTakeWinningsButton({
  winnings,
  onTakeWinnings,
}: Props) {
  return (
    <button
      onClick={onTakeWinnings}
      className="px-4 py-2 bg-yellow-500 text-black rounded font-semibold hover:bg-yellow-400 transition"
    >
      💰 Take Winnings (${winnings})
    </button>
  );
}
