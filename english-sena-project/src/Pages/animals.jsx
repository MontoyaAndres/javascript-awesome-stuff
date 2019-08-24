import React from "react";

import { GameBySelect } from "../Components/GameBySelect";
import data from "../data.json";

function AnimalsGame() {
  return (
    <GameBySelect
      gameTitle="Animals"
      gameNickname="animal"
      dataList={data.animals}
    />
  );
}

export default AnimalsGame;
