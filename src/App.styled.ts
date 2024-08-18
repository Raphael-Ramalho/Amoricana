import { styled } from "styled-components";

const image = require("./assets/images/roseBush4.jpg");

export const MainSection = styled.div`
  background: url(${image}) no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  flex-grow: 1;
`;
