import { styled } from "styled-components";
import { Radio } from "antd";
import { Text } from "../generic/generic.style";

const { Button, Group } = Radio;

export const Container = styled.div`
  width: 100%;
`;

export const StyledButton = styled(Button)`
  &&& {
    flex-grow: 1;
    border-radius: 0;
    height: 5.4rem;
    display: flex;
    align-items: center;
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

  :not(label.ant-radio-button-wrapper-checked) {
    color: black;
  }
  .ant-radio-button-wrapper-checked {
    border-color: green !important;
  }
  .ant-radio-button-wrapper-checked span {
    color: green;
  }
  .ant-radio-button-wrapper-checked svg {
    fill: green;
  }
  .ant-radio-button-wrapper-checked::before {
    background-color: green !important;
  }
  .ant-radio-button-wrapper-disabled {
    background-color: whitesmoke;
  }
  .ant-radio-button-wrapper-disabled span,
  .ant-radio-button-wrapper-disabled svg {
    color: grey;
    fill: grey;
  }
`;

export const TextContent = styled(Text)`
  line-height: 2.8rem;
  font-size: 1.4rem;
`;

export const IconContent = styled.div`
  margin-top: 0.4rem;
  line-height: 2.8rem;
`;
