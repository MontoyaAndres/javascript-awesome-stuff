import React from "react";

import { Description } from "../Components/Description";
import { Fruits } from "../Components/Fruits";

function FruitsGame() {
  return (
    <>
      <Description
        title="Fruits Game"
        description="This game is about what's the meaning of the images and select the right option. You have 30 seconds to respond, good luck!"
      />

      <Fruits />
    </>
  );
}

export default FruitsGame;
