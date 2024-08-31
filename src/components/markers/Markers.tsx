import dayjs from "dayjs";
import { Members } from "../../enum/enums";
import { CardInfo } from "../../types/types";
import { Card } from "../cardArea/card/Card";
import { RowFlexContainer, Text } from "../generic/generic.style";
import { CellButton, Column, Container, Dash, Header } from "./Markers.styled";
import { getMultiplier } from "../../helpers/helpers";
import { updateActivity } from "../../firebase";

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

  const handleClick = async (date: string, isMarked: boolean) => {
    const updatedMarkedDates =  isMarked ? selectedCard.markedDates
    // await updateActivity(selectedCard.id, )
  };

  const markersData = () => {
    const currentWeekDayDate = dayjs().day(selectedCard.dayOfTheWeek);
    const membersQty = selectedCard.membersInfo.length;
    const multiplier = getMultiplier(membersQty, selectedCard.frequency);

    const dayOffSet = dayjs(currentWeekDayDate).diff(
      selectedCard.startingDate,
      "day"
    );

    const data: MarkerInfo[] = selectedCard.membersInfo?.map((info) => {
      const buildDates = (date: string) => {
        const startingDay = dayjs(date);

        const buildDay = (factor: number) =>
          startingDay
            .add(multiplier * factor + dayOffSet, "day")
            .format("DD/MM");

        const dateArray = [buildDay(-1), buildDay(0), buildDay(1), buildDay(2)];
        const markedDates = new Set([
          "07/08",
          "14/08",
          "21/08",
          "28/08",
          "11/09",
        ]);

        return dateArray.map((date) => ({
          date,
          isMarked: markedDates.has(date),
        }));
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
                <CellButton
                  key={index}
                  type="link"
                  disabled={currentUser !== name}
                  onClick={() => handleClick(date, isMarked)}
                >
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
