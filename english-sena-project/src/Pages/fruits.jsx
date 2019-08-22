import React from "react";

import { Description } from "../Components/Description";
import { Fruits } from "../Components/Fruits";

function FruitsGame() {
  return (
    <>
      <Description
        title="Fruits Game"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
    reprehenderit voluptatem error, eos distinctio pariatur velit, nobis minus
    optio quaerat quia modi officia ex quisquam illo soluta blanditiis, alias
    fuga!"
      />

      <Fruits />
    </>
  );
}

export default FruitsGame;
