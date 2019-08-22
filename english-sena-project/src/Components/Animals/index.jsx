import React from "react";

import { Section, QuestionImage, Option, OptionOrder } from "../styles";
import { GameLogic } from "../../Container/GameLogic";
import animalsList from "./data";

export function Animals() {
  return (
    <GameLogic dataList={animalsList} gameTitle="Animals">
      {({ timer, currentElement, handleChangeValue, handleNextElement }) => (
        <Section className="section">
          <h1 className="title">{timer} seconds</h1>
          <QuestionImage
            style={{ backgroundImage: `url(${currentElement.animal})` }}
          />
          <h1 className="title">What animal is this?</h1>
          <OptionOrder>
            {currentElement.options.map((option, i) => (
              <Option
                className="button"
                onClick={() => handleChangeValue(option)}
                key={i}
              >
                The animal is {option}
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
