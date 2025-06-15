"use client";

import React, { useState, useEffect } from "react";
import { questionsBeginner } from "@/app/quiz/data/beginner";
import { questionsIntermediate } from "@/app/quiz/data/intermediate";
import { questionsAdvanced } from "@/app/quiz/data/advanced";
import MillionaireProgressBar from "./MillionaireProgressBar";
import MillionaireQuestionCard from "./MillionaireQuestionCard";
import MillionaireHints from "./MillionaireHints";
import MillionaireTakeWinningsButton from "./MillionaireTakeWinningsButton";
import { getLevelOffsets } from "../utils/quizUtils";
import { useBestRun } from "../hooks/useBestRun"; // assuming you already extracted this hook

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

const QUESTIONS_PER_LEVEL = [5, 5, 7];

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
  250000,
  500000,
  1000000, // Advanced
];

const SAFE_ZONE_INDEXES = [4, 9, 14]; // $500, $8000, $250000

function getLastSafePrize(currentIndex: number): number {
  const safeIndex = SAFE_ZONE_INDEXES.filter((i) => i <= currentIndex).pop();
  return safeIndex !== undefined ? PRIZES[safeIndex] : 0;
}

export default function MillionaireGame() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [availableOptions, setAvailableOptions] = useState<string[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);

  const [remainingFiftyFifty, setRemainingFiftyFifty] = useState(3);
  const [usedFiftyFiftyOnCurrentQuestion, setUsedFiftyFiftyOnCurrentQuestion] =
    useState(false);

  const { bestRun, updateBestRun } = useBestRun();

  // Shuffle questions per level
  useEffect(() => {
    const questions = LEVELS[currentLevelIndex].questions;
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setAvailableOptions(shuffled[0]?.options || []);
    setSelectedAnswer(null);
    setIsAnswerCorrect(null);
    setShowFeedback(false);
    setUsedFiftyFiftyOnCurrentQuestion(false);
  }, [currentLevelIndex]);

  // Handle Answer click
  const handleAnswer = (option: string) => {
    if (selectedAnswer) return; // prevent double click
    setSelectedAnswer(option);

    const correct = option === shuffledQuestions[currentQuestionIndex].answer;
    setIsAnswerCorrect(correct);
    setShowFeedback(true);

    const levelOffsets = getLevelOffsets(QUESTIONS_PER_LEVEL);

    const currentPrizeIndex =
      levelOffsets[currentLevelIndex] + currentQuestionIndex;
    const newScore = PRIZES[currentPrizeIndex];

    if (correct) {
      setScore(newScore);

      setTimeout(() => {
        setShowFeedback(false);
        if (currentQuestionIndex + 1 < QUESTIONS_PER_LEVEL[currentLevelIndex]) {
          // Next question in level
          setCurrentQuestionIndex((prev) => prev + 1);
          setAvailableOptions(
            shuffledQuestions[currentQuestionIndex + 1].options
          );
          setSelectedAnswer(null);
          setIsAnswerCorrect(null);
          setUsedFiftyFiftyOnCurrentQuestion(false);
        } else if (currentLevelIndex + 1 < LEVELS.length) {
          // Next level
          setCurrentLevelIndex((prev) => prev + 1);
          setUsedFiftyFiftyOnCurrentQuestion(false);
        } else {
          // Game won
          updateBestRun(newScore);
          setGameWon(true);
        }
      }, 2000);
    } else {
      setTimeout(() => {
        const safePrize = getLastSafePrize(currentPrizeIndex);
        setScore(safePrize);
        updateBestRun(safePrize);
        setGameOver(true);
      }, 2000);
    }
  };

  // Handler: Take winnings
  const handleTakeWinnings = () => {
    updateBestRun(score);
    setGameOver(true);
  };

  // Handler: 50-50 click
  const handleFiftyFifty = () => {
    if (
      remainingFiftyFifty <= 0 ||
      usedFiftyFiftyOnCurrentQuestion ||
      availableOptions.length <= 2 ||
      selectedAnswer // Lock when already answered
    )
      return;

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
    setRemainingFiftyFifty((prev) => prev - 1);
    setUsedFiftyFiftyOnCurrentQuestion(true);
  };

  // Game Won screen
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

  // In-progress game
  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  if (!currentQuestion) return <p>Loading questions...</p>;

  const levelOffsets = getLevelOffsets(QUESTIONS_PER_LEVEL);

  const currentPrizeIndex =
    levelOffsets[currentLevelIndex] + currentQuestionIndex;

  // Game Over screen
  if (gameOver) {
    return (
      <div className="p-6 max-w-3xl mx-auto text-center text-white">
        <h1 className="text-4xl font-bold text-red-500 mb-6 drop-shadow">
          Game Over!
        </h1>

        {/* Prize won */}
        <div className="bg-yellow-600 border-4 border-yellow-400 rounded-xl py-4 px-6 text-2xl font-bold mb-4 shadow-lg">
          🪙 You won: ${score}
        </div>

        {/* Best Run */}
        <p className="text-md text-gray-300 mb-6">🏅 Best Run: ${bestRun}</p>

        {/* Correct answer */}
        <div className="bg-green-700 border-2 border-green-500 rounded-xl py-4 px-6 mb-4 shadow">
          <p className="text-lg font-semibold mb-1">Correct Answer:</p>
          <p className="text-xl">{currentQuestion.answer}</p>
        </div>

        {/* Explanation */}
        <div className="bg-blue-700 border-2 border-blue-500 rounded-xl py-4 px-6 shadow">
          <p className="text-lg font-semibold mb-1">💡 Explanation:</p>
          <p className="text-md text-gray-100">{currentQuestion.explanation}</p>
        </div>

        {/* Play Again */}
        <button
          onClick={() => window.location.reload()}
          className="mt-8 inline-block bg-orange-600 hover:bg-orange-500 transition text-white font-semibold text-lg py-3 px-6 rounded-xl shadow-md"
        >
          🔄 Play Again
        </button>
      </div>
    );
  }

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
          {currentQuestionIndex + 1} of {QUESTIONS_PER_LEVEL[currentLevelIndex]}
          )
        </h2>
        <h3 className="text-lg mb-4">Prize: ${PRIZES[currentPrizeIndex]}</h3>

        {/* Risk vs Safe */}
        <p className="text-sm text-gray-400 mb-4">
          💰 Risking ${score} → Safe: ${getLastSafePrize(currentPrizeIndex)}
        </p>

        {/* Question Card */}
        <MillionaireQuestionCard
          prompt={currentQuestion.prompt}
          options={availableOptions}
          correctAnswer={currentQuestion.answer}
          selectedAnswer={selectedAnswer}
          isAnswerCorrect={isAnswerCorrect}
          showFeedback={showFeedback}
          onAnswer={handleAnswer}
        />

        {/* Lifelines */}
        <MillionaireHints
          remainingFiftyFifty={remainingFiftyFifty}
          onFiftyFifty={handleFiftyFifty}
          isLocked={!!selectedAnswer}
        />

        <MillionaireTakeWinningsButton
          winnings={score}
          safePrize={getLastSafePrize(currentPrizeIndex)}
          onTakeWinnings={handleTakeWinnings}
        />
      </div>
    </div>
  );
}
