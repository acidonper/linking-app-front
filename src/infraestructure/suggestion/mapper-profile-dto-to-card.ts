import { User as ProfileDto } from "../profile/profile-dto";
import { Card } from "../../domain/Card";

export class ProfileDtoToCardMapper {
    map(ProfileDto: ProfileDto): Card {
        return {
            username: ProfileDto.username,
            photos: ProfileDto.photos,
            infoAge: ProfileDto.information.age,
            infoGender: ProfileDto.information.gender,
            infoEducation: ProfileDto.information.education,
            infoPhysicalCondition: ProfileDto.information.physicalCondition,
            infoActivity: ProfileDto.information.activity,
            infoLifeStyle: ProfileDto.information.lifeStyle,
            infoKidsLover: ProfileDto.information.kidsLover,
            infoPetsLover: ProfileDto.information.petsLover,
            infoCity: ProfileDto.information.city
        };
    }
}
