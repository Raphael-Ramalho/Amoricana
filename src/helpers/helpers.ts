import dayjs from "dayjs";
import { Frequency, Members } from "../enum/enums";
import { CardInfo, MarkerInfo } from "../types/types";

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

export const formatDate = (date: string) => {
  return dayjs(date).format("DD/MM");
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

export const buildMarkerDataMultiplus = (selectedCard: CardInfo) => {
  const { dayOfTheWeek, frequency, markedDates, membersInfo, startingDate } =
    selectedCard;

  const currentWeekDayDate = dayjs().day(dayOfTheWeek);
  const membersQty = membersInfo.length;
  const multiplier = getMultiplier(membersQty, frequency);

  const dayOffSet = dayjs(currentWeekDayDate).diff(startingDate, "day");

  const markerData: MarkerInfo[] = membersInfo?.map((info) => {
    const buildDates = (date: string) => {
      const startingDay = dayjs(date);

      const buildDay = (factor: number) =>
        startingDay.add(multiplier * factor + dayOffSet, "day").format("DD/MM");

      const dateArray = [buildDay(-1), buildDay(0), buildDay(1), buildDay(2)];

      return dateArray.map((date) => ({
        date,
        isMarked: markedDates.has(date),
      }));
    };

    const datesContent = buildDates(info.startingDate);

    return { name: info.member, content: datesContent };
  });

  return markerData;
};

export const buildMarkerDataUnique = (selectedCard: CardInfo): MarkerInfo[] => {
  const { markedDates, startingDate } = selectedCard;

  return [
    {
      name: "" as Members,
      content: [
        {
          date: formatDate(startingDate),
          isMarked: !!markedDates.size,
        },
      ],
    },
  ];
};
