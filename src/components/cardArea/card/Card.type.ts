import { Frequency } from "../../../enum/enums";

export type CardInfo = {
  id: number;
  activityName: string;
  dayOfTheWeek: number;
  frequency: Frequency;
  members: string[];
  description: string;
  startingDate: string;
};

export type CardProps = {
  cardInfo: CardInfo;
  isOnMarkerTab?: boolean;
  onClick?: () => void;
};
