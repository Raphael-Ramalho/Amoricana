import { styled } from "styled-components";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Text } from "./components/generic/generic.style";

const image = require("./assets/images/roseBush.jpg");

export const MainSection = styled.div`
  background: url(${image}) no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  padding-left: 2.2rem;
  min-height: 5rem;
`;

export const HeaderText = styled(Text)`
  font-weight: bold;
  font-size: 2rem;
  color: black;
`;

export const BackIcon = styled(ArrowLeftOutlined)`
  font-size: 1.6rem;
  svg {
    fill: black;
  }
`;

export const BackButton = styled(Button)`
  padding: 0;
  padding-right: 1.6rem;
  height: 100%;
`;
