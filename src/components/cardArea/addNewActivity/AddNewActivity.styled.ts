import { Collapse } from "antd";
import styled from "styled-components";
import { Text } from "../../generic/generic.style";
import { RightCircleOutlined } from "@ant-design/icons";

export const StyledCollapse = styled(Collapse)`
  background-color: white;

  .ant-collapse-expand-icon svg {
    font-size: 2rem;
  }

  .ant-collapse-expand-icon {
    margin-right: 0.2rem;
  }
`;

export const NewActivity = styled(Text)`
  font-weight: bold;
  margin-left: 0.4rem;
`;

export const ArrowIcon = styled(RightCircleOutlined)<{ isActive?: boolean }>`
  font-size: 2rem;
  transform: rotate(${({ isActive }) => (isActive ? "90deg" : "0")});
`;
