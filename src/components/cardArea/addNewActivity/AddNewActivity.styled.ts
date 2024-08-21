import { Collapse, Form } from "antd";
import styled from "styled-components";
import { Text } from "../../generic/generic.style";
import { PlusCircleOutlined } from "@ant-design/icons";

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

export const AddIcon = styled(PlusCircleOutlined)<{ $isactive?: boolean }>`
  font-size: 2rem;
  transform: rotate(${({ $isactive }) => ($isactive ? "45deg" : "0")});
`;

export const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 1rem;
  }
`;

export const HorizontalItem = styled(Form.Item)`
  .ant-col {
    max-width: fit-content !important;
    padding: 0;
  }
`;
