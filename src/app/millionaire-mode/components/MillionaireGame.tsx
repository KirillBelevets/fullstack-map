"use client";

import React, { useState, useEffect } from "react";
import { questionsBeginner } from "@/app/quiz/data/beginner";
import { questionsIntermediate } from "@/app/quiz/data/intermediate";
import { questionsAdvanced } from "@/app/quiz/data/advanced";
import MillionaireProgressBar from "./MillionaireProgressBar";
import MillionaireQuestionCard from "./MillionaireQuestionCard";
import MillionaireHints from "./MillionaireHints";
import MillionaireTakeWinningsButton from "./MillionaireTakeWinningsButton";

type Question = {
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
  tags: string[];
};

const LEVELS = [
  { name: "Beginner", questions: questionsBeginner },
  { name: "Intermediate", questions: questionsIntermediate },
  { name: "Advanced", questions: questionsAdvanced },
];

const PRIZES = [
  100,
  200,
  300,
  400,
  500, // Beginner
  1000,
  2000,
  4000,
  6000,
  8000, // Intermediate
  16000,
  32000,
  64000,
  125000,
  250000, // Advanced
];

export default function MillionaireGame() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [lifelines, setLifelines] = useState({
    fiftyFiftyUsed: false,
    probabilityUsed: false,
  });
  const [availableOptions, setAvailableOptions] = useState<string[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [bestRun, setBestRun] = useState<number>(0);

  useEffect(() => {
    const storedBestRun = localStorage.getItem("millionaire_best_run");
    if (storedBestRun) {
      setBestRun(parseInt(storedBestRun));
    }
  }, []);

  useEffect(() => {
    const questions = LEVELS[currentLevelIndex].questions;
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setAvailableOptions(shuffled[0]?.options || []);
    setSelectedAnswer(null);
    setIsAnswerCorrect(null);
    setShowFeedback(false);
  }, [currentLevelIndex]);

  const updateBestRun = (finalScore: number) => {
    if (finalScore > bestRun) {
      localStorage.setItem("millionaire_best_run", finalScore.toString());
      setBestRun(finalScore);
    }
  };

  const handleAnswer = (option: string) => {
    if (selectedAnswer) return;
    setSelectedAnswer(option);
    const correct = option === shuffledQuestions[currentQuestionIndex].answer;
    setIsAnswerCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      const newScore = PRIZES[currentLevelIndex * 5 + currentQuestionIndex];
      setScore(newScore);

      setTimeout(() => {
        setShowFeedback(false);
        if (currentQuestionIndex + 1 < 5) {
          setCurrentQuestionIndex((prev) => prev + 1);
          setAvailableOptions(
            shuffledQuestions[currentQuestionIndex + 1].options
          );
          setSelectedAnswer(null);
          setIsAnswerCorrect(null);
        } else if (currentLevelIndex + 1 < LEVELS.length) {
          setCurrentLevelIndex((prev) => prev + 1);
        } else {
          updateBestRun(newScore); // FIXED here → pass correct score
          setGameWon(true);
        }
      }, 2000);
    } else {
      setTimeout(() => {
        updateBestRun(score);
        setGameOver(true);
      }, 2000);
    }
  };

  const handleTakeWinnings = () => {
    updateBestRun(score);
    setGameOver(true);
  };

  const handleFiftyFifty = () => {
    if (lifelines.fiftyFiftyUsed) return;

    const question = shuffledQuestions[currentQuestionIndex];
    const correctAnswer = question.answer;

    const incorrectOptions = question.options.filter(
      (opt) => opt !== correctAnswer
    );

    const randomIncorrect =
      incorrectOptions[Math.floor(Math.random() * incorrectOptions.length)];

    const reducedOptions = [correctAnswer, randomIncorrect].sort(
      () => Math.random() - 0.5
    );

    setAvailableOptions(reducedOptions);
    setLifelines((prev) => ({ ...prev, fiftyFiftyUsed: true }));
  };

  const handleProbabilityHint = () => {
    if (lifelines.probabilityUsed) return;

    const correctAnswer = shuffledQuestions[currentQuestionIndex].answer;
    const options = shuffledQuestions[currentQuestionIndex].options;

    const probs = options.map((opt) => {
      if (opt === correctAnswer) return 70;
      return Math.floor(Math.random() * 20);
    });

    alert(
      "Probability Hint:\n" +
        options.map((opt, idx) => `${opt}: ${probs[idx]}%`).join("\n")
    );

    setLifelines((prev) => ({ ...prev, probabilityUsed: true }));
  };

  if (gameOver) {
    return (
      <div className="p-4 text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-600">Game Over!</h1>
        <p className="mb-4 text-xl">You won: ${score}</p>
        <p className="text-md text-gray-600 mt-2">🏅 Best Run: ${bestRun}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded font-semibold hover:bg-blue-400 transition"
        >
          🔄 Play Again
        </button>
      </div>
    );
  }

  if (gameWon) {
    return (
      <div className="p-4 text-center">
        <h1 className="text-4xl font-bold mb-4 text-green-600">
          Congratulations, you won!
        </h1>
        <p className="mb-4 text-xl">Total winnings: ${score}</p>
        <p className="text-md text-gray-600 mt-2">🏅 Best Run: ${bestRun}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded font-semibold hover:bg-blue-400 transition"
        >
          🔄 Play Again
        </button>
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  if (!currentQuestion) return <p>Loading questions...</p>;

  const currentPrizeIndex = currentLevelIndex * 5 + currentQuestionIndex;

  return (
    <div className="flex flex-col md:flex-row p-4 max-w-5xl mx-auto space-y-6 md:space-x-8 md:space-y-0">
      {/* Progress Ladder */}
      <MillionaireProgressBar
        prizes={PRIZES}
        currentPrizeIndex={currentPrizeIndex}
        bestRun={bestRun}
      />

      {/* Main Quiz Area */}
      <div className="flex-1">
        <h2 className="text-xl mb-2">
          Level: {LEVELS[currentLevelIndex].name} (Question{" "}
          {currentQuestionIndex + 1} of 5)
        </h2>
        <h3 className="text-lg mb-4">Prize: ${PRIZES[currentPrizeIndex]}</h3>

        {/* Question Card */}
        <MillionaireQuestionCard
          question={currentQuestion}
          availableOptions={availableOptions}
          selectedAnswer={selectedAnswer}
          isAnswerCorrect={isAnswerCorrect}
          showFeedback={showFeedback}
          onAnswer={handleAnswer}
        />

        {/* Lifelines */}
        <MillionaireHints
          fiftyFiftyUsed={lifelines.fiftyFiftyUsed}
          probabilityUsed={lifelines.probabilityUsed}
          onFiftyFifty={handleFiftyFifty}
          onProbabilityHint={handleProbabilityHint}
        />

        {/* Take Winnings */}
        <MillionaireTakeWinningsButton
          winnings={score}
          onTakeWinnings={handleTakeWinnings}
        />
      </div>
    </div>
  );
}
