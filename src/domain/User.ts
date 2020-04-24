export interface User {
  name: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  role: "user" | "admin";
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
  prefCulturalInterest: "low" | "medium" | "high" | "null";
  prefSportCadence: "low" | "medium" | "high" | "null";
  prefTravelCadence: "low" | "medium" | "high" | "null";
  prefOwlOrSkyLark: "owl" | "skylark" | "null";
  prefSexualPreferences: "male" | "female" | "both" | "null";
  prefAgeMin: number;
  prefAgeMax: number;
}

export const emptyUser: User = {
  name: "User",
  lastname: "User",
  email: "user@user.com",
  password: "Pass",
  role: "user",
  username: "pepe",
  photos: ["http://photo1.com"],
  infoAge: 18,
  infoGender: "null",
  infoEducation: "null",
  infoPhysicalCondition: "null",
  infoActivity: "null",
  infoLifeStyle: "null",
  infoKidsLover: true,
  infoPetsLover: true,
  infoCity: "null",
  prefCulturalInterest: "null",
  prefSportCadence: "null",
  prefTravelCadence: "null",
  prefOwlOrSkyLark: "null",
  prefSexualPreferences: "null",
  prefAgeMin: 18,
  prefAgeMax: 45,
};
