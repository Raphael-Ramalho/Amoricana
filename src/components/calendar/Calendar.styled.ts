import { css, styled } from "styled-components";
import { Calendar } from "antd";

export const StyledCalendar = styled(Calendar)`
  .ant-picker-calendar-mode-switch {
    display: none;
  }
`;

export const Circle = styled.div<{ isActive?: boolean }>`
  margin: 0 auto;
  width: 0.6rem;
  height: 0.6rem;
  background-color: red;
  border-radius: 100%;

  ${({ isActive }) =>
    !isActive &&
    css`
      opacity: 0;
    `}
`;

export const Container = styled.div<{ isToday?: boolean }>`
  margin: 0 0.6rem;
  padding: 0.6rem 0;
  ${({ isToday }) =>
    isToday &&
    css`
      background-color: lightgreen;
    `}
`;

export const CalendarArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const DescriptionArea = styled.div`
  background-color: white;
  margin-top: 1.4rem;
  flex-grow: 1;
  border-radius: 0.8rem;
`;
