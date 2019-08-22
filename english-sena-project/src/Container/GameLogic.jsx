import React, { useState, useEffect } from "react";

import { Game } from "../Components/Game";
import { Completed } from "../Components/Completed";
import { useScore } from "../utils/useScore";
import { useTimer } from "../utils/useTimer";

export function GameLogic({ children, dataList, gameTitle }) {
  const [index, setIndex] = useState(0);
  const [startGame, setStartGame] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);

  const currentElement = dataList[index];

  const { score, handleChangeValue } = useScore(currentElement);
  const { timer } = useTimer(startGame);

  useEffect(() => {
    // Time has finished
    if (timer === 0) {
      setGameCompleted(true);
      setStartGame(false);
    }
  }, [timer]);

  useEffect(() => {
    // The game is completed, set the index to 0
    if (gameCompleted) {
      setIndex(0);
    }
  }, [gameCompleted]);

  function handleNextElement() {
    // If is the last item, the game would be completed
    if (index === dataList.length - 1) {
      setGameCompleted(true);
      setStartGame(false);
    }

    setIndex(index => index + 1);
  }

  if (!startGame && !gameCompleted) {
    return (
      <Game handleStartGame={() => setStartGame(true)} title={gameTitle} />
    );
  }

  if (gameCompleted) {
    const percent = (score / dataList.length) * 100;

    return (
      <Completed
        score={score}
        percent={percent}
        length={dataList.length}
        handleTryAgain={() => setGameCompleted(false)}
      />
    );
  }

  return children({
    timer,
    currentElement,
    handleChangeValue,
    handleNextElement
  });
}
