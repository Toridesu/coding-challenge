import { useState } from "react";
import { challenges } from "@/data/challenges";

const useChallengeSelection = () => {
  const [currentChallengeId, setCurrentChallengeId] = useState<string | null>(
    null
  );

  const currentChallenge = challenges.find((c) => c.id === currentChallengeId);

  return {
    currentChallenge,
    setCurrentChallengeId,
  };
};

export default useChallengeSelection;