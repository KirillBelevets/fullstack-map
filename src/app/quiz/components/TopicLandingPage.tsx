"use client";

import { useRouter } from "next/navigation";
import { topics } from "../data/topics";
import { useEffect, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";

function getCompletedTopics(): string[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem("completed_topics");
  return raw ? JSON.parse(raw) : [];
}

export default function TopicLandingPage() {
  const router = useRouter();
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);

  useEffect(() => {
    const onFocus = () => setCompletedTopics(getCompletedTopics());
    window.addEventListener("focus", onFocus);
    onFocus();
    return () => window.removeEventListener("focus", onFocus);
  }, []);

  const handleClick = (topicId: string) => {
    router.push(`/quiz?topic=${encodeURIComponent(topicId)}`);
  };

  const handleAllQuiz = () => {
    router.push("/quiz");
  };

  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-8">
      <DarkModeToggle />

      <div className="flex flex-col sm:flex-row sm:space-x-4 mb-8 space-y-4 sm:space-y-0">
        <Link
          href="/interview-visualizer"
          className="flex items-center justify-center px-6 py-3 rounded-full 
    bg-purple-600 text-white font-semibold text-lg 
    hover:bg-purple-500 shadow-md dark:shadow-purple-900 transition"
        >
          🚀 Interview Process Visualizer
        </Link>

        <button
          onClick={handleAllQuiz}
          className="flex items-center justify-center px-6 py-3 rounded-full 
    bg-blue-600 text-white font-semibold text-lg 
    hover:bg-blue-500 shadow-md dark:shadow-blue-900 transition"
        >
          🔁 Start Full Quiz
        </button>

        <Link
          href="/millionaire-mode"
          className="flex items-center justify-center px-6 py-3 rounded-full 
    bg-yellow-500 text-black font-semibold text-lg 
    hover:bg-yellow-400 shadow-md dark:shadow-yellow-900 transition"
        >
          💰 Millionaire Mode
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-4 sm:mb-6 text-black dark:text-white">
        Explore Topics
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {topics.map((topic) => {
          const isCompleted = completedTopics.includes(topic.id);
          return (
            <button
              key={topic.id}
              onClick={() => handleClick(topic.id)}
              className={`relative p-4 h-32 rounded-lg font-semibold shadow-lg transform transition-transform duration-200 hover:scale-105
                ${
                  isCompleted
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:opacity-90"
                }`}
            >
              <div className="text-lg mb-1 relative z-0">{topic.label}</div>
              {!isCompleted && (
                <div className="absolute inset-0 rounded-lg z-10 bg-white/30 dark:bg-black/40" />
              )}
            </button>
          );
        })}
      </div>
    </main>
  );
}
