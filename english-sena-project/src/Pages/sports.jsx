import React from "react";

import { GameByInput } from "../Components/GameByInput";
import data from "../data.json";

function SportsGame() {
  return (
    <GameByInput
      gameTitle="Sports"
      gameNickname="sport"
      dataList={data.sports}
    />
  );
}

export default SportsGame;
