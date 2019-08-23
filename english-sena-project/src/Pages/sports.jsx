import React from "react";

import { Description } from "../Components/Description";
import { Sports } from "../Components/Sports";

function SportsGame() {
  return (
    <>
      <Description
        title="Sports Game"
        description="This game is about what's the meaning of the images and write it in the input. You have 30 seconds to respond, good luck!"
      />

      <Sports />
    </>
  );
}

export default SportsGame;
