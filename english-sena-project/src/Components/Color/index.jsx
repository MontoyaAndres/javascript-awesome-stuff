import React, { useState, useEffect } from "react";

import { Game } from "../Game";
import { useTimer } from "../../utils/useTimer";
import { Section, QuestionColor } from "./styles";

const colorsList = [
  {
    id: 0,
    color: "blue",
    options: ["Red", "Blue", "Orange", "Green", "Magenta"],
    answer: "Blue"
  },
  {
    id: 1,
    color: "yellow",
    options: ["Red", "Blue", "Yellow", "Green", "Magenta"],
    answer: "Yellow"
  },
  {
    id: 2,
    color: "gray",
    options: ["Red", "Gray", "Orange", "Green", "Magenta"],
    answer: "Gray"
  },
  {
    id: 3,
    color: "red",
    options: ["Red", "Blue", "Orange", "Green", "Magenta"],
    answer: "Red"
  },
  {
    id: 4,
    color: "brown",
    options: ["Red", "Blue", "Orange", "Brown", "Magenta"],
    answer: "Brown"
  }
];

export function Color() {
  const [element, setElement] = useState(colorsList[0]);
  const [userResponse, setUserResponse] = useState([]);
  const [startGame, setStartGame] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const { timer } = useTimer(startGame);

  useEffect(() => {
    if (timer === 0) {
      setGameCompleted(true);
      setStartGame(false);
    }
  }, [timer]);

  useEffect(() => {
    if (userResponse.length === colorsList.length) {
      setGameCompleted(true);
      setStartGame(false);
    }
  }, [userResponse]);

  function handleStartGame() {
    setStartGame(true);
  }

  function handleTryGameAgain() {
    setGameCompleted(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setElement(element => colorsList[element.id + 1]);
  }

  if (!startGame && !gameCompleted) {
    return <Game handleStartGame={handleStartGame} title="Colors" />;
  }

  if (gameCompleted) {
    return (
      <Section className="section">
        <h3 className="title is-3">
          Game completed! Do you want to try again?
        </h3>
        <button
          className="button is-success is-large"
          onClick={() => handleTryGameAgain()}
        >
          Try again!
        </button>
      </Section>
    );
  }

  return (
    <Section className="section">
      <h1 className="title">{timer} seconds</h1>
      <QuestionColor style={{ backgroundColor: element.color }} />
      <h1 className="title">What color is this?</h1>
      <form onSubmit={handleSubmit}>
        {/* element.options.map((option, i) => (
          <label className="button" key={i}>
            {option}
            <input type="radio" value={option} checked={option === } />
          </label>
        )) */}
        <button className="button is-success is-large" type="submit">
          Next question
        </button>
      </form>
    </Section>
  );
}
