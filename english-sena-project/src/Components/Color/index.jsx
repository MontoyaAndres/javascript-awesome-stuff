import React from "react";

import { Section, QuestionColor, Option, OptionOrder } from "./styles";
import { GameLogic } from "../../Container/GameLogic";

const colorsList = [
  {
    color: "blue",
    options: ["Red", "Blue", "Orange", "Green", "Magenta"],
    answer: "Blue"
  },
  {
    color: "yellow",
    options: ["Red", "Blue", "Yellow", "Green", "Magenta"],
    answer: "Yellow"
  },
  {
    color: "gray",
    options: ["Red", "Gray", "Orange", "Green", "Magenta"],
    answer: "Gray"
  },
  {
    color: "red",
    options: ["Red", "Blue", "Orange", "Green", "Magenta"],
    answer: "Red"
  },
  {
    color: "brown",
    options: ["Red", "Blue", "Orange", "Brown", "Magenta"],
    answer: "Brown"
  }
];

export function Color() {
  return (
    <GameLogic dataList={colorsList} gameTitle="Colors">
      {({ timer, currentElement, handleChangeValue, handleNextElement }) => (
        <Section className="section">
          <h1 className="title">{timer} seconds</h1>
          <QuestionColor style={{ backgroundColor: currentElement.color }} />
          <h1 className="title">What color is this?</h1>
          <OptionOrder>
            {currentElement.options.map((option, i) => (
              <Option
                className="button"
                onClick={() => handleChangeValue(option)}
                key={i}
              >
                The color is {option}
              </Option>
            ))}
          </OptionOrder>
          <button
            className="button is-success is-large"
            onClick={handleNextElement}
          >
            Next question
          </button>
        </Section>
      )}
    </GameLogic>
  );
}
