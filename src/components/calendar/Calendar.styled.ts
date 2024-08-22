import { css, styled } from "styled-components";
import { Calendar } from "antd";

export const StyledCalendar = styled(Calendar)`
  .ant-picker-calendar-mode-switch {
    display: none;
  }
`;

export const Circle = styled.div<{ $isactive: boolean }>`
  margin: 0 auto;
  width: 0.6rem;
  height: 0.6rem;
  background-color: ${({ $isactive }) => ($isactive ? "red" : "inherit")};
  border-radius: 100%;
`;

export const Container = styled.div<{ $istoday?: boolean }>`
  margin: 0 0.6rem;
  padding: 0.6rem 0;
  ${({ $istoday }) =>
    $istoday &&
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

export const CircleArea = styled.div`
  display: flex;
  min-height: 0.6rem;
  justify-content: center;
`;
