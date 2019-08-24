import React from "react";

import { GameBySelect } from "../Components/GameBySelect";
import data from "../data.json";

function ColorGame() {
  return (
    <GameBySelect
      gameTitle="Colors"
      gameNickname="color"
      dataList={data.colors}
    />
  );
}

export default ColorGame;
