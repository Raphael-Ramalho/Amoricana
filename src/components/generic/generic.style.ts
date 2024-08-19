import { Button } from "antd";
import styled from "styled-components";

export const Text = styled.span`
  font-family: "DM Serif Text";
`;

export const RowFlexContainer = styled.div<{direction?: string}>`
  display: flex;
  flex-direction: column;
`;

export const CustomButton = styled(Button)`
  &&& {
    &:active,
    &:focus {
      color: green;
      border-color: green;
    }
    &:visited {
      color: black;
      border-color: black;
    }
  }
`;
