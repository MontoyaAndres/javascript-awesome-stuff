import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin-bottom: 40px;
  background-color: #03a9f4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 400px;
`;

export function Completed({ score, percent, length, handleTryAgain }) {
  let message = "";

  if (percent > 80) {
    message = "Awesome Work!";
  } else if (percent <= 80 && percent >= 60) {
    message = "You did it well!";
  } else {
    message = "Not Good!";
  }

  return (
    <Section className="section">
      <h3 className="title is-3">
        You got {score} out of {length} Correct!
      </h3>
      <h1 className="title is-1">
        {percent}% - {message}
      </h1>
      <h4 className="title is-4">Do you want to try again?</h4>
      <button
        className="button is-success is-large"
        onClick={() => handleTryAgain()}
      >
        Try again!
      </button>
    </Section>
  );
}
