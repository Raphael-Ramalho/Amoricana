import { Dispatch, ReactNode, SetStateAction } from "react";

export type TabContent = {
  id: number;
  name: string;
  icon: ReactNode;
  content: ReactNode;
};

export type GeneralProps = {
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
  contentArray: TabContent[];
};
