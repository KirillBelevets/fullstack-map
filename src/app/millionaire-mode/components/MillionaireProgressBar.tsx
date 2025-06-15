"use client";

import React from "react";

type Props = {
  prizes: number[];
  currentPrizeIndex: number;
  bestRun?: number;
};

export default function MillionaireProgressBar({
  prizes,
  currentPrizeIndex,
  bestRun,
}: Props) {
  return (
    <div className="w-full md:w-1/4 bg-gray-900 p-4 rounded-xl shadow-lg text-white">
      <h2 className="text-lg font-bold mb-4 text-center text-yellow-400 drop-shadow">
        🏆 Prize Ladder
      </h2>
      <ul className="space-y-1 text-sm font-mono max-h-[80vh] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-yellow-300">
        {[...prizes]
          .map((prize, idx) => ({
            index: idx,
            value: prize,
          }))
          .reverse()
          .map(({ index, value }) => {
            const isCurrent = index === currentPrizeIndex;
            const isPassed = index < currentPrizeIndex;

            return (
              <li
                key={index}
                className={`py-1 px-2 rounded text-center transition-all ${
                  isCurrent
                    ? "bg-yellow-400 text-black font-bold border-2 border-yellow-500"
                    : isPassed
                    ? "text-green-400"
                    : "text-gray-400"
                }`}
              >
                ${value}
              </li>
            );
          })}
      </ul>

      {bestRun !== undefined && (
        <div className="text-center text-xs text-gray-300 mt-4">
          🏅 Best Run: ${bestRun}
        </div>
      )}
    </div>
  );
}
