import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  color: #677282;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
  padding: 2em 0;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 3em;
  }
`;

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-column-gap: 3em;
  margin: 0 1em;
  padding-bottom: 8em;

  @media (min-width: 768px) {
    margin: 0 2em;
  }

  @media (min-width: 1024px) {
    margin: 0 6em;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  border: solid #eef0f1 1px;
  height: 300px;
  display: grid;
  grid-template-rows: 1fr 2fr auto;
  padding: 1em;
  margin-bottom: 1em;

  @media (min-width: 1024px) {
    padding: 3em;
    margin-bottom: 0;
  }
`;

const TitleCard = styled.h3`
  color: #677282;
  font-weight: bold;
  font-size: 2em;
  margin: 0;
`;

const DescriptionCard = styled.p`
  color: #677282;
`;

const ActionsCard = styled.div`
  display: flex;
  justify-content: space-between;
  color: #f47c20;
  font-weight: bold;
`;

const dataCard = [
  {
    title: "Transporte de carga",
    description:
      "Transportamos la mercancía de tu negocio con nuestra variedad de camiones que son desde 1 Tonelada hasta Trailers."
  },
  {
    title: "Planeación de fletes",
    description: "Te ayudamos a planear, asesorar y administrar tus fletes."
  },
  {
    title: "Mudanzas",
    description:
      "Contamos con el personal adecuado para que tus mudanzas sean las más rápidas y con la confianza de que tus cosas están cuidadas por los mejores."
  }
];

export const Services = () => {
  return (
    <>
      <Title>Nuestros servicios</Title>
      <Wrapper>
        {dataCard.map((card, index) => (
          <Card key={index}>
            <TitleCard>{card.title}</TitleCard>
            <DescriptionCard>{card.description}</DescriptionCard>
            <ActionsCard>
              <span>Cotizar servicio</span>
              <img src="/Icons/arrow_forward.svg" alt="Arrow forward" />
            </ActionsCard>
          </Card>
        ))}
      </Wrapper>
    </>
  );
};
