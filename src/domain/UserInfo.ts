export interface UserInfo {
    age: number;
    gender: "male" | "female";
    education: "elementary" | "highSchool" | "university";
    physicalCondition: "thin" | "fitness" | "curvy";
    activity: "homeLover" | "active" | "energetic";
    lifeStyle: "working" | "studying" | "enjoying";
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
        | "Rostov-on-Don"
        | "Cologne"
        | "Tekirdağ"
        | "Voronezh"
        | "Perm"
        | "Volgograd"
        | "Odessa";
}
