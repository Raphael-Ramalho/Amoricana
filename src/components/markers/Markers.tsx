import { Frequency, Members } from "../../enum/enums";
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

export const Markers = () => {
  const user = Members.CHARLES;

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

  const cardInfo = {
    id: 0,
    activityName: "Limpar banheiro",
    dayOfTheWeek: 6,
    frequency: Frequency.WEEKLY, // or month
    members: ["Raphael", "Lucy", "Charles"],
    description: "Limpar pia, vaso e chão",
  };

  return (
    <RowFlexContainer>
      <Card key={cardInfo.id} cardInfo={cardInfo} isOnMarkerTab />

      <Container>
        {markersData.map(({ name, content }) => (
          <Column $isDisabled={user !== name}>
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
