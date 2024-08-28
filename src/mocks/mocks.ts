import { CardInfo } from "../components/cardArea/card/Card.type";
import { Frequency } from "../enum/enums";

export const activitiesMock: CardInfo[] = [
  {
    activityName: "Limpar banheiro",
    dayOfTheWeek: 5,
    description: "Limpar pia, vaso e chão",
    frequency: Frequency.WEEKLY,
    id: 0,
    members: ["Raphael", "Lucy", "Charles"],
    startingDate: "08/09",
  },
  {
    activityName: "Receber Marly",
    dayOfTheWeek: 6,
    description: "Limpar panos no dia anterior",
    frequency: Frequency.MONTHLY,
    id: 1,
    members: ["Raphael", "Lucy", "Charles", "Vitória", "Vital"],
    startingDate: "08/09",
  },
];
