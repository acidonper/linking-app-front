import { Card } from "../domain/Card";
import { User } from "../domain/User";
import { User as ProfileDto } from "../infrastructure/profile/profile-dto";

export const card: Card = {
  username: "pepe",
  photos: ["http://photo1.com"],
  infoAge: 18,
  infoGender: "male",
  infoEducation: "elementary",
  infoPhysicalCondition: "thin",
  infoActivity: "homeLover",
  infoLifeStyle: "working",
  infoKidsLover: true,
  infoPetsLover: true,
  infoCity: "Madrid",
};

export const card2: Card = {
  username: "pepa",
  photos: ["http://photo1.com"],
  infoAge: 19,
  infoGender: "female",
  infoEducation: "elementary",
  infoPhysicalCondition: "thin",
  infoActivity: "homeLover",
  infoLifeStyle: "working",
  infoKidsLover: true,
  infoPetsLover: true,
  infoCity: "Madrid",
};

export const user: User = {
  name: "User",
  lastname: "User",
  email: "user@user.com",
  password: "Pass",
  role: "user",
  username: "pepe",
  photos: ["http://photo1.com"],
  infoAge: 18,
  infoGender: "male",
  infoEducation: "elementary",
  infoPhysicalCondition: "thin",
  infoActivity: "homeLover",
  infoLifeStyle: "working",
  infoKidsLover: true,
  infoPetsLover: true,
  infoCity: "Madrid",
  prefCulturalInterest: "low",
  prefSportCadence: "low",
  prefTravelCadence: "low",
  prefOwlOrSkyLark: "owl",
  prefSexualPreferences: "male",
  prefAgeMin: 18,
  prefAgeMax: 45,
};

export const profileDto: ProfileDto = {
  name: "User",
  lastname: "User",
  email: "user@user.com",
  password: "Pass",
  role: "user",
  username: "pepe",
  photos: ["http://photo1.com"],
  information: {
    age: 18,
    gender: "male",
    education: "elementary",
    physicalCondition: "thin",
    activity: "homeLover",
    lifeStyle: "working",
    kidsLover: true,
    petsLover: true,
    city: "Madrid",
  },
  preferences: {
    culturalInterest: "low",
    sportCadence: "low",
    travelCadence: "low",
    owlOrSkyLark: "owl",
    sexualPreferences: "male",
    ageRange: {
      min: 18,
      max: 45,
    },
  },
};

export const signupUser = {
  name: "test",
  lastname: "01",
  username: "test01",
  email: "test01@example.com",
  password: "test01password",
  infoAge: 18,
  infoGender: "male",
  infoEducation: "elementary",
  infoPhysicalCondition: "thin",
  infoActivity: "homeLover",
  infoLifeStyle: "working",
  infoCity: "Madrid",
  infoKidsLover: true,
  infoPetsLover: false,
  prefCulturalInterest: "low",
  prefSportCadence: "low",
  prefTravelCadence: "low",
  prefOwlOrSkyLark: "owl",
  prefSexualPreferences: "both",
  prefAgeMax: 45,
  prefAgeMin: 18,
  photos: ["http://photo1.com"],
  role: "user",
};

export const pickCards: Card[] = [card, card2];
export const liveCards: Card[] = [card, card2];
export const chatCards: Card[] = [card, card2];
