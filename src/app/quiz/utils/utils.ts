import { Question } from "../data/fsTypes";

/**
 * Shuffles an array using Fisher-Yates algorithm variant.
 */
export function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

/**
 * Marks a topic as completed by saving it in localStorage.
 */
export function markTopicCompleted(topicId: string) {
  const raw = localStorage.getItem("completed_topics");
  const completed: string[] = raw ? JSON.parse(raw) : [];
  if (!completed.includes(topicId)) {
    completed.push(topicId);
    localStorage.setItem("completed_topics", JSON.stringify(completed));
  }
}

export function isTaggedForTopic(
  question: Question,
  topicTags: string[]
): boolean {
  if (!question.tags || !Array.isArray(question.tags)) return false;

  return question.tags.some((tag) => topicTags.includes(tag));
}
