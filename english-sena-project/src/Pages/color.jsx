import React, { useState } from "react";
import styled from "styled-components";

import { Description } from "../Components/Description";
import { Game } from "../Components/Game";
import { useRecognition } from "../utils/useRecognition";

const colorsList = [
  {
    id: 1,
    color: "blue",
    word: "blue",
    win: false
  },
  {
    id: 2,
    color: "yellow",
    word: "yellow",
    win: false
  },
  {
    id: 3,
    color: "gray",
    word: "gray",
    win: false
  },
  {
    id: 4,
    color: "red",
    word: "red",
    win: false
  },
  {
    id: 5,
    color: "brown",
    word: "brown",
    win: false
  }
];

const Section = styled.section`
  height: 400px;
  margin-bottom: 40px;
  background-color: #ff9800;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const QuestionColor = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
`;

function ColorGame() {
  const [colors, setColors] = useState(colorsList);
  const [startGame, setStartGame] = useState(false);
  const { recognition, transcript } = useRecognition();

  async function handleStartGame() {
    const isMicrophoneActive = await navigator.permissions.query({
      name: "microphone"
    });

    if (isMicrophoneActive.state === "granted") {
      setStartGame(true);
      recognition.start();
    } else {
      navigator.mediaDevices.getUserMedia({ audio: true });
      handleStartGame();
    }
  }

  function handleColorCorrect() {
    // https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks
  }

  return (
    <>
      <Description
        title="Color Game"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
    reprehenderit voluptatem error, eos distinctio pariatur velit, nobis minus
    optio quaerat quia modi officia ex quisquam illo soluta blanditiis, alias
    fuga!"
      />

      {!startGame ? (
        <Game handleStartGame={handleStartGame} title="Colors" />
      ) : (
        colors.map(color => (
          <Section className="section" key={color.id}>
            <QuestionColor style={{ backgroundColor: color.color }} />
            <h1 className="title">What color is this?</h1>
            <p className="subtitle">{transcript}</p>
          </Section>
        ))
      )}
    </>
  );
}

export default ColorGame;
