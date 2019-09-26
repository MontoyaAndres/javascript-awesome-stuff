import React from "react";
import { Router, Redirect } from "@reach/router";

import Actions from "./Pages/actions";
import Animals from "./Pages/animals";
import Color from "./Pages/color";
import Fruits from "./Pages/fruits";
import Sports from "./Pages/sports";
import Login from "./Pages/login";

import { Header } from "./Layout/Header";

import { useAuth } from "./Context";

function App() {
  const [isAuth, activateAuth, removeAuth] = useAuth();

  return (
    <>
      <Header isAuth={isAuth} removeAuth={removeAuth} />
      <Router>
        {!isAuth && <Redirect from="/actions" to="/login" noThrow />}
        {!isAuth && <Redirect from="/animals" to="/login" noThrow />}
        {!isAuth && <Redirect from="/color" to="/login" noThrow />}
        {!isAuth && <Redirect from="/fruits" to="/login" noThrow />}
        {!isAuth && <Redirect from="/" to="/login" noThrow />}
        {isAuth && <Redirect from="/login" to="/" noThrow />}

        <Sports path="/" default />
        <Actions path="/actions" />
        <Animals path="/animals" />
        <Color path="/color" />
        <Fruits path="/fruits" />
        <Login path="/login" activateAuth={activateAuth} />
      </Router>
    </>
  );
}

export default App;
