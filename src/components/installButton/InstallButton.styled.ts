import styled from "styled-components";
import { CustomButton } from "../generic/generic.style";
import { DownloadOutlined } from "@ant-design/icons";

export const StyledButton = styled(CustomButton)`
  color: green;
  border-color: green;
  font-size: 1.2rem;
  line-height: 1.6rem;
  margin-right: 1.4rem;
`;

export const DownloadIcon = styled(DownloadOutlined)`
  font-size: 1.4rem;
  margin-left: 0.4rem;
`;
