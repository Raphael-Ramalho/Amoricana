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
import { Members } from "../../enum/enums";
import { buildDay, buildOffset } from "../../helpers/helpers";

type CalendarProps = {
  activityCards: CardInfo[];
  currentUser?: Members;
};

export const Calendar = ({ activityCards, currentUser }: CalendarProps) => {
  const [selectedDay, setSelectedDay] = useState<Dayjs>(dayjs());

  if (!currentUser) return <></>;

  //TODO -
  //Preciso mapear todos os cards.
  //Identificar cards que possuam o usuário cadastrado
  const filteredCards = activityCards.filter((card) => {
    const members = card.membersInfo.map((info) => info.member);
    return members.includes(currentUser);
  });

  // const buildActivityList = () => {
  //   const test = filteredCards.map((card) => {
  //     const userStartingDate = card.membersInfo.find(
  //       (info) => info.member === currentUser
  //     )!.startingDate;

  //     const { multiplier, dayOffSet } = buildOffset(card);

  //     return [-2, -1, 0, 1, 2, 3].map((reference) =>
  //       buildDay(userStartingDate, multiplier, dayOffSet, reference)
  //     );
  //   });
  //   return test;
  // };

  // console.log("result:", buildActivityList());

  //
  //Marcar datas no calendario
  //Configurar onClick

  const activitiesForSelectedDay: CardInfo[] = [];

  const handleDay = (current: Dayjs, info: CellRenderInfo<Dayjs>) => {
    const todayDate = dayjs(info.today);
    // console.log("currentMonth:", selectedDay.month());
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
