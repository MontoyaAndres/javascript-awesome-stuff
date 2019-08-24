import React, { useState } from "react";

import {
  Section,
  QuestionImage,
  OptionOrder,
  Option,
  QuestionColor
} from "./styles";
import { GameLogic } from "../Container/GameLogic";
import { Description } from "./Description";

export function GameBySelect({ dataList, gameTitle, gameNickname }) {
  const [value, setValue] = useState("");

  return (
    <>
      <Description
        title={`${gameTitle} Game`}
        description="This game is about what's the meaning of the images and select the right option. You have 30 seconds to respond, good luck!"
      />

      <GameLogic dataList={dataList} gameTitle={gameTitle}>
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
              {currentElement.color ? (
                <QuestionColor
                  style={{ backgroundColor: currentElement.color }}
                />
              ) : (
                <QuestionImage
                  style={{
                    backgroundImage: `url(${currentElement[gameNickname]})`
                  }}
                />
              )}
              <h1 className="title">What {gameNickname} is this?</h1>
              <OptionOrder>
                {currentElement.options.map((option, i) => (
                  <Option
                    className="button"
                    onClick={() => handleChange(option)}
                    key={i}
                  >
                    The {gameNickname} is {option}
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
    </>
  );
}
