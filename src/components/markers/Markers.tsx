import dayjs, { Dayjs } from "dayjs";
import { Frequency, Members } from "../../enum/enums";
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

const markersData: MarkerInfo[] = [
  {
    name: Members.CHARLES,
    content: [
      { date: "01/02", isMarked: true },
      { date: "04/02", isMarked: false },
      { date: "07/02", isMarked: false },
      { date: "07/02", isMarked: false },
    ],
  },
  {
    name: Members.LUCY,
    content: [
      { date: "01/02", isMarked: true },
      { date: "01/02", isMarked: true },
      { date: "01/02", isMarked: true },
      { date: "01/02", isMarked: true },
    ],
  },
  {
    name: Members.RAPHAEL,
    content: [
      { date: "01/02", isMarked: false },
      { date: "01/02", isMarked: false },
      { date: "01/02", isMarked: false },
      { date: "01/02", isMarked: false },
    ],
  },
  {
    name: Members.VITAL,
    content: [
      { date: "01/02", isMarked: true },
      { date: "01/02", isMarked: true },
      { date: "01/02", isMarked: false },
      { date: "01/02", isMarked: false },
    ],
  },
  {
    name: Members.VITORIA,
    content: [
      { date: "01/02", isMarked: true },
      { date: "01/02", isMarked: true },
      { date: "01/02", isMarked: true },
      { date: "01/02", isMarked: true },
    ],
  },
];

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

    const data = selectedCard.membersInfo?.map((info) => {
      const buildDates = (date: string) => {
        const startingDay = dayjs(date);

        const buildDay = (factor: number) =>
          startingDay.add(multiplier * factor + dayOffSet, "day").format("DD/MM");

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

const data = markersData()
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
