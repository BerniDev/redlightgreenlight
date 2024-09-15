import { useCallback, useContext, useEffect, useState } from "react";
import { GameContext } from "../context/game.context";
import { LightColor, Step } from "../models/game";
import { handleVibrate } from "../services/device.service";
import { calculateTrafficLightDelay } from "../services/game.service";

function Game() {
  const [localScore, setLocalScore] = useState(0);
  const [color, setColor] = useState<LightColor>(LightColor.red);
  const [step, setStep] = useState<Step>();

  const { maxScore, setMaxScore } = useContext(GameContext);

  const handleStepLogic = useCallback(
    (currentStep: Step) => {
      if (color === LightColor.green) {
        if (step === currentStep) {
          handleVibrate();
          setLocalScore((prev) => prev - 1);
        } else {
          setLocalScore((prev) => prev + 1);
        }
      } else {
        handleVibrate(500);
        setLocalScore((prev) => (prev > 0 ? 0 : prev));
      }
      setStep(currentStep);
    },
    [color, step]
  );

  const getLightDelay = useCallback(
    (color: LightColor) => {
      return calculateTrafficLightDelay(localScore, color);
    },
    [localScore]
  );

  useEffect(() => {
    if (maxScore < localScore) setMaxScore(localScore);
  }, [localScore, maxScore, setMaxScore]);

  useEffect(() => {
    const audio = new Audio(`${import.meta.env.BASE_URL}squidgame.mp3`);

    const delay = getLightDelay(color);

    // Calculate and play audio when light is green;
    if (color === LightColor.green) {
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
      <h1 className="title">RLGL Game</h1>
      <div className="gameplay-info">
        <h1 data-testid="maxscore-message">High Score: {maxScore}</h1>
        <div>
          <div
            className="traffig-light"
            style={{ backgroundColor: color }}
          ></div>
          <p data-testid="score-message">score: {localScore}</p>
        </div>
        <div className="button-hub">
          <button
            data-testid="left-step-button"
            onClick={() => handleStepLogic(Step.left)}
          >
            LEFT
          </button>
          <button
            data-testid="right-step-button"
            onClick={() => handleStepLogic(Step.right)}
          >
            RIGHT
          </button>
        </div>
      </div>
    </div>
  );
}

export { Game };
