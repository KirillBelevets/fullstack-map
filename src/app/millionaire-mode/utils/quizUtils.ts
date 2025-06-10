export function getLevelOffsets(questionsPerLevel: number[]): number[] {
  return questionsPerLevel.map((_, index) =>
    questionsPerLevel.slice(0, index).reduce((a, b) => a + b, 0)
  );
}
