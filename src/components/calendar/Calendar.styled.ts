import { css, styled } from "styled-components";
import { Calendar } from "antd";

export const StyledCalendar = styled(Calendar)`
  .ant-picker-calendar-mode-switch {
    display: none;
  }
`;

export const Circle = styled.div`
  margin: 0 auto;
  width: 0.4rem;
  height: 0.4rem;
  background-color: red;
  border-radius: 100%;
`;

export const Container = styled.div<{ isToday?: boolean }>`
margin: 0 0.4rem;
padding: 0.4rem 0;
  ${({ isToday }) =>
    isToday &&
    css`
      background-color: lightblue;
    `}
`;
