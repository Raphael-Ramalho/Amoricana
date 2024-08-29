import { Dayjs } from "dayjs";
import { Frequency } from "../enum/enums";

export const buildWeekString = (day: number) => {
  switch (day) {
    case 0:
      return "Domingo";
    case 1:
      return "Segunda-feira";
    case 2:
      return "Terça-feira";
    case 3:
      return "Quarta-feira";
    case 4:
      return "Quinta-feira";
    case 5:
      return "Sexta-feira";
    default:
      return "Sábado";
  }
};

export const formatDate = (date: Dayjs) => {
  return date.format("DD-MM-YYYY");
};

export const getMultiplier = (membersQty: number, frequency: Frequency) => {
  switch (frequency) {
    case Frequency.UNIQUE:
      return membersQty;
    case Frequency.WEEKLY:
      return 7 * membersQty;
    case Frequency.BIWEEKLY:
      return 7 * membersQty * 2;
    default:
      return 7 * membersQty * 4;
  }
};
