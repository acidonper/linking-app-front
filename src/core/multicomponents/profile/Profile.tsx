import React, { useState, useEffect } from "react";
import { bind } from "../../../utils/bind";
import styles from "./Profile.module.css";
import { Button } from "../../components/button/Button";
import { InputText } from "../../components/input/inputtext/InputText";
import { InputPass } from "../../components/input/inputpassword/InputPass";
import { InputRadio } from "../../components/input/inputradio/InputRadio";
import { InputNumber } from "../../components/input/inputnumber/InputNumber";
import { User } from "../../../domain/User";
import { cities } from "../../../domain/Cities";

const cx = bind(styles);

interface Props {
    title: string;
    text: string;
    close(): void;
    submit(inputUser: User): void;
    type: "singup" | "profile";
    syncSettings(): any;
}

export const Profile: React.FunctionComponent<Props> = ({
    title,
    text,
    close,
    submit,
    type,
    syncSettings
}) => {
    let user: User = {} as any;

    const syncUserProfileSettings = async () => {
        const userProfileSettings = await syncSettings();
        console.log(userProfileSettings);
        setInputUser(userProfileSettings);
    };

    useEffect(() => {
        if (type === "profile") syncUserProfileSettings();
    }, []);

    const [inputUser, setInputUser] = useState(user);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await submit(inputUser);
        if (typeof response !== "string") {
            alert("Error: Operation could not be completed. Please try again");
        } else {
            alert(response);
        }
    };

    return (
        <>
            <div className={cx("title")}>{title}</div>
            <form className={cx("container")} onSubmit={handleSubmit}>
                <div className={cx("container__main")}>
                    <InputText
                        onChange={(data: string) =>
                            setInputUser({ ...inputUser, name: data })
                        }
                        label="First Name"
                        value={inputUser.name}
                        required={true}
                        type="text"
                    />
                    <InputText
                        onChange={(data: string) =>
                            setInputUser({ ...inputUser, lastname: data })
                        }
                        label="Last Name"
                        value={inputUser.lastname}
                        required={true}
                        type="text"
                    />
                    <InputText
                        onChange={(data: string) =>
                            setInputUser({ ...inputUser, username: data })
                        }
                        label="Username"
                        value={inputUser.username}
                        required={true}
                        type="text"
                    />
                    <InputText
                        onChange={(data: string) =>
                            setInputUser({ ...inputUser, email: data })
                        }
                        label="Email"
                        value={inputUser.email}
                        required={true}
                        type="email"
                    />
                    <InputPass
                        onChange={data =>
                            setInputUser({ ...inputUser, password: data })
                        }
                        label="Password"
                        value={inputUser.password}
                        required={true}
                        security={true}
                    />
                </div>
                <div className={cx("container__options")}>
                    <div className={cx("container__options__info")}>
                        <h1>Information</h1>
                        <div className={cx("container__options__info__age")}>
                            <h2>Age</h2>
                            <InputNumber
                                onChange={(data: User["infoAge"]) =>
                                    setInputUser({
                                        ...inputUser,
                                        infoAge: data
                                    })
                                }
                                label="Age"
                                value={inputUser.infoAge}
                                required={true}
                                min={18}
                                max={65}
                            />
                        </div>
                        <InputRadio
                            name={"Gender"}
                            labels={["female", "male"]}
                            onChange={(data: User["infoGender"]) =>
                                setInputUser({
                                    ...inputUser,
                                    infoGender: data
                                })
                            }
                        ></InputRadio>
                        <InputRadio
                            name={"Education"}
                            labels={["elementary", "highSchool", "university"]}
                            onChange={(data: User["infoEducation"]) =>
                                setInputUser({
                                    ...inputUser,
                                    infoEducation: data
                                })
                            }
                        ></InputRadio>
                        <InputRadio
                            name={"Physical Condition"}
                            labels={["thin", "fitness", "curvy"]}
                            onChange={(data: User["infoPhysicalCondition"]) =>
                                setInputUser({
                                    ...inputUser,
                                    infoPhysicalCondition: data
                                })
                            }
                        ></InputRadio>
                        <InputRadio
                            name={"Activity"}
                            labels={["homeLover", "active", "energetic"]}
                            onChange={(data: User["infoActivity"]) =>
                                setInputUser({
                                    ...inputUser,
                                    infoActivity: data
                                })
                            }
                        ></InputRadio>
                        <InputRadio
                            name={"Lifestyle"}
                            labels={["working", "studying", "enjoying"]}
                            onChange={(data: User["infoLifeStyle"]) =>
                                setInputUser({
                                    ...inputUser,
                                    infoLifeStyle: data
                                })
                            }
                        ></InputRadio>
                        <InputRadio
                            name={"City"}
                            labels={cities}
                            onChange={(data: User["infoCity"]) =>
                                setInputUser({
                                    ...inputUser,
                                    infoCity: data
                                })
                            }
                        ></InputRadio>
                        <InputRadio
                            name={"Kids Lover"}
                            labels={[true, false]}
                            onChange={(data: User["infoKidsLover"]) =>
                                setInputUser({
                                    ...inputUser,
                                    infoKidsLover: data
                                })
                            }
                        ></InputRadio>
                        <InputRadio
                            name={"Pets Lover"}
                            labels={[true, false]}
                            onChange={(data: User["infoPetsLover"]) =>
                                setInputUser({
                                    ...inputUser,
                                    infoPetsLover: data
                                })
                            }
                        ></InputRadio>
                    </div>
                    <div className={cx("container__options__prefs")}>
                        <h1>Preferences</h1>
                        <InputRadio
                            name={"Cultural Interest"}
                            labels={["low", "medium", "high"]}
                            onChange={(data: User["prefCulturalInterest"]) =>
                                setInputUser({
                                    ...inputUser,
                                    prefCulturalInterest: data
                                })
                            }
                        ></InputRadio>
                        <InputRadio
                            name={"Sport Cadence"}
                            labels={["low", "medium", "high"]}
                            onChange={(data: User["prefSportCadence"]) =>
                                setInputUser({
                                    ...inputUser,
                                    prefSportCadence: data
                                })
                            }
                        ></InputRadio>
                        <InputRadio
                            name={"Travel Cadence"}
                            labels={["low", "medium", "high"]}
                            onChange={(data: User["prefTravelCadence"]) =>
                                setInputUser({
                                    ...inputUser,
                                    prefTravelCadence: data
                                })
                            }
                        ></InputRadio>
                        <InputRadio
                            name={"Owl Or SkyLark"}
                            labels={["owl", "skylark"]}
                            onChange={(data: User["prefOwlOrSkyLark"]) =>
                                setInputUser({
                                    ...inputUser,
                                    prefOwlOrSkyLark: data
                                })
                            }
                        ></InputRadio>
                        <InputRadio
                            name={"Sexual Preferences"}
                            labels={["male", "female", "both"]}
                            onChange={(data: User["prefSexualPreferences"]) =>
                                setInputUser({
                                    ...inputUser,
                                    prefSexualPreferences: data
                                })
                            }
                        ></InputRadio>
                        <div className={cx("container__options__prefs__age")}>
                            <h2>Range of Age</h2>
                            <InputNumber
                                onChange={(data: User["prefAgeMax"]) =>
                                    setInputUser({
                                        ...inputUser,
                                        prefAgeMax: data
                                    })
                                }
                                label="Maximum Age"
                                value={inputUser.prefAgeMax}
                                required={true}
                                min={18}
                                max={65}
                            />
                            <InputNumber
                                onChange={(data: User["prefAgeMin"]) =>
                                    setInputUser({
                                        ...inputUser,
                                        prefAgeMin: data
                                    })
                                }
                                label="Minimum Age"
                                value={inputUser.prefAgeMin}
                                required={true}
                                min={18}
                                max={65}
                            />
                        </div>
                    </div>
                </div>
                <div className={cx("container__button")}>
                    <Button submit theme="form" text={text}></Button>
                    <Button theme="form" text="Close" onClick={close}></Button>
                </div>
            </form>
        </>
    );
};
