import { UserInfo } from "./UserInfo";
import { UserPrefs } from "./UserPrefs";

export interface User {
    name: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    role: "admin";
    photos: string[];
    information: UserInfo;
    preferences: UserPrefs;
}
