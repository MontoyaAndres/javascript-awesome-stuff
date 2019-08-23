import React, { useState } from "react";

import { Section, QuestionColor, Option, OptionOrder } from "../styles";
import { GameLogic } from "../../Container/GameLogic";
import colorsList from "./data";

export function Color() {
  const [value, setValue] = useState("");

  return (
    <GameLogic dataList={colorsList} gameTitle="Colors">
      {({ timer, currentElement, handleNextElement }) => {
        function handleChange(value) {
          setValue(value);
        }

        function handleSendValue() {
          handleNextElement(value);
          setValue("");
        }

        return (
          <Section className="section">
            <h1 className="title">{timer} seconds</h1>
            <QuestionColor style={{ backgroundColor: currentElement.color }} />
            <h1 className="title">What color is this?</h1>
            <OptionOrder>
              {currentElement.options.map((option, i) => (
                <Option
                  className="button"
                  onClick={() => handleChange(option)}
                  key={i}
                >
                  The color is {option}
                </Option>
              ))}
            </OptionOrder>
            <button
              className="button is-success is-large"
              onClick={handleSendValue}
            >
              Next question
            </button>
          </Section>
        );
      }}
    </GameLogic>
  );
}
