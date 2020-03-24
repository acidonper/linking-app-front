import { User as ProfileDto } from "./profile-dto";
import { User } from "../../domain/User";

export class ProfileDtoToUserMapper {
    map(ProfileDto: ProfileDto): User {
        return {
            name: ProfileDto.name,
            lastname: ProfileDto.lastname,
            username: ProfileDto.username,
            email: ProfileDto.email,
            password: ProfileDto.password,
            role: ProfileDto.role,
            photos: ProfileDto.photos,
            infoAge: ProfileDto.information.age,
            infoGender: ProfileDto.information.gender,
            infoEducation: ProfileDto.information.education,
            infoPhysicalCondition: ProfileDto.information.physicalCondition,
            infoActivity: ProfileDto.information.activity,
            infoLifeStyle: ProfileDto.information.lifeStyle,
            infoKidsLover: ProfileDto.information.kidsLover,
            infoPetsLover: ProfileDto.information.petsLover,
            infoCity: ProfileDto.information.city,
            prefCulturalInterest: ProfileDto.preferences.culturalInterest,
            prefSportCadence: ProfileDto.preferences.sportCadence,
            prefTravelCadence: ProfileDto.preferences.travelCadence,
            prefOwlOrSkyLark: ProfileDto.preferences.owlOrSkyLark,
            prefSexualPreferences: ProfileDto.preferences.sexualPreferences,
            prefAgeMin: ProfileDto.preferences.ageRange.min,
            prefAgeMax: ProfileDto.preferences.ageRange.max
        };
    }
}
