import styled from "styled-components";
import { MinusCircleOutlined } from "@ant-design/icons";
import { RowFlexContainer, Text } from "../generic/generic.style";
import { Button, Modal } from "antd";

export const CardContainer = styled.div<{ $isOnMarkerTab: boolean }>`
  width: 100%;
  border-radius: 0.8rem;
  background-color: white;
  margin: ${({ $isOnMarkerTab }) =>
    $isOnMarkerTab ? "0 0 1.6rem 0" : "1.6rem 0 0 0"};
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
  align-items: flex-start;
`;

export const FirstContainer = styled.div`
  border-radius: 0.8rem;
  padding-left: 1rem;
  background-color: lightgreen;
`;

export const RemoveIcon = styled(MinusCircleOutlined)`
  font-size: 2rem;
  fill: black;
`;

export const RemoveButton = styled(Button)`
  align-items: flex-start;
  color: black;
  padding: 0;
`;

export const Label = styled(Text)`
  font-weight: bold;
  margin-left: 1rem;
`;

export const NameLabel = styled(Text)`
  font-weight: bold;
`;

export const Order = styled(Text)`
  padding-left: 2rem;
`;

export const StyledModal = styled(Modal)`
  p {
    margin: 0.4rem;
  }
  .ant-btn-primary {
    background-color: green;
  }
`;
