import React from "react";

import { GameBySelect } from "../Components/GameBySelect";
import data from "../data.json";

function FruitsGame() {
  return (
    <GameBySelect
      gameTitle="Fruits"
      gameNickname="fruit"
      dataList={data.fruits}
    />
  );
}

export default FruitsGame;
