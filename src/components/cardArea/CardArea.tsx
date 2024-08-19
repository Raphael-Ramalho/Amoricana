import {
  Container,
  AddButton,
  NewActivity,
  PlusIcon,
} from "./CardArea.styled";
import { Card } from "./card/Card";
import { CardInfo, Frequency } from "./card/Card.type";

export const CardArea = () => {
  const cardsInfo: CardInfo[] = [
    {
      id: 0,
      activityName: "Limpar banheiro",
      dayOfTheWeek: 6,
      frequency: Frequency.WEEKLY, // or month
      members: ["Raphael", "Lucy", "Charles"],
      description: "Limpar pia, vaso e chão",
    },
  ];

  return (
    <Container>
      <AddButton>
        <NewActivity>Adicionar nova atividade</NewActivity>
        <PlusIcon />
      </AddButton>

      {cardsInfo.map((cardInfo) => (
        <Card key={cardInfo.id} cardInfo={cardInfo} />
      ))}
    </Container>
  );
};
