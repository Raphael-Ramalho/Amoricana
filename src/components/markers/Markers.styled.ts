import styled from "styled-components";
import { RowFlexContainer, Text } from "../generic/generic.style";
import { Button } from "antd";

export const Container = styled.div`
  background-color: white;
  border-radius: 0.8rem;
  display: flex;
  justify-content: space-around;
  padding: 1.2rem;
`;

export const Dash = styled.div`
  background-color: red;
  height: 0.2rem;
  margin-top: 0.2rem;
  position: absolute;
  transform: rotate(-10deg);
  width: 4rem;
`;

export const CellButton = styled(Button)`
  align-items: center;
  height: 4rem;
  justify-content: center;
  color: black !important;
  padding: 0;
`;

export const Header = styled(Text)`
  text-align: center;
  margin-bottom: 0.6rem;
  width: fit-content;
`;

export const Column = styled(RowFlexContainer)<{ $isDisabled?: boolean }>`
  align-items: center;
  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};
`;
