import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: white;
`;

const Section = styled.section`
  background-color: #03a9f4;
  margin-bottom: 40px;
`;

const GameIntroduction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 400px;
`;

export function Game({ handleStartGame, title }) {
  return (
    <Section className="section">
      <GameIntroduction>
        <Title className="title">
          Let's play this game! Don't forget to read first the description.
        </Title>
        <button
          className="button is-success is-large"
          onClick={() => handleStartGame()}
        >
          Play {title} game
        </button>
      </GameIntroduction>
    </Section>
  );
}
