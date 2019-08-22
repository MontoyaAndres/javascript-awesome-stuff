import React from "react";

import { Description } from "../Components/Description";
import { Animals } from "../Components/Animals";

function AnimalsGame() {
  return (
    <>
      <Description
        title="Animals Game"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
  reprehenderit voluptatem error, eos distinctio pariatur velit, nobis minus
  optio quaerat quia modi officia ex quisquam illo soluta blanditiis, alias
  fuga!"
      />

      <Animals />
    </>
  );
}

export default AnimalsGame;
