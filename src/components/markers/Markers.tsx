import dayjs from "dayjs";
import {  Members } from "../../enum/enums";
import { CardInfo } from "../../types/types";
import { Card } from "../cardArea/card/Card";
import { RowFlexContainer, Text } from "../generic/generic.style";
import { CellButton, Column, Container, Dash, Header } from "./Markers.styled";
import { getMultiplier } from "../../helpers/helpers";

type MarkerInfo = {
  name: Members;
  content: {
    date: string;
    isMarked: boolean;
  }[];
};

type MarkersProps = {
  currentUser?: Members;
  selectedCard?: CardInfo;
};

export const Markers = ({ currentUser, selectedCard }: MarkersProps) => {
  if (!selectedCard) return <></>;

  const markersData = () => {
    const currentWeekDayDate = dayjs().day(selectedCard.dayOfTheWeek);

    const dayOffSet = dayjs(currentWeekDayDate).diff(
      selectedCard.startingDate,
      "day"
    );

    const membersQty = selectedCard.membersInfo.length;

    const multiplier = getMultiplier(membersQty, selectedCard.frequency);

    const data: MarkerInfo[] = selectedCard.membersInfo?.map((info) => {
      const buildDates = (date: string) => {
        const startingDay = dayjs(date);

        const buildDay = (factor: number) =>
          startingDay
            .add(multiplier * factor + dayOffSet, "day")
            .format("DD/MM");

        const content = [
          { date: buildDay(-1), isMarked: false },
          { date: buildDay(0), isMarked: false },
          { date: buildDay(1), isMarked: false },
          { date: buildDay(2), isMarked: false },
        ];

        return content;
      };

      const datesContent = buildDates(info.startingDate);

      return { name: info.member, content: datesContent };
    });

    return data;
  };

  const data = markersData();
  return (
    <RowFlexContainer>
      <Card
        key={selectedCard?.activityName}
        cardInfo={selectedCard}
        isOnMarkerTab
      />

      <Container>
        {data.map(({ name, content }) => (
          <Column key={name} $isDisabled={currentUser !== name}>
            <Header>{name}</Header>
            <RowFlexContainer>
              {content.map(({ date, isMarked }, index) => (
                <CellButton key={index} type="link">
                  <Text>{date}</Text>
                  {isMarked && <Dash />}
                </CellButton>
              ))}
            </RowFlexContainer>
          </Column>
        ))}
      </Container>
    </RowFlexContainer>
  );
};
