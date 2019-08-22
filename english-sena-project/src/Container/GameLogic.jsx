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

  const { score, setScore, handleChangeValue } = useScore(currentElement);
  const { timer, setTimer } = useTimer(startGame);

  useEffect(() => {
    // Time has finished
    if (timer === 0) {
      setGameCompleted(true);
      setStartGame(false);
    }
  }, [timer]);

  useEffect(() => {
    // The game is completed, format all to its initial value
    if (gameCompleted) {
      setIndex(0);
      setTimer(0);
    }
  }, [gameCompleted, setTimer]);

  function handleNextElement() {
    // If is the last item, the game would be completed
    if (index === dataList.length - 1) {
      setGameCompleted(true);
      setStartGame(false);
    }

    setIndex(index => index + 1);
  }

  function handleStartGame() {
    // If the user wants to play again, format the score value
    if (score !== 0) {
      setScore(0);
    }

    setStartGame(true);
  }

  if (!startGame && !gameCompleted) {
    return <Game handleStartGame={() => handleStartGame()} title={gameTitle} />;
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
