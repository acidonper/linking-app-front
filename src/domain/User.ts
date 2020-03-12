import { UserInfo } from "./UserInfo";
import { UserPrefs } from "./UserPrefs";

export interface User {
    name: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    role: "user";
    photos: string[];
    information: UserInfo;
    preferences: UserPrefs;
}
