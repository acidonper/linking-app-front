import React, { useState } from "react";
import { bind } from "../../../utils/bind";
import styles from "./Signup.module.css";
import { Button } from "../../components/button/Button";
import { InputText } from "../../components/input/inputtext/InputText";
import { InputPass } from "../../components/input/inputpassword/InputPass";
import { InputRadio } from "../../components/input/inputradio/InputRadio";
import { apiSignup } from "../../../infraestructure/signup/signup";
import { User } from "../../../domain/User";
import { cities } from "../../../domain/Cities";

const cx = bind(styles);

interface Props {
    title: string;
    text: string;
    closeSignup(): void;
}

export const Signup: React.FunctionComponent<Props> = ({
    title,
    text,
    closeSignup
}) => {
    let user: User = {} as any;

    // const user: User = {
    //     name: "",
    //     lastname: "",
    //     username: "",
    //     email: "",
    //     password: "",
    //     role: "user",
    //     photos: ["http://photo1.es", "http://photo2.es"],
    //     infoAge: 18,
    //     infoGender: "female",
    //     infoEducation: "university",
    //     infoPhysicalCondition: "fitness",
    //     infoActivity: "energetic",
    //     infoLifeStyle: "studying",
    //     infoKidsLover: true,
    //     infoPetsLover: true,
    //     infoCity: "Madrid",
    //     prefCulturalInterest: "low",
    //     prefSportCadence: "high",
    //     prefTravelCadence: "medium",
    //     prefOwlOrSkyLark: "owl",
    //     prefSexualPreferences: "male",
    //     prefAgeMin: 18,
    //     prefAgeMax: 64
    // };

    const [inputUser, setInputUser] = useState(user);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const newuser = await apiSignup(inputUser);
        if (typeof newuser !== "string") {
            alert(newuser);
        } else {
            alert("New User: " + newuser);
        }
    };

    return (
        <div className={cx("popup")}>
            <div className={cx("popup__form")}>
                <h2>{title}</h2>
                <form
                    className={cx("popup__form__container")}
                    onSubmit={handleSubmit}
                >
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
                    />
                    <div className={cx("popup__form__container__options")}>
                        <div
                            className={cx(
                                "popup__form__container__options__info"
                            )}
                        >
                            <h1>Information</h1>
                            <div
                                className={cx(
                                    "popup__form__container__options__info__age"
                                )}
                            >
                                <h2>Age</h2>
                                <InputText
                                    onChange={(data: User["infoAge"]) =>
                                        setInputUser({
                                            ...inputUser,
                                            infoAge: data
                                        })
                                    }
                                    label="Age"
                                    value={inputUser.infoAge}
                                    required={true}
                                    type="text"
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
                                labels={[
                                    "elementary",
                                    "highSchool",
                                    "university"
                                ]}
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
                                onChange={(
                                    data: User["infoPhysicalCondition"]
                                ) =>
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
                        <div
                            className={cx(
                                "popup__form__container__options__prefs"
                            )}
                        >
                            <h1>Preferences</h1>
                            <InputRadio
                                name={"Cultural Interest"}
                                labels={["low", "medium", "high"]}
                                onChange={(
                                    data: User["prefCulturalInterest"]
                                ) =>
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
                                onChange={(
                                    data: User["prefSexualPreferences"]
                                ) =>
                                    setInputUser({
                                        ...inputUser,
                                        prefSexualPreferences: data
                                    })
                                }
                            ></InputRadio>
                            <div
                                className={cx(
                                    "popup__form__container__options__prefs__age"
                                )}
                            >
                                <h2>Range of Age</h2>
                                <InputText
                                    onChange={(data: User["prefAgeMax"]) =>
                                        setInputUser({
                                            ...inputUser,
                                            prefAgeMax: data
                                        })
                                    }
                                    label="Maximum Age"
                                    value={inputUser.prefAgeMax}
                                    required={true}
                                    type="text"
                                />
                                <InputText
                                    onChange={(data: User["prefAgeMin"]) =>
                                        setInputUser({
                                            ...inputUser,
                                            prefAgeMin: data
                                        })
                                    }
                                    label="Minimum Age"
                                    value={inputUser.prefAgeMin}
                                    required={true}
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx("popup__form__container__button")}>
                        <Button submit theme="form" text={text}></Button>
                        <Button
                            theme="form"
                            text="Close"
                            onClick={closeSignup}
                        ></Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
