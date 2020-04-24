export interface User {
  name: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  role: "user" | "admin";
  photos: string[];
  information: UserInfo;
  preferences: UserPrefs;
}

interface UserInfo {
  age: number;
  gender: "male" | "female" | "null";
  education: "elementary" | "highSchool" | "university" | "null";
  physicalCondition: "thin" | "fitness" | "curvy" | "null";
  activity: "homeLover" | "active" | "energetic" | "null";
  lifeStyle: "working" | "studying" | "enjoying" | "null";
  kidsLover: boolean;
  petsLover: boolean;
  city:
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

interface UserPrefs {
  culturalInterest: "low" | "medium" | "high" | "null";
  sportCadence: "low" | "medium" | "high" | "null";
  travelCadence: "low" | "medium" | "high" | "null";
  owlOrSkyLark: "owl" | "skylark" | "null";
  sexualPreferences: "male" | "female" | "both" | "null";
  ageRange: UserPrefsAgeRange;
}

interface UserPrefsAgeRange {
  min: number;
  max: number;
}
