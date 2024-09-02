import dayjs, { Dayjs } from "dayjs";
import type { CellRenderInfo } from "antd/node_modules/rc-picker/lib/interface";

import {
  ActivityCircle,
  ActivityContainer,
  CalendarArea,
  Circle,
  CircleContainer,
  Container,
  DescriptionArea,
  StyledCalendar,
  Title,
} from "./Calendar.styled";
import { Text } from "../generic/generic.style";
import { useState } from "react";
import { CardInfo } from "../../types/types";

export const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState<Dayjs>(dayjs());
  const activitiesForSelectedDay: CardInfo[] = [];
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
        onChange={setSelectedDay}
        fullCellRender={handleDay}
      />
      <DescriptionArea>
        <Title>Atividades para o dia {selectedDay.format("DD/MM")}</Title>
        {activitiesForSelectedDay?.map(({ activityName, description }) => (
          <ActivityContainer key={activityName}>
            <CircleContainer>
              <ActivityCircle $isactive={true} />
            </CircleContainer>
            <Text>
              <strong>{activityName}</strong> {`(${description})`}
            </Text>
          </ActivityContainer>
        ))}
        {activitiesForSelectedDay.length === 0 && (
          <Text>- Não há atividades cadastradas para esse dia</Text>
        )}
      </DescriptionArea>
    </CalendarArea>
  );
};
