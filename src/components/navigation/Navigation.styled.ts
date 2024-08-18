import { styled } from "styled-components";
import { Radio } from "antd";

const { Button, Group } = Radio;

export const Container = styled.div`
  width: 100%;
`;

export const StyledButton = styled(Button)`
  flex-grow: 1;
`;

export const StyledGroup = styled(Group)`
  width: 100vw;
  display: flex;
`;
