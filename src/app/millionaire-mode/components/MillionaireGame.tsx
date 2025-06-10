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
  const [bestRun, setBestRun] = useState<number>(0);

  const [remainingFiftyFifty, setRemainingFiftyFifty] = useState(3);
  const [usedFiftyFiftyOnCurrentQuestion, setUsedFiftyFiftyOnCurrentQuestion] =
    useState(false);
  const [usedFiftyFiftyButtonHistory, setUsedFiftyFiftyButtonHistory] =
    useState<Record<string, number | null>>({});

  // Load best run from localStorage
  useEffect(() => {
    const storedBestRun = localStorage.getItem("millionaire_best_run");
    if (storedBestRun) {
      setBestRun(parseInt(storedBestRun));
    }
  }, []);

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

  useEffect(() => {
    const currentKey = `${currentLevelIndex}-${currentQuestionIndex}`;
    const buttonIndex = usedFiftyFiftyButtonHistory[currentKey];

    if (buttonIndex !== undefined && buttonIndex !== null) {
      setUsedFiftyFiftyOnCurrentQuestion(true);
    } else {
      setUsedFiftyFiftyOnCurrentQuestion(false);
    }
  }, [currentLevelIndex, currentQuestionIndex, usedFiftyFiftyButtonHistory]);

  // Helper: Update best run
  const updateBestRun = (finalScore: number) => {
    if (finalScore > bestRun) {
      localStorage.setItem("millionaire_best_run", finalScore.toString());
      setBestRun(finalScore);
    }
  };

  // Handler: Answer click
  const handleAnswer = (option: string) => {
    if (selectedAnswer) return;
    setSelectedAnswer(option);

    const correct = option === shuffledQuestions[currentQuestionIndex].answer;
    setIsAnswerCorrect(correct);
    setShowFeedback(true);

    const levelOffsets = QUESTIONS_PER_LEVEL.map((_, index) =>
      QUESTIONS_PER_LEVEL.slice(0, index).reduce((a, b) => a + b, 0)
    );
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
        updateBestRun(score);
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
  const handleFiftyFifty = (buttonIdx: number) => {
    if (
      remainingFiftyFifty <= 0 ||
      usedFiftyFiftyOnCurrentQuestion ||
      availableOptions.length <= 2
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
    setUsedFiftyFiftyButtonHistory((prev) => ({
      ...prev,
      [`${currentLevelIndex}-${currentQuestionIndex}`]: buttonIdx,
    }));
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

  // Render if Game Won
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

  // In progress game
  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  if (!currentQuestion) return <p>Loading questions...</p>;

  const levelOffsets = QUESTIONS_PER_LEVEL.map((_, index) =>
    QUESTIONS_PER_LEVEL.slice(0, index).reduce((a, b) => a + b, 0)
  );
  const currentPrizeIndex =
    levelOffsets[currentLevelIndex] + currentQuestionIndex;

  const currentFiftyFiftyButtonIndex =
    usedFiftyFiftyButtonHistory[
      `${currentLevelIndex}-${currentQuestionIndex}`
    ] ?? null;

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

        {/* Question Card */}
        <MillionaireQuestionCard
          prompt={currentQuestion.prompt}
          options={availableOptions}
          correctAnswer={currentQuestion.answer}
          explanation={currentQuestion.explanation}
          selectedAnswer={selectedAnswer}
          isAnswerCorrect={isAnswerCorrect}
          showFeedback={showFeedback}
          onAnswer={handleAnswer}
        />

        {/* Lifelines */}
        <MillionaireHints
          remainingFiftyFifty={remainingFiftyFifty}
          usedFiftyFiftyOnCurrentQuestion={usedFiftyFiftyOnCurrentQuestion}
          usedFiftyFiftyButtonIndex={currentFiftyFiftyButtonIndex}
          onFiftyFifty={handleFiftyFifty}
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
