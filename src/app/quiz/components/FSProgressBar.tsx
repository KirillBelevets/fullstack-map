"use client";

interface Props {
  level: "beginner" | "intermediate" | "advanced";
  streak: number;
}

export default function FSProgressBar({ level, streak }: Props) {
  return (
    <div className="mb-6 text-center">
      <div className="text-sm text-gray-400 mb-2">
        Level: <strong className="capitalize">{level}</strong>
      </div>
      <div className="flex justify-center gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`w-5 h-5 rounded-full transition ${
              i < streak ? "bg-green-500" : "bg-gray-700 border border-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
