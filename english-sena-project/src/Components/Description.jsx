import React from "react";
import styled from "styled-components";

const TitlePadding = styled.h1`
  padding-bottom: 50px;
`;

export function Description({ title, description }) {
  return (
    <section className="section">
      <div className="container">
        <TitlePadding className="title has-text-centered">{title}</TitlePadding>
        <p className="subtitle">{description}</p>
      </div>
    </section>
  );
}
