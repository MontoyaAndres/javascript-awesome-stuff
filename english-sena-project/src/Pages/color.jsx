import React from "react";

import { Description } from "../Components/Description";
import { Color } from "../Components/Color";

function ColorGame() {
  return (
    <>
      <Description
        title="Color Game"
        description="This game is about what's the meaning of the images and select the right option. You have 30 seconds to respond, good luck!"
      />

      <Color />
    </>
  );
}

export default ColorGame;
