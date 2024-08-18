import { styled } from "styled-components";
import { Radio } from "antd";

const { Button, Group } = Radio;

export const Container = styled.div`
  width: 100%;
`;

export const StyledButton = styled(Button)`
  &&& {
    flex-grow: 1;
    border-radius: 0;
  }
  span {
    text-align: center;
    width: 100%;
    display: block;
  }
`;

export const StyledGroup = styled(Group)`
  width: 100vw;
  display: flex;
`;
