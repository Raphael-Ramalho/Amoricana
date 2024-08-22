import { Dispatch, SetStateAction } from "react";
import { cardsInfoMock } from "../../mocks/mocks";
import { Container } from "./CardArea.styled";
import { AddNewActivity } from "./addNewActivity/AddNewActivity";
import { Card } from "./card/Card";
import { CardInfo } from "./card/Card.type";

type CardAreaProps = {
  setSelectedCard: Dispatch<SetStateAction<CardInfo | undefined>>;
  setActiveTab: Dispatch<SetStateAction<number>>;
};

export const CardArea = ({ setSelectedCard, setActiveTab }: CardAreaProps) => {
  // MOCK
  const cardsInfo: CardInfo[] = cardsInfoMock;

  return (
    <Container>
      <AddNewActivity />

      {cardsInfo.map((cardInfo) => (
        <Card
          key={cardInfo.id}
          cardInfo={cardInfo}
          onClick={() => {
            setSelectedCard(cardInfo);
            setActiveTab(1);
          }}
        />
      ))}
    </Container>
  );
};
