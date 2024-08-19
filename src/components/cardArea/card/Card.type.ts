export enum Frequency {
  WEEKLY = "Semanalmente",
  MONTHLY = "Uma vez ao mês",
}

export type CardInfo = {
  id: number;
  activityName: string;
  dayOfTheWeek: number;
  frequency: Frequency;
  members: string[];
  description: string;
};

export type CardProps = {
  cardInfo: CardInfo;
};
