import { Members } from "../../enum/enums";
import { CardInfo } from "../../types/types";
import { Card } from "../cardArea/card/Card";
import { RowFlexContainer, Text } from "../generic/generic.style";
import { CellButton, Column, Container, Dash, Header } from "./Markers.styled";

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

  if (!selectedCard) return <></>;

  return (
    <RowFlexContainer>
      <Card
        key={selectedCard?.activityName}
        cardInfo={selectedCard}
        isOnMarkerTab
      />

      <Container>
        {markersData.map(({ name, content }) => (
          <Column $isDisabled={currentUser !== name}>
            <Header>{name}</Header>
            <RowFlexContainer>
              {content.map(({ date, isMarked }) => (
                <CellButton type="link">
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
