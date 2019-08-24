import styled from "styled-components";

const Introduction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 400px;
`;

const IntroductionSection = styled.section`
  background-color: #03a9f4;
  margin-bottom: 40px;
`;

const IntroductionTitle = styled.h1`
  color: white;
`;

const Section = styled.section`
  margin-bottom: 40px;
  background-color: #ff9800;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const QuestionColor = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
`;

const QuestionImage = styled.div`
  width: 400px;
  height: 300px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const Option = styled.button`
  background-color: #f44336;
  border: none;
  color: white;
  margin: 2rem 1rem;
  width: 500px;

  &:hover {
    background-color: #e53935;
  }

  &:visited,
  &:focus,
  &:active {
    background-color: #8bc34a;
  }

  @media (max-width: 1024px) {
    width: auto;
    margin: 1rem 0;
  }
`;

const OptionOrder = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export {
  Introduction,
  IntroductionSection,
  IntroductionTitle,
  Section,
  QuestionColor,
  QuestionImage,
  Option,
  OptionOrder
};
