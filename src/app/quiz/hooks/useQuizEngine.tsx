import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { topics } from "../data/topics";
import { Question, Level } from "../data/fsTypes";
import { questionsByLevel } from "../data";
import { shuffle, markTopicCompleted, isTaggedForTopic } from "../utils/utils";

const STREAK_TO_LEVEL_UP = 3;

export function useQuizEngine() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const topicId = searchParams.get("topic");
  console.log({ topicId });

  const topic = topics.find((t) => t.id === topicId);

  console.log({ topic });

  const [level, setLevel] = useState<Level>("beginner");
  const [streak, setStreak] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(
    null
  );
  const [disabled, setDisabled] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [shuffledPool, setShuffledPool] = useState<Question[]>([]);

  useEffect(() => {
    setStreak(0);
    setCurrentIndex(0);
  }, [topicId]);

  useEffect(() => {
    console.log("🔁 useEffect triggered");
    console.log("📊 Current level:", level);
    console.log("🎯 Current topicId:", topicId);

    const base = questionsByLevel[level];
    console.log("📦 Base questions:", base.length, base);

    const filtered = topic
      ? base.filter((q) => {
          const matched = isTaggedForTopic(q, topic.tags);
          if (matched) {
            console.log("✅ MATCH:", q.prompt, q.tags);
          }
          return matched;
        })
      : base;

    const shuffledQuestions = shuffle(filtered).map((q) => ({
      ...q,
      options: shuffle(q.options),
    }));

    console.log(
      "🔀 Shuffled questions:",
      shuffledQuestions.length,
      shuffledQuestions
    );

    // ❗ Reset all interactive state to prevent leftover "correct" state
    setShuffledPool(shuffledQuestions);
    setCurrentIndex(0);
    setFeedback(null);
    setDisabled(false);
    setShowNext(false);
  }, [level, topicId]);

  const current = shuffledPool[currentIndex] || null;

  function handleAnswer(isCorrect: boolean) {
    if (disabled || !current) return;
    setFeedback(isCorrect ? "correct" : "incorrect");
    setDisabled(true);
    setShowNext(true);
  }

  function handleNext() {
    if (!current) return;

    // Always reset interaction state early
    setFeedback(null);
    setDisabled(false);
    setShowNext(false);

    const nextLevelMap: Record<Level, Level> = {
      beginner: "intermediate",
      intermediate: "advanced",
      advanced: "advanced",
    };

    const fallbackMap: Record<Level, Level> = {
      beginner: "beginner",
      intermediate: "beginner",
      advanced: "intermediate",
    };

    if (feedback === "correct") {
      const newStreak = streak + 1;

      if (newStreak >= STREAK_TO_LEVEL_UP) {
        const isLastLevel = level === "advanced";
        if (isLastLevel && topicId) {
          markTopicCompleted(topicId);
          router.push("/");
          return;
        }

        const nextLevel = nextLevelMap[level];

        setLevel(nextLevel);
        setStreak(0);
        return;
      }

      setStreak(newStreak);
      setCurrentIndex((prev) => prev + 1);
    } else {
      const fallbackLevel = fallbackMap[level];

      setLevel(fallbackLevel);
      setStreak(0);
      setCurrentIndex(0);
    }
  }

  return {
    level,
    streak,
    current,
    feedback,
    disabled,
    showNext,
    handleAnswer,
    handleNext,
  };
}
