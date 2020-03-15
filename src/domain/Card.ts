export interface Card {
    username: string;
    photos: string[];
    infoAge: number;
    infoGender: "male" | "female";
    infoEducation: "elementary" | "highSchool" | "university";
    infoPhysicalCondition: "thin" | "fitness" | "curvy";
    infoActivity: "homeLover" | "active" | "energetic";
    infoLifeStyle: "working" | "studying" | "enjoying";
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
        | "Odessa";
}
