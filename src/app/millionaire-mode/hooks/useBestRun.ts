import { useState, useEffect } from "react";

export function useBestRun() {
  const [bestRun, setBestRun] = useState<number>(0);

  useEffect(() => {
    const storedBestRun = localStorage.getItem("millionaire_best_run");
    if (storedBestRun) {
      setBestRun(parseInt(storedBestRun));
    }
  }, []);

  const updateBestRun = (finalScore: number) => {
    if (finalScore > bestRun) {
      localStorage.setItem("millionaire_best_run", finalScore.toString());
      setBestRun(finalScore);
    }
  };

  return { bestRun, updateBestRun };
}
