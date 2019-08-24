import React from "react";

import { GameByInput } from "../Components/GameByInput";
import data from "../data.json";

function ActionsGame() {
  return (
    <GameByInput
      gameTitle="Actions"
      gameNickname="action"
      dataList={data.actions}
    />
  );
}

export default ActionsGame;
