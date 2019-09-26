import React from "react";
import styled from "styled-components";

const Login = styled.div`
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: center;
  margin: 0 4vh;
`;

function login({ activateAuth }) {
  function handleSubmit(e) {
    e.preventDefault();
    activateAuth(e.target[0].value);
  }

  return (
    <Login>
      <form onSubmit={handleSubmit} method="POST">
        <label className="subtitle" htmlFor="nickname">
          Enter your favorite nickname!
        </label>
        <input
          type="text"
          className="input is-medium"
          placeholder="Nickname"
          id="nickname"
          required
        />
        <button className="button is-primary is-medium">Sign in</button>
      </form>

      <style jsx="true">{`
        label,
        input,
        button {
          margin: 20px 0;
        }
      `}</style>
    </Login>
  );
}

export default login;
