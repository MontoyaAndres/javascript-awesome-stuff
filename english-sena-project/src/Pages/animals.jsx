import React from "react";

import { Description } from "../Components/Description";
import { Animals } from "../Components/Animals";

function AnimalsGame() {
  return (
    <>
      <Description
        title="Animals Game"
        description="This game is about what's the meaning of the images and select the right option. You have 30 seconds to respond, good luck!"
      />

      <Animals />
    </>
  );
}

export default AnimalsGame;
