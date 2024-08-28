import { Frequency, Members } from "../enum/enums";
import { CardInfo } from "../types/types";

export const activitiesMock: CardInfo[] = [
  {
    id: '0',
    activityName: "Limpar banheiro",
    dayOfTheWeek: 5,
    description: "Limpar pia, vaso e chão",
    frequency: Frequency.WEEKLY,
    members: [Members.CHARLES, Members.LUCY, Members.RAPHAEL],
    startingDate: "08/09",
  },
  {
    id: '1',
    activityName: "Receber Marly",
    dayOfTheWeek: 6,
    description: "Limpar panos no dia anterior",
    frequency: Frequency.MONTHLY,
    members: [
      Members.CHARLES,
      Members.LUCY,
      Members.RAPHAEL,
      Members.VITAL,
      Members.VITORIA,
    ],
    startingDate: "08/09",
  },
];
