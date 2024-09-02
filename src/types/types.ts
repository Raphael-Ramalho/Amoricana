import { Dayjs } from "dayjs";
import { FormFields, Frequency, Members } from "../enum/enums";

export type CardInfo = {
  id: string;
  activityName: string;
  dayOfTheWeek: number;
  description?: string;
  frequency: Frequency;
  startingDate: string;
  markedDates: Set<string>;
  membersInfo: {
    member: Members;
    startingDate: string;
  }[];
};

export type ActivityInfo = Omit<CardInfo, "id" | "markedDates"> & {
  markedDates: string[];
};

export type FormInfo = {
  [FormFields.ACTIVITY_NAME]: string;
  [FormFields.DAY_OF_THE_WEEK]: number;
  [FormFields.DESCRIPTION]?: string;
  [FormFields.FREQUENCY]: Frequency;
  [FormFields.MEMBERS]: Members[];
  [FormFields.STARTING_DATE]: Dayjs;
};

export type MarkerInfo = {
  name: Members;
  content: {
    date: string;
    isMarked: boolean;
  }[];
};