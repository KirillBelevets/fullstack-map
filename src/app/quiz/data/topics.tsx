import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Manually define global topics and their associated tags
export const topics = [
  {
    id: "html",
    label: "HTML",
    tags: ["html"],
  },
  {
    id: "css",
    label: "CSS",
    tags: ["css", "selectors", "box-model"],
  },
  {
    id: "javascript",
    label: "JavaScript",
    tags: ["js", "typescript", "es6", "hoisting", "closure", "javascript"],
  },
  {
    id: "react",
    label: "React",
    tags: ["react", "hooks", "jsx", "component"],
  },
  {
    id: "auth",
    label: "Authentication",
    tags: ["auth", "jwt", "security"],
  },
  {
    id: "network",
    label: "Networking",
    tags: ["http", "cors", "api"],
  },
  {
    id: "docker",
    label: "Docker",
    tags: ["docker"],
  },
  {
    id: "a11y",
    label: "Accessibility",
    tags: ["a11y", "accessibility"],
  },
];

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
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6 text-white">Explore Topics</h1>

      <div className="mb-8">
        <button
          onClick={handleAllQuiz}
          className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-500"
        >
          🔁 Start Full Quiz
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {topics.map((topic) => {
          const isCompleted = completedTopics.includes(topic.id);
          return (
            <button
              key={topic.id}
              onClick={() => handleClick(topic.id)}
              className={`relative p-4 h-32 rounded-lg text-white font-semibold transition shadow-lg
                ${
                  isCompleted
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 opacity-60 hover:opacity-100"
                }`}
            >
              <div className="text-lg mb-1 relative z-0">{topic.label}</div>
              {!isCompleted && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-lg z-10" />
              )}
            </button>
          );
        })}
      </div>
    </main>
  );
}
