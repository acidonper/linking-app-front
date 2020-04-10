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
