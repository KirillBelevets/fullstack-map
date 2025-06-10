"use client";

import React from "react";

type Props = {
  prizes: number[];
  currentPrizeIndex: number;
  bestRun?: number; // optional
};

export default function MillionaireProgressBar({
  prizes,
  currentPrizeIndex,
  bestRun,
}: Props) {
  return (
    <div className="w-full md:w-1/4 bg-gray-100 p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-4 text-center text-gray-800">
        🏆 Prize Ladder
      </h2>
      <ul className="space-y-2">
        {prizes.map((prize, idx) => (
          <li
            key={idx}
            className={`p-2 rounded text-center font-medium ${
              idx === currentPrizeIndex
                ? "bg-yellow-300 text-black"
                : idx < currentPrizeIndex
                ? "text-green-600"
                : "text-gray-500"
            }`}
          >
            ${prize}
          </li>
        ))}
      </ul>
      {bestRun !== undefined && (
        <div className="text-center text-sm text-gray-600 mt-4">
          🏅 Best Run: ${bestRun}
        </div>
      )}
    </div>
  );
}
