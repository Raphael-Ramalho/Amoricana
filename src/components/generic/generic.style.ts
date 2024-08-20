import { Button } from "antd";
import styled from "styled-components";

export const Text = styled.span`
  font-family: "DM Serif Text";
`;

export const RowFlexContainer = styled.div<{ padding?: string }>`
  display: flex;
  flex-direction: column;
  padding: ${({ padding }) => (padding ? padding : "initial")};
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
