import { Dispatch, ReactNode, SetStateAction } from "react";
import { CardInfo } from "./components/cardArea/card/Card.type";

export type TabContent = {
  id: number;
  name: string;
  icon: ReactNode;
  content: ReactNode;
};

export type GeneralProps = {
  activeTab: number;
  contentArray: TabContent[];
  selectedCard?: CardInfo;
  setActiveTab: Dispatch<SetStateAction<number>>;
};
