"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const topics = [
  { id: "html", label: "HTML", level: "beginner" },
  { id: "css", label: "CSS", level: "beginner" },
  { id: "js", label: "JavaScript", level: "beginner" },
  { id: "http", label: "HTTP", level: "beginner" },
  { id: "git", label: "Git", level: "beginner" },
  { id: "cookies", label: "Cookies", level: "beginner" },
  { id: "auth", label: "JWT & Auth", level: "intermediate" },
  { id: "sql", label: "SQL", level: "intermediate" },
  { id: "cors", label: "CORS", level: "intermediate" },
  { id: "testing", label: "Testing", level: "intermediate" },
  { id: "docker", label: "Docker", level: "advanced" },
  { id: "ci", label: "CI/CD", level: "advanced" },
  { id: "graphql", label: "GraphQL", level: "advanced" },
  { id: "security", label: "Security", level: "advanced" },
];

export default function FullStackMap() {
  const [level, setLevel] = useState<"beginner" | "intermediate" | "advanced">(
    "beginner"
  );

  useEffect(() => {
    const stored = localStorage.getItem("quiz_level");
    if (stored === "intermediate" || stored === "advanced") {
      setLevel(stored);
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center p-8 gap-6">
      <h1 className="text-3xl font-bold">🌐 Full Stack Knowledge Map</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {topics.map((topic) => {
          const unlocked =
            level === "advanced" ||
            (level === "intermediate" && topic.level !== "advanced") ||
            topic.level === "beginner";

          return (
            <Link
              key={topic.id}
              href={`/quiz?topic=${topic.id}`}
              className={`rounded-lg border p-6 text-center transition ${
                unlocked
                  ? "bg-blue-100 hover:bg-blue-200"
                  : "bg-gray-800 text-gray-500 blur-sm pointer-events-none"
              }`}
            >
              {topic.label}
            </Link>
          );
        })}
      </div>
      <div className="mt-8 text-sm text-gray-400">
        <p>
          Your level: <strong className="capitalize">{level}</strong>
        </p>
        <div className="flex gap-4 mt-2">
          {(["beginner", "intermediate", "advanced"] as const).map((lvl) => (
            <button
              key={lvl}
              onClick={() => {
                setLevel(lvl);
                localStorage.setItem("quiz_level", lvl);
              }}
              className="bg-cyan-700 hover:bg-cyan-600 text-white px-3 py-1 rounded"
            >
              Set {lvl}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
