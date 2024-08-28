import { FormFields, Frequency, Members } from "../enum/enums";

export type CardInfo = {
  id: string;
  [FormFields.ACTIVITY_NAME]: string;
  [FormFields.DAY_OF_THE_WEEK]: number;
  [FormFields.DESCRIPTION]?: string;
  [FormFields.FREQUENCY]: Frequency;
  [FormFields.MEMBERS]: Members[];
  [FormFields.STARTING_DATE]: string;
};
