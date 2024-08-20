export enum Frequency {
  UNIQUE = "Unica",
  WEEKLY = "Semanal",
  BIWEEKLY = "Quinzenal",
  MONTHLY = "Mensal",
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
