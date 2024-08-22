import styled from "styled-components";
import { CustomButton, RowFlexContainer, Text } from "../generic/generic.style";

export const Option = styled(CustomButton)`
  height: 8rem;
  font-size: 2.4rem;
  margin: 0 1.6rem;
  color: green;
  border-color: green;
`;

export const Container = styled(RowFlexContainer)`
  gap: 1.6rem;
`;

export const Title = styled(Text)`
  font-size: 2rem;
  line-height: 5rem;
  background-color: lightgreen;
  margin-bottom: 1.6rem;
  padding-left: 2.2rem;
`;

export const LoginContainer = styled(RowFlexContainer)`
  height: 100%;
  justify-content: center;
`;
