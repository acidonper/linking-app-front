import { User as SignupDto } from "./signup-dto";
import { User } from "../../domain/User";

export class UserToSignupDtoMapper {
    map(User: User): SignupDto {
        return {
            name: User.name,
            lastname: User.lastname,
            username: User.username,
            email: User.email,
            password: User.password,
            role: User.role,
            photos: User.photos,
            information: {
                age: User.infoAge,
                gender: User.infoGender,
                education: User.infoEducation,
                physicalCondition: User.infoPhysicalCondition,
                activity: User.infoActivity,
                lifeStyle: User.infoLifeStyle,
                kidsLover: User.infoKidsLover,
                petsLover: User.infoPetsLover,
                city: User.infoCity
            },
            preferences: {
                culturalInterest: User.prefCulturalInterest,
                sportCadence: User.prefSportCadence,
                travelCadence: User.prefTravelCadence,
                owlOrSkyLark: User.prefOwlOrSkyLark,
                sexualPreferences: User.prefSexualPreferences,
                ageRange: {
                    max: User.prefAgeMin,
                    min: User.prefAgeMax
                }
            }
        };
    }
}
