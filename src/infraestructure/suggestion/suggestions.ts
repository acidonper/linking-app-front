import axios from "axios";
import { Card } from "../../domain/Card";
import { User as UserProfile } from "../profile/profile-dto";
import { ProfileDtoToCardMapper } from "./mapper-profile-dto-to-card";

export const apiGetSuggestions = async (
    token: string,
    username: string
): Promise<Card[]> => {
    // const url = `http://{process.env.SERVER_PORT}:{process.env.SERVER_PORT}/api/auth/login`;

    const url = "http://localhost:5000/api/users/suggestions?id=" + username;

    const createAxios = axios.create({
        timeout: 3000,
        headers: { Authorization: "Bearer " + token }
    });

    const cards: Card[] = [];

    try {
        const response = await createAxios.get(url);
        console.log(response);
        const responseUserProfiles: UserProfile[] = response.data.users;

        responseUserProfiles.map(profile => {
            const profileDto = new ProfileDtoToCardMapper();
            const card: Card = profileDto.map(profile);
            cards.push(card);
        });
        return cards;
    } catch (error) {
        return error;
    }
};
