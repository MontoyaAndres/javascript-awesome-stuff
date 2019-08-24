import React, { useState } from "react";

import { Section, QuestionImage } from "./styles";
import { GameLogic } from "../Container/GameLogic";
import { Description } from "./Description";

export function GameByInput({ dataList, gameTitle, gameNickname }) {
  const [value, setValue] = useState("");

  return (
    <>
      <Description
        title={`${gameTitle} Game`}
        description="This game is about what's the meaning of the images and write it in the input. You have 30 seconds to respond, good luck!"
      />

      <GameLogic dataList={dataList} gameTitle={gameTitle}>
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
                style={{
                  backgroundImage: `url(${currentElement[gameNickname]})`
                }}
              />
              <h1 className="title">What {gameNickname} is this?</h1>
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
    </>
  );
}
