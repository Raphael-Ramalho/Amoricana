import dayjs, { Dayjs } from "dayjs";
import type { CellRenderInfo } from "rc-picker/lib/interface";

import {
  CalendarArea,
  Circle,
  Container,
  DescriptionArea,
  StyledCalendar,
} from "./Calendar.styled";

export const Calendar = () => {
  const handleDay = (current: Dayjs, info: CellRenderInfo<Dayjs>) => {
    const todayDate = dayjs(info.today);
    const isToday =
      todayDate.isSame(current, "day") && todayDate.isSame(current, "month");

    // MOCK
    const hasActivity = Math.floor(Math.random() * 10) % 2 === 0;

    return (
      <Container $istoday={isToday}>
        <div>{current.date()}</div>
        <Circle $isactive={hasActivity} />
      </Container>
    );
  };

  return (
    <CalendarArea>
      <StyledCalendar
        fullscreen={false}
        mode="month"
        fullCellRender={handleDay}
      />
      <DescriptionArea>ola</DescriptionArea>
    </CalendarArea>
  );
};
