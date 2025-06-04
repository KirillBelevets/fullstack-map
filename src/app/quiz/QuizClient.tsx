"use client";

import { useSearchParams } from "next/navigation";
import FullStackQuizGame from "./components/FullStackQuizGame";

export default function QuizClient() {
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic") ?? null;

  return <FullStackQuizGame topic={topic} />;
}
