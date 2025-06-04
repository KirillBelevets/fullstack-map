import { Suspense } from "react";
import QuizClient from "./QuizClient";

export default function QuizPage() {
  return (
    <Suspense fallback={<div className="text-white">Loading quiz...</div>}>
      <QuizClient />
    </Suspense>
  );
}
