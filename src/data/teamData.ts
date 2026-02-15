import type { TFunction } from "i18next";
export interface teamText {
  id: number;
  text: string;
  photo: string;
}

const getTeamInfo = (t: TFunction): teamText[] => [
  {
    id: 1,
    text: t("hero.team.karina"),
    photo: "/img/reviews/karina.jpg",
  },
  {
    id: 2,
    text: t("hero.team.dmytro"),
    photo: "/img/reviews/chaika.jpg",
  },
  {
    id: 3,
       text: t("hero.team.alex"),
    photo: "/img/reviews/andryshka.jpg",
  },
];

export default getTeamInfo;
