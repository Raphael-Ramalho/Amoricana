import dayjs from "dayjs";
import { Frequency, Members } from "../../enum/enums";
import { ActivityInfo, CardInfo } from "../../types/types";
import { Card } from "../cardArea/card/Card";
import { RowFlexContainer, Text } from "../generic/generic.style";
import { CellButton, Column, Container, Dash, Header } from "./Markers.styled";
import { formatDate, getMultiplier } from "../../helpers/helpers";
import { updateActivity } from "../../firebase";
import { Dispatch, SetStateAction } from "react";

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
  setActivityCards: Dispatch<SetStateAction<CardInfo[]>>;
};

export const Markers = ({
  currentUser,
  selectedCard,
  setActivityCards,
}: MarkersProps) => {
  if (!selectedCard) return <></>;

  const { dayOfTheWeek, frequency, markedDates, membersInfo, startingDate } =
    selectedCard;

  const handleClick = async (date: string) => {
    const newMarkedDates = new Set(markedDates);
    const { id, ...rest } = selectedCard;

    newMarkedDates.has(date)
      ? newMarkedDates.delete(date)
      : newMarkedDates.add(date);

    const updatedActivity: ActivityInfo = {
      ...rest,
      markedDates: Array.from(newMarkedDates),
    };

    await updateActivity(id, updatedActivity)
      .then(() => {
        setActivityCards((oldState) => {
          return oldState.map((cardInfo) =>
            cardInfo.id === id
              ? { ...cardInfo, markedDates: newMarkedDates }
              : cardInfo
          );
        });
      })
      .catch((error) => console.log("error:", error));
  };

  const buildMarkerDataMultiplus = () => {
    const currentWeekDayDate = dayjs().day(dayOfTheWeek);
    const membersQty = membersInfo.length;
    const multiplier = getMultiplier(membersQty, frequency);

    const dayOffSet = dayjs(currentWeekDayDate).diff(startingDate, "day");

    const markerData: MarkerInfo[] = membersInfo?.map((info) => {
      const buildDates = (date: string) => {
        const startingDay = dayjs(date);

        const buildDay = (factor: number) =>
          startingDay
            .add(multiplier * factor + dayOffSet, "day")
            .format("DD/MM");

        const dateArray = [buildDay(-1), buildDay(0), buildDay(1), buildDay(2)];

        return dateArray.map((date) => ({
          date,
          isMarked: markedDates.has(date),
        }));
      };

      const datesContent = buildDates(info.startingDate);

      return { name: info.member, content: datesContent };
    });

    return markerData;
  };

  const markerDataUnique: MarkerInfo[] = [
    {
      name: "" as Members,
      content: [
        {
          date: formatDate(startingDate),
          isMarked: !!markedDates.size,
        },
      ],
    },
  ];

  const renderUnique = frequency === Frequency.UNIQUE;

  const isDisabled = (name: Members) => currentUser !== name && !renderUnique;

  const data = renderUnique ? markerDataUnique : buildMarkerDataMultiplus();

  return (
    <RowFlexContainer>
      <Card
        key={selectedCard?.activityName}
        cardInfo={selectedCard}
        isOnMarkerTab
      />

      <Container>
        {data.map(({ name, content }) => (
          <Column key={name} $isDisabled={isDisabled(name)}>
            <Header>{name}</Header>
            {renderUnique ? (
              <CellButton
                type="link"
                disabled={isDisabled(name)}
                onClick={() => handleClick(content[0].date)}
              >
                <Text>{content[0].date}</Text>
                {content[0].isMarked && <Dash />}
              </CellButton>
            ) : (
              <RowFlexContainer>
                {content.map(({ date, isMarked }, index) => (
                  <CellButton
                    key={index}
                    type="link"
                    disabled={isDisabled(name)}
                    onClick={() => handleClick(date)}
                  >
                    <Text>{date}</Text>
                    {isMarked && <Dash />}
                  </CellButton>
                ))}
              </RowFlexContainer>
            )}
          </Column>
        ))}
      </Container>
    </RowFlexContainer>
  );
};
