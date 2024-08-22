import { css, styled } from "styled-components";
import { Calendar } from "antd";
import { Text } from "../generic/generic.style";

export const StyledCalendar = styled(Calendar)`
  .ant-picker-calendar-mode-switch {
    display: none;
  }
  .ant-picker-cell-selected > div {
    border-radius: 0.8rem;
    box-shadow: 0px 0px 0px 1.4px red inset;
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
  padding: 1.4rem;
`;

export const Title = styled(Text)`
  font-size: 1.6rem;
  margin-bottom: 0.8rem;
  display: block;
`;

export const CircleArea = styled.div`
  display: flex;
  min-height: 0.6rem;
  justify-content: center;
`;

export const ActivityContainer = styled.div`
  display: flex;
  align-items: start;
  margin-bottom: 0.8rem;
`;

export const ActivityCircle = styled(Circle)`
  margin: 0.85rem 0.8rem 0 0;
`;

export const CircleContainer = styled.div`
  width: 1rem;
`;
