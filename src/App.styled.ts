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

export const Header = styled.div`
  background-color: white;
  line-height: 5rem;
  padding-left: 2.2rem;
  font-size: 2rem;
  font-weight: bold;
  font-family: "DM Serif Text";
`;
