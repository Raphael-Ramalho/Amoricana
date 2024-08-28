import { Dispatch, SetStateAction } from "react";
import { Container } from "./CardArea.styled";
import { AddNewActivity } from "./addNewActivity/AddNewActivity";
import { Card } from "./card/Card";
import { CardInfo } from "../../types/types";

type CardAreaProps = {
  setSelectedCard: Dispatch<SetStateAction<CardInfo | undefined>>;
  setActiveTab: Dispatch<SetStateAction<number>>;
  setActivityCards: Dispatch<SetStateAction<CardInfo[]>>;
  activityCards: CardInfo[];
};

export const CardArea = ({
  setSelectedCard,
  setActiveTab,
  setActivityCards,
  activityCards,
}: CardAreaProps) => {
  return (
    <Container>
      <AddNewActivity setActivityCards={setActivityCards}/>

      {activityCards.map((cardInfo) => (
        <Card
          key={cardInfo.activityName}
          cardInfo={cardInfo}
          setActivityCards={setActivityCards}
          onClick={() => {
            setSelectedCard(cardInfo);
            setActiveTab(1);
          }}
        />
      ))}
    </Container>
  );
};
