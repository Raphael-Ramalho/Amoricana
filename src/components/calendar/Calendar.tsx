import dayjs, { Dayjs } from "dayjs";
import type { CellRenderInfo } from "rc-picker/lib/interface";

import { Circle, Container, StyledCalendar } from "./Calendar.styled";

export const Calendar = () => {
  const handleDay = (current: Dayjs, info: CellRenderInfo<Dayjs>) => {
    const todayDate = dayjs(info.today);
    const isToday =
      todayDate.isSame(current, "day") && todayDate.isSame(current, "month");

    return (
      <Container isToday={isToday}>
        <div>{current.date()}</div>
        <Circle />
      </Container>
    );
  };

  return (
    <StyledCalendar
      fullscreen={false}
      mode="month"
      fullCellRender={handleDay}
    />
  );
};
