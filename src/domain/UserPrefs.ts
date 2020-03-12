import { UserPrefsAgeRange } from "./UserPrefsAgeRange";

export interface UserPrefs {
    culturalInterest: "low" | "medium" | "high";
    sportCadence: "low" | "medium" | "high";
    travelCadence: "low" | "medium" | "high";
    owlOrSkyLark: "owl" | "skylark";
    sexualPreferences: "male" | "female" | "both";
    ageRange: UserPrefsAgeRange;
}
