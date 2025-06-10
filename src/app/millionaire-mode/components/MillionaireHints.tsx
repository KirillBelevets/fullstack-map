type Props = {
  fiftyFiftyUsed: boolean;
  probabilityUsed: boolean;
  onFiftyFifty: () => void;
  onProbabilityHint: () => void;
};

export default function MillionaireHints({
  fiftyFiftyUsed,
  probabilityUsed,
  onFiftyFifty,
  onProbabilityHint,
}: Props) {
  return (
    <div className="flex space-x-2 mb-6">
      <button onClick={onFiftyFifty} disabled={fiftyFiftyUsed} className="...">
        50:50
      </button>
      <button
        onClick={onProbabilityHint}
        disabled={probabilityUsed}
        className="..."
      >
        Probability Hint
      </button>
    </div>
  );
}
