import { Dispatch, SetStateAction } from "react";
import { CardInfo } from "../../../types/types";

export type CardProps = {
  cardInfo: CardInfo;
  setActivityCards?: Dispatch<SetStateAction<CardInfo[]>>,
  isOnMarkerTab?: boolean;
  onClick?: () => void;
};
