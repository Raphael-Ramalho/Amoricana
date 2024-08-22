import { Frequency } from "../../enum/enums";
import { Container } from "./CardArea.styled";
import { AddNewActivity } from "./addNewActivity/AddNewActivity";
import { Card } from "./card/Card";
import { CardInfo } from "./card/Card.type";

export const CardArea = () => {
  // MOCK
  const cardsInfo: CardInfo[] = [
    {
      id: 0,
      activityName: "Limpar banheiro",
      dayOfTheWeek: 6,
      frequency: Frequency.WEEKLY,
      members: ["Raphael", "Lucy", "Charles"],
      description: "Limpar pia, vaso e chão",
    },
  ];

  return (
    <Container>
      <AddNewActivity />

      {cardsInfo.map((cardInfo) => (
        <Card key={cardInfo.id} cardInfo={cardInfo} />
      ))}
    </Container>
  );
};
