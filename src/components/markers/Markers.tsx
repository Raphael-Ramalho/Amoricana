import { Frequency, Members } from "../../enum/enums";
import { ActivityInfo, CardInfo } from "../../types/types";
import Card from "../cardArea/card/Card";
import { RowFlexContainer, Text } from "../generic/generic.style";
import { CellButton, Column, Container, Dash, Header } from "./Markers.styled";
import {
  buildMarkerDataMultiples,
  buildMarkerDataUnique,
} from "../../helpers/helpers";
import { updateActivity } from "../../firebase";
import { Dispatch, SetStateAction } from "react";

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

  const { frequency, markedDates } = selectedCard;

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

  const renderUnique = frequency === Frequency.UNIQUE;

  const isDisabled = (name: Members) => currentUser !== name && !renderUnique;

  const data = renderUnique
    ? buildMarkerDataUnique(selectedCard)
    : buildMarkerDataMultiples(selectedCard);

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
