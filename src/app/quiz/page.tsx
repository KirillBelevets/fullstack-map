import { Suspense } from "react";
import QuizClient from "./QuizClient";

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <Suspense fallback={<div>Loading quiz...</div>}>
        <QuizClient />
      </Suspense>
    </div>
  );
}
