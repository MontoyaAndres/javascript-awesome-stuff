import React from "react";

import { Introduction, IntroductionSection, IntroductionTitle } from "./styles";

export function Game({ handleStartGame, title }) {
  return (
    <IntroductionSection className="section">
      <Introduction>
        <IntroductionTitle className="title">
          Let's play this game! Don't forget to read first the description.
        </IntroductionTitle>
        <button
          className="button is-success is-large"
          onClick={() => handleStartGame()}
        >
          Play {title} game
        </button>
      </Introduction>
    </IntroductionSection>
  );
}
