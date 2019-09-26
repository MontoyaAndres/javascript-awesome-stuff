import React from "react";

import { Introduction, IntroductionSection, IntroductionTitle } from "./styles";

export function Completed({ score, percent, length, handleTryAgain }) {
  let message = window.localStorage.getItem("nickname");

  if (percent > 80) {
    message += " Awesome Work!";
  } else if (percent <= 80 && percent >= 60) {
    message += " You did it well!";
  } else {
    message += " Not Good!";
  }

  return (
    <IntroductionSection className="section">
      <Introduction>
        <IntroductionTitle className="title is-3">
          You got {score} out of {length} Correct!
        </IntroductionTitle>
        <IntroductionTitle className="title is-1">
          {percent}% - {message}
        </IntroductionTitle>
        <IntroductionTitle className="title is-4">
          Do you want to try again?
        </IntroductionTitle>
        <button
          className="button is-success is-large"
          onClick={() => handleTryAgain()}
        >
          Try again!
        </button>
      </Introduction>
    </IntroductionSection>
  );
}
