import { userCard, profileDto } from "../../utils/test";
import { Card } from "../../domain/Card";
import { User as ProfileDto } from "../profile-dto";
import { ProfileDtoToCardMapper } from "./mapper-profile-dto-to-card";

describe("Infrastructure -> Test profile Dto to card", () => {
  it("should give a card from a profile Dto", () => {
    const userProfileDto: ProfileDto = profileDto;
    const newCard = new ProfileDtoToCardMapper();

    const userProfileCard: Card = newCard.map(userProfileDto);

    expect(userProfileCard).toStrictEqual(userCard);
  });
});
