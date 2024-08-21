import styled from "styled-components";
import { MinusCircleOutlined } from "@ant-design/icons";
import { RowFlexContainer, Text } from "../generic/generic.style";
import { Button, Modal } from "antd";

export const CardContainer = styled.div`
  width: 100%;
  border-radius: 0.8rem;
  background-color: white;
  margin-top: 1.6rem;
`;

export const InnerContainer = styled(RowFlexContainer)`
  margin: 1.4rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RemoveIcon = styled(MinusCircleOutlined)`
  font-size: 2rem;
  fill: black;
`;

export const RemoveButton = styled(Button)`
  padding: 0;
  color: black;
`;

export const Label = styled(Text)`
  font-weight: bold;
`;

export const Order = styled(Text)`
  padding-left: 0.8rem;
`;

export const StyledModal = styled(Modal)`
  p {
    margin: 0.4rem;
  }
  .ant-btn-primary {
    background-color: green;
  }
`;
