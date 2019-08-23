import React, { useState } from "react";

import { Section, QuestionImage } from "../styles";
import { GameLogic } from "../../Container/GameLogic";
import actionsList from "./data";

export function Actions() {
  const [value, setValue] = useState("");

  return (
    <GameLogic dataList={actionsList} gameTitle="Actions">
      {({ timer, currentElement, handleNextElement }) => {
        function handleChange(e) {
          setValue(e.target.value);
        }

        function handleSendValue() {
          handleNextElement(value.toLowerCase().trim());
          setValue("");
        }

        return (
          <Section className="section">
            <h1 className="title">{timer} seconds</h1>
            <QuestionImage
              style={{ backgroundImage: `url(${currentElement.action})` }}
            />
            <h1 className="title">What action is this?</h1>
            <div className="field">
              <div className="control">
                <input
                  className="input is-large"
                  value={value}
                  onChange={handleChange}
                  type="text"
                  placeholder="Input your response"
                />
              </div>
            </div>
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
