import { LightColor } from "../models/game";

export const calculateTrafficLightDelay = (
  score: number,
  color: LightColor
) => {
  const maxDelay = 10000;
  if (color === LightColor.red) return 3000;

  else if (score === 0) return maxDelay;
  
  const delayScore = score * 100;
  return (
    maxDelay -
    (delayScore > 2000 ? 2000 : delayScore) +
    Math.floor(Math.random() * (3000 + 1)) -
    1500
  );
};
