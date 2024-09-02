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

export const buildOffset = (selectedCard: CardInfo) => {
  const { dayOfTheWeek, frequency, membersInfo, startingDate } = selectedCard;

  const currentWeekDayDate = dayjs().day(dayOfTheWeek);
  const membersQty = membersInfo.length;
  const multiplier = getMultiplier(membersQty, frequency);

  const dayOffSet = dayjs(currentWeekDayDate).diff(startingDate, "day");

  return { multiplier, dayOffSet };
};

export const buildDay = (
  date: string,
  multiplier: number,
  dayOffSet: number,
  weekFactor: number
) => {
  return dayjs(date)
    .add(multiplier * weekFactor + dayOffSet, "day")
    .format("DD/MM");
};

export const buildMarkerDataMultiples = (selectedCard: CardInfo) => {
  const { markedDates, membersInfo } = selectedCard;

  const { multiplier, dayOffSet } = buildOffset(selectedCard);

  const buildDates = (date: string) => {
    const referenceArray = [-1, 0, 1, 2];

    const dateArray = referenceArray.map((reference) =>
      buildDay(date, multiplier, dayOffSet, reference)
    );

    return dateArray.map((date) => ({
      date,
      isMarked: markedDates.has(date),
    }));
  };

  const markerData: MarkerInfo[] = membersInfo?.map((info) => {
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
