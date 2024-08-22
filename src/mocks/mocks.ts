import { Frequency } from "../enum/enums";

export const cardsInfoMock = [
  {
    id: 0,
    activityName: "Limpar banheiro",
    dayOfTheWeek: 5,
    frequency: Frequency.WEEKLY, // or month
    members: ["Raphael", "Lucy", "Charles"],
    description: "Limpar pia, vaso e chão",
  },
  {
    id: 1,
    activityName: "Receber Marly",
    dayOfTheWeek: 6,
    frequency: Frequency.MONTHLY, // or month
    members: ["Raphael", "Lucy", "Charles", "Vitória", "Vital"],
    description: "Limpar panos no dia anterior",
  },
];
