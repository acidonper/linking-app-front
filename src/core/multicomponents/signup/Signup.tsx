import React, { useState } from "react";
import { bind } from "../../../utils/bind";
import styles from "./Signup.module.css";
import { Button } from "../../components/button/Button";
import { InputText } from "../../components/input/inputtext/InputText";
import { InputPass } from "../../components/input/inputpassword/InputPass";
import { InputRadio } from "../../components/input/inputradio/InputRadio";
import { apiSignup } from "../../../infraestructure/signup/signup";
import { User } from "../../../domain/User";

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
    const user: User = {
        name: "",
        lastname: "",
        username: "",
        password: "",
        email: "",
        role: "user",
        photos: ["http://photo1.es", "http://photo2.es"],
        information: {
            age: 31,
            gender: "male",
            education: "university",
            city: "Madrid",
            physicalCondition: "fitness",
            activity: "energetic",
            lifeStyle: "studying",
            kidsLover: true,
            petsLover: false
        },
        preferences: {
            culturalInterest: "low",
            sportCadence: "high",
            travelCadence: "high",
            owlOrSkyLark: "owl",
            sexualPreferences: "female",
            ageRange: {
                min: 22,
                max: 32
            }
        }
    };

    const [inputUser, setinputUser] = useState(user);

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
                        onChange={data =>
                            setinputUser({ ...inputUser, name: data })
                        }
                        label="First Name"
                        value={inputUser.name}
                    />
                    <InputText
                        onChange={data =>
                            setinputUser({ ...inputUser, lastname: data })
                        }
                        label="Last Name"
                        value={inputUser.lastname}
                    />
                    <InputText
                        onChange={data =>
                            setinputUser({ ...inputUser, username: data })
                        }
                        label="Username"
                        value={inputUser.username}
                    />
                    <InputText
                        onChange={data =>
                            setinputUser({ ...inputUser, email: data })
                        }
                        label="Email"
                        value={inputUser.email}
                    />
                    <InputPass
                        onChange={data =>
                            setinputUser({ ...inputUser, password: data })
                        }
                        label="Password"
                        value={inputUser.password}
                    />
                    <div className={cx("popup__form__container__options")}>
                        <div
                            className={cx(
                                "popup__form__container__options__info"
                            )}
                        >
                            <h2>Gender</h2>
                            <form>
                                <InputRadio
                                    checked={true}
                                    label="female"
                                    value={inputUser.email}
                                    onChange={() => {}}
                                ></InputRadio>
                                <InputRadio
                                    checked={false}
                                    label="male"
                                    value={inputUser.email}
                                    onChange={() => {}}
                                ></InputRadio>
                            </form>
                            <h2>Education</h2>
                            <form>
                                <InputRadio
                                    checked={true}
                                    label="female"
                                    value={inputUser.email}
                                    onChange={() => {}}
                                ></InputRadio>
                                <InputRadio
                                    checked={false}
                                    label="male"
                                    value={inputUser.email}
                                    onChange={() => {}}
                                ></InputRadio>
                            </form>
                        </div>
                        <div
                            className={cx(
                                "popup__form__container__options__prefs"
                            )}
                        >
                            <h1>pepe</h1>
                            <h1>pepa</h1>
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
