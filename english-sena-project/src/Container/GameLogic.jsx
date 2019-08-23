import React, { useState, useEffect } from "react";

import { Game } from "../Components/Game";
import { Completed } from "../Components/Completed";
import { useTimer } from "../utils/useTimer";

export function GameLogic({ children, dataList, gameTitle }) {
  // the variable `index` is just for checking what element should the user response
  const [index, setIndex] = useState(0);
  // the variable `score` is just for having a score when the user responses right
  const [score, setScore] = useState(0);

  // These are the variables for the status of the game
  const [startGame, setStartGame] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);

  const { timer, setTimer } = useTimer(startGame);
  const currentElement = dataList[index];

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

  function handleNextElement(userValue) {
    // If is the last item, the game would be completed
    if (index === dataList.length - 1) {
      setGameCompleted(true);
      setStartGame(false);
    }

    // If the `userValue` is equal to the current element, the score will increase
    if (currentElement.answer === userValue) {
      setScore(score => score + 1);
    }

    setIndex(index => index + 1);
  }

  function handleStartGame() {
    // If the user wants to play again, format values
    setScore(0);
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
    handleNextElement
  });
}
