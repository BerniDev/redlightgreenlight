import { useCallback, useContext, useEffect, useState } from "react";
import { GameContext } from "../context/game.context";
import { LightColor, Step } from "../models/game";

function Game() {
  const [localScore, setLocalScore] = useState(0);
  const [color, setColor] = useState<LightColor>(LightColor.red);
  const [step, setStep] = useState<Step>();
  
  const { maxScore, setMaxScore } = useContext(GameContext);

  const handleStepLogic = useCallback((currentStep: Step) => {
    if (color === LightColor.green) {
      setLocalScore((prev) => (step !== currentStep ? prev + 1 : prev - 1));
    } else {
      setLocalScore(0);
    }
    setStep(currentStep);
  }, [color, step]);

  const getRandomDelay = useCallback(
    (min: number, max: number) => {
      if (localScore === 0) return 10000;
      else if (color === LightColor.red) return 3000;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    [color, localScore]
  );

  useEffect(() => {
    if (maxScore < localScore) setMaxScore(localScore);
  }, [localScore, maxScore, setMaxScore]);

  useEffect(() => {
    const audio = new Audio("../../public/squidgame.mp3");

    let delay = 3000;

    if (color === LightColor.green) {
      delay = getRandomDelay(1500, 4000);
      const playbackRate = 4.5 / (delay / 1000);
      audio.playbackRate = Math.max(0.5, Math.min(4.0, playbackRate));
      void audio.play();
    }

    const timer = setTimeout(() => {
      setColor((prev) =>
        prev === LightColor.green ? LightColor.red : LightColor.green
      );
    }, delay);

    return () => {
      clearTimeout(timer);
      audio.pause();
      audio.currentTime = 0;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color]);

  return (
    <div className="game-page">
      <h1>High Score:{maxScore}</h1>
      <div className="traffig-light" style={{ backgroundColor: color }}></div>
      <p>score: {localScore}</p>
      <div className="button-hub">
        <button onClick={()=>handleStepLogic(Step.left)}>LEFT</button>
        <button onClick={()=>handleStepLogic(Step.right)}>RIGHT</button>
      </div>
    </div>
  );
}

export { Game };
