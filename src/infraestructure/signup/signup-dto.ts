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
        | "Cologne"
        | "Tekirdağ"
        | "Voronezh"
        | "Perm"
        | "Volgograd"
        | "Odessa";
}

interface UserPrefs {
    culturalInterest: "low" | "medium" | "high";
    sportCadence: "low" | "medium" | "high";
    travelCadence: "low" | "medium" | "high";
    owlOrSkyLark: "owl" | "skylark";
    sexualPreferences: "male" | "female" | "both";
    ageRange: UserPrefsAgeRange;
}

interface UserPrefsAgeRange {
    min: number;
    max: number;
}
