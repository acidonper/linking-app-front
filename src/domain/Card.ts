export interface Card {
  username: string;
  photos: string[];
  infoAge: number;
  infoGender: "male" | "female" | "null";
  infoEducation: "elementary" | "highSchool" | "university" | "null";
  infoPhysicalCondition: "thin" | "fitness" | "curvy" | "null";
  infoActivity: "homeLover" | "active" | "energetic" | "null";
  infoLifeStyle: "working" | "studying" | "enjoying" | "null";
  infoKidsLover: boolean;
  infoPetsLover: boolean;
  infoCity:
    | "Istanbul"
    | "Moscow"
    | "London"
    | "Saint"
    | "Berlin"
    | "Kiev"
    | "Madrid"
    | "Rome"
    | "Paris"
    | "Bucharest"
    | "Minsk"
    | "Hamburg"
    | "Vienna"
    | "Warsaw"
    | "Budapest"
    | "Barcelona"
    | "Kharkiv"
    | "Munich"
    | "Milan"
    | "Prague"
    | "Nizhny"
    | "Kazan"
    | "Sofia"
    | "Birmingham"
    | "Brussels"
    | "Tbilisi"
    | "Samara"
    | "Sevilla"
    | "Belgrade"
    | "Ufa"
    | "Cologne"
    | "Tekirdağ"
    | "Voronezh"
    | "Perm"
    | "Volgograd"
    | "Odessa"
    | "null";
}
