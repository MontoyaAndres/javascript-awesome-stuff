import React from "react";
import { Router } from "@reach/router";

import Actions from "./Pages/actions";
import Animals from "./Pages/animals";
import Color from "./Pages/color";
import Fruits from "./Pages/fruits";
import Sports from "./Pages/sports";

import { Header } from "./Layout/Header";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Actions path="/actions" />
        <Animals path="/animals" />
        <Color path="/color" />
        <Fruits path="/fruits" />
        <Sports path="/" />
      </Router>
    </>
  );
}

export default App;
