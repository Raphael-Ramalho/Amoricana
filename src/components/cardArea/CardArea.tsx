import { Dispatch, lazy, SetStateAction, Suspense } from "react";
import { Container } from "./CardArea.styled";
import { AddNewActivity } from "./addNewActivity/AddNewActivity";
import { CardInfo } from "../../types/types";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Card = lazy(() => import("./card/Card"));

type CardAreaProps = {
  setSelectedCardId: Dispatch<SetStateAction<string | undefined>>;
  setActiveTab: Dispatch<SetStateAction<number>>;
  setActivityCards: Dispatch<SetStateAction<CardInfo[]>>;
  activityCards: CardInfo[];
};

export const CardArea = ({
  setSelectedCardId,
  setActiveTab,
  setActivityCards,
  activityCards,
}: CardAreaProps) => {
  const renderLoading = (
    <Spin
      indicator={
        <LoadingOutlined style={{ fontSize: 60, color: "green" }} spin />
      }
    />
  );

  return (
    <Container>
      <AddNewActivity setActivityCards={setActivityCards} />

      {activityCards.map((cardInfo) => (
        <Suspense fallback={renderLoading}>
          <Card
            key={`${cardInfo.activityName}-${activityCards.length}`}
            cardInfo={cardInfo}
            setActivityCards={setActivityCards}
            onClick={() => {
              setSelectedCardId(cardInfo.id);
              setActiveTab(1);
            }}
          />
        </Suspense>
      ))}
    </Container>
  );
};
