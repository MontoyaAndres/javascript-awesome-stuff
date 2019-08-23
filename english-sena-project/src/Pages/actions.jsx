import React from "react";

import { Description } from "../Components/Description";
import { Actions } from "../Components/Actions";

function ActionsGame() {
  return (
    <>
      <Description
        title="Actions Game"
        description="This game is about what's the meaning of the images and write it in the input. You have 30 seconds to respond, good luck!"
      />

      <Actions />
    </>
  );
}

export default ActionsGame;
