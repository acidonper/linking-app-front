import { User as SignupDto } from "./signup-dto";
import { User } from "../../domain/User";

export class SignupDtoToUserMapper {
    map(SignupDto: SignupDto): User {
        return {
            name: SignupDto.name,
            lastname: SignupDto.lastname,
            username: SignupDto.username,
            email: SignupDto.email,
            password: SignupDto.password,
            role: SignupDto.role,
            photos: SignupDto.photos,
            infoAge: SignupDto.information.age,
            infoGender: SignupDto.information.gender,
            infoEducation: SignupDto.information.education,
            infoPhysicalCondition: SignupDto.information.physicalCondition,
            infoActivity: SignupDto.information.activity,
            infoLifeStyle: SignupDto.information.lifeStyle,
            infoKidsLover: SignupDto.information.kidsLover,
            infoPetsLover: SignupDto.information.petsLover,
            infoCity: SignupDto.information.city,
            prefCulturalInterest: SignupDto.preferences.culturalInterest,
            prefSportCadence: SignupDto.preferences.sportCadence,
            prefTravelCadence: SignupDto.preferences.travelCadence,
            prefOwlOrSkyLark: SignupDto.preferences.owlOrSkyLark,
            prefSexualPreferences: SignupDto.preferences.sexualPreferences,
            prefAgeMin: SignupDto.preferences.ageRange.min,
            prefAgeMax: SignupDto.preferences.ageRange.max
        };
    }
}
