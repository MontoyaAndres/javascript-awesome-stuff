import React from "react";

import { Section, QuestionImage, Option, OptionOrder } from "../styles";
import { GameLogic } from "../../Container/GameLogic";
import fruitsList from "./data";

export function Fruits() {
  return (
    <GameLogic dataList={fruitsList} gameTitle="Fruits">
      {({ timer, currentElement, handleChangeValue, handleNextElement }) => (
        <Section className="section">
          <h1 className="title">{timer} seconds</h1>
          <QuestionImage
            style={{ backgroundImage: `url(${currentElement.fruit})` }}
          />
          <h1 className="title">What fruit is this?</h1>
          <OptionOrder>
            {currentElement.options.map((option, i) => (
              <Option
                className="button"
                onClick={() => handleChangeValue(option)}
                key={i}
              >
                The fruit is {option}
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
