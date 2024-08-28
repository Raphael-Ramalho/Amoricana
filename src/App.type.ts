import { Dispatch, ReactNode, SetStateAction } from "react";
import { CardInfo } from "./types/types";

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
