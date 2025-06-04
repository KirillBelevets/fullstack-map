import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { topics } from "../data/topics";
import { Question, Level } from "../data/fsTypes";
import { questionsByLevel } from "../data";
import { shuffle, markTopicCompleted, isTaggedForTopic } from "../utils/utils";

const STREAK_TO_LEVEL_UP = 3;

export function useQuizEngine(topicId: string | null) {
  const router = useRouter();
  const topic = topics.find((t) => t.id === topicId);

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
    const base = questionsByLevel[level];

    const filtered = topic
      ? base.filter((q) => isTaggedForTopic(q, topic.tags))
      : base;

    const shuffledQuestions = shuffle(filtered).map((q) => ({
      ...q,
      options: shuffle(q.options),
    }));

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
        if (level === "advanced" && topicId) {
          markTopicCompleted(topicId);
          router.push("/");
          return;
        }

        setLevel(nextLevelMap[level]);
        setStreak(0);
      } else {
        setStreak(newStreak);
        setCurrentIndex((prev) => prev + 1);
      }
    } else {
      setLevel(fallbackMap[level]);
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
