import { Question } from "@/app/quiz/data/fsTypes";

type Props = {
  question: Question;
  availableOptions: string[];
  selectedAnswer: string | null;
  isAnswerCorrect: boolean | null;
  showFeedback: boolean;
  onAnswer: (option: string) => void;
};

export default function MillionaireQuestionCard({
  question,
  availableOptions,
  selectedAnswer,
  isAnswerCorrect,
  showFeedback,
  onAnswer,
}: Props) {
  return (
    <div>
      <p className="font-semibold mb-4 text-lg">{question.prompt}</p>
      {availableOptions.map((option) => (
        <button
          key={option}
          className={`block w-full text-left p-3 border mb-3 rounded text-lg transition text-gray-800 ${
            selectedAnswer
              ? option === question.answer
                ? "bg-green-300"
                : option === selectedAnswer
                ? "bg-red-300"
                : "opacity-50 bg-white"
              : "bg-white hover:bg-gray-100"
          }`}
          onClick={() => onAnswer(option)}
          disabled={!!selectedAnswer}
        >
          {option}
        </button>
      ))}

      {showFeedback && isAnswerCorrect !== null && (
        <p className={`...`}>{isAnswerCorrect ? "Correct!" : "Incorrect!"}</p>
      )}
    </div>
  );
}
